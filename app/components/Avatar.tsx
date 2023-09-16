"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import placeholder from "@/public/Images/placeholder.jpeg";
interface AvatarProps {
  User: User;
}

export default function Avatar({ User }: AvatarProps) {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-r-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image alt="Avatar" src={User?.image || placeholder} fill className="rounded-full"/>
      </div>
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"/>
    </div>
  );
}
