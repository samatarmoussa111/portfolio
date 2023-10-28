import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  iconName: keyof typeof icons;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  action?: () => void;
}

export function ButtonIcon({
  iconName,
  className = "h-4 w-4",
  variant = "default",
  action,
}: Props) {
  const LucideIcon = icons[iconName];

  return (
    <Button onClick={action} variant={variant} size="icon">
      <LucideIcon className={className} />
    </Button>
  );
}
