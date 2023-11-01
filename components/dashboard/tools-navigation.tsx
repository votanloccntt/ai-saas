import { TOOLS } from "@/constants";
import { cn } from "@/lib/utils";
import ToolItem from "./tool-item";

interface ToolsNavigationProps {
  title?: string;
}

const ToolsNavigation = ({
  title = "Unlock power of AI",
}: ToolsNavigationProps) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full items-center grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none",
        "lg:px-4 lg:pt-0 lg:pb-6"
      )}
    >
      <div className="text-center mb-14">
        <h3>{title}</h3>
        <p className="text-muted-foreground text-lg mt-2">
          Chat with the smartest AI - Experience the power of AI with us
        </p>
      </div>
      <div className="w-full max-w-[30,75rem] mx-auto">
        {TOOLS.map((tool, index) => (
          <ToolItem key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsNavigation;
