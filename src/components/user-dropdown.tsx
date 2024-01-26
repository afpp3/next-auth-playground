"use client";

import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; 
import { logout } from "@/lib/auth/actions";

import Link from "next/link";

export const UserDropdown = ({
  email,
  avatar,
}: {
  email: string;
  avatar?: string | null;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {/* eslint @next/next/no-img-element:off */}
        <img
          src={avatar ?? "https://source.boringavatars.com/marble/60/" + email}
          alt="Avatar"
          className="h-8 w-8 rounded-full"
          width={64}
          height={64}
        ></img>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-muted-foreground">
          {email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/account">Account</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-muted-foreground" asChild>
          <form action={logout}>
            <button>Sign out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
