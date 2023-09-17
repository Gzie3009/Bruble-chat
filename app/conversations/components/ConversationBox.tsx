'use client'
import { FullConversationType } from "@/app/types";
import React from "react";

type Props = {
  data: FullConversationType;
  selected: boolean;
};

export default function ConversationBox({ data, selected }: Props) {
  return <div>ConversationBox</div>;
}
