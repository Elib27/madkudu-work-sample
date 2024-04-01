"use client";
import Link from "next/link";
import { Avatar } from "@chakra-ui/react";
import { CloseIcon, ChatIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";

export default function SideBar() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col items-center justify-between bg-sky-950 p-4">
      <Avatar size="sm" />
      <div className="flex flex-col items-center gap-4">
        <ChatIcon boxSize={6} color="white" />
        <BellIcon boxSize={6} color="white" />
        <SettingsIcon boxSize={6} color="white" />
      </div>
      <Link href="/">
        <CloseIcon boxSize={5} color="white" />
      </Link>
    </aside>
  );
}
