"use client";

import { signOut } from "next-auth/react";
import { Button } from "./button";

export default function LogoutButton() {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <Button onClick={handleSignOut} className="w-full">
      Log Out
    </Button>
  );
}
