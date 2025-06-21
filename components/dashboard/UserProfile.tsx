"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Shield, Key, Calendar } from "lucide-react";

interface UserProfileData {
  id: string;
  username: string;
  email: string;
  role: string;
  last_login?: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<UserProfileData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const InfoRow = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: React.ElementType;
    label: string;
    value: string | undefined;
  }) => (
    <div className="flex items-center gap-4 py-3 border-b last:border-none">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value || "Not available"}</p>
      </div>
    </div>
  );

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center bg-muted/30">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
              alt={user.username}
            />
            <AvatarFallback className="text-2xl">
              {user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-3xl font-bold">{user.username}</CardTitle>
        <p className="text-muted-foreground capitalize">{user.role}</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <InfoRow icon={Key} label="User ID" value={user.id} />
          <InfoRow icon={Mail} label="Email Address" value={user.email} />
          <InfoRow icon={Shield} label="Role" value={user.role} />
          <InfoRow
            icon={Calendar}
            label="Last Login"
            value={
              user.last_login
                ? format(new Date(user.last_login), "PPP p")
                : "First login"
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
