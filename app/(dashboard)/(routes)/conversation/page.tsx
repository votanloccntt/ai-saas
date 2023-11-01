"use client";
import ToolsNavigation from "@/components/dashboard/tools-navigation";
import { useRef } from "react";

const ConversationPage = () => {
  const containerRef = useRef(null);
  const messages = [1];
  return (
    <div className="h-full relative flex flex-col justify-between">
      <div
        ref={containerRef}
        className="overflow-y-auto space-y-10 scroll-smooth h-[calc(100vh-180px)]"
      >
        {messages.length > 0 ? <></> : <ToolsNavigation title="Conversation" />}
      </div>
    </div>
  );
};

export default ConversationPage;
