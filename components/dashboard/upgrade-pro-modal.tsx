"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubcriptionButton from "../subcription-button";
import { useProStore } from "@/stores/pro-store";

interface UpgradeProModalProps {
  isProPlan?: boolean;
}
const UpgradeProModal = ({ isProPlan }: UpgradeProModalProps) => {
  const { isOpen, handleCloseProModal } = useProStore();
  return (
    <Dialog open={isOpen}>
      <DialogContent onClose={handleCloseProModal} showOverlay>
        <SubcriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeProModal;
