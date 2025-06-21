"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { User as UserIcon, Settings, LogOut } from "lucide-react";

const ProfileDropdown = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-transform duration-200 hover:scale-110">
        <Avatar className="h-10 w-10 border-2 border-transparent group-hover:border-red-500">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
            alt={user.username}
          />
          <AvatarFallback className="font-bold">
            {getInitials(user.username)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 p-2 bg-white text-gray-900 border-2 border-gray-300 rounded-lg shadow-lg"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-base">{user.username}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border-t border-gray-300" />
        <Link href="/dashboard/profile" passHref>
          <DropdownMenuItem className="cursor-pointer focus:bg-gray-100">
            <UserIcon className="mr-3 h-5 w-5 text-gray-500" />
            <span className="font-medium">Profile</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/settings" passHref>
          <DropdownMenuItem className="cursor-pointer focus:bg-gray-100">
            <Settings className="mr-3 h-5 w-5 text-gray-500" />
            <span className="font-medium">Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="my-2 border-t border-gray-300" />
        <DropdownMenuItem
          onClick={logout}
          className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          <span className="font-bold">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
