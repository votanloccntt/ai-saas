"use client";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "./ui/use-toast";

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean;
}
const SubcriptionButton = ({ className, isPro }: SubcriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const handleSubcribe = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={className}>
      <Button
        variant={"ghost"}
        size={"lg"}
        disabled={loading}
        onClick={handleSubcribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-black"
        )}
      >
        <span>{isPro ? "Manage Subcription" : "Upgrade To Pro"}</span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubcriptionButton;
