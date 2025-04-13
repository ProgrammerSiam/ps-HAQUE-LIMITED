import { useEffect } from "react";
import { createClient } from "@/lib/supabase";
import {
  RealtimeChannel,
  RealtimePostgresChangesPayload,
} from "@supabase/supabase-js";

type TableName = "brands" | "products" | "blogs" | "news" | "plants";

interface UseRealtimeSubscriptionProps<T extends Record<string, any>> {
  table: TableName;
  onInsert?: (record: T) => void;
  onUpdate?: (record: T) => void;
  onDelete?: (record: T) => void;
}

export function useRealtimeSubscription<T extends Record<string, any>>({
  table,
  onInsert,
  onUpdate,
  onDelete,
}: UseRealtimeSubscriptionProps<T>) {
  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel(`public:${table}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        (payload: RealtimePostgresChangesPayload<T>) => {
          if (payload.eventType === "INSERT" && payload.new) {
            onInsert?.(payload.new as T);
          } else if (payload.eventType === "UPDATE" && payload.new) {
            onUpdate?.(payload.new as T);
          } else if (payload.eventType === "DELETE" && payload.old) {
            onDelete?.(payload.old as T);
          }
        }
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [table, onInsert, onUpdate, onDelete]);
}
