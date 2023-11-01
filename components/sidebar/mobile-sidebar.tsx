"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from ".";
import { useSidebarStore } from "@/stores/sidebar-store";

interface MobileSidebarProps {
  isProPlan?: boolean;
  userLimitcount: number;
}

const MobileSidebar = ({ isProPlan, userLimitcount }: MobileSidebarProps) => {
  const { isOpen } = useSidebarStore();
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="w-screen border-none bg-black p-0 pt-8"
        side="left"
      >
        <Sidebar userLimitCount={userLimitcount} isProPlan={isProPlan} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
