import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

type TableName = "brands" | "products" | "blogs" | "news";

interface UseRealtimeSubscriptionProps<T> {
  table: TableName;
  onInsert?: (payload: T) => void;
  onUpdate?: (payload: T) => void;
  onDelete?: (payload: T) => void;
}

export function useRealtimeSubscription<T>({
  table,
  onInsert,
  onUpdate,
  onDelete,
}: UseRealtimeSubscriptionProps<T>) {
  useEffect(() => {
    const channel = supabase
      .channel(`public:${table}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: table,
        },
        (payload) => {
          onInsert?.(payload.new as T);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: table,
        },
        (payload) => {
          onUpdate?.(payload.new as T);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: table,
        },
        (payload) => {
          onDelete?.(payload.old as T);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, onInsert, onUpdate, onDelete]);
}
