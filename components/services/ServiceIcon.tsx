import {
  BarChart3,
  Briefcase,
  ClipboardList,
  Network,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const icons: Record<ServiceIconName, LucideIcon> = {
  "shield-check": ShieldCheck,
  settings: Settings2,
  network: Network,
  briefcase: Briefcase,
  "clipboard-list": ClipboardList,
  "bar-chart": BarChart3,
};

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name];

  return <Icon className={className} />;
}
