import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Brain,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  FlaskConical,
  HeartPulse,
  Lock,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Pill,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon registry — add an icon here once, reference it by string key everywhere.
 * Pages and data never import from lucide-react directly.
 */
const registry = {
  video: Video,
  heart: HeartPulse,
  package: Package,
  pill: Pill,
  research: FlaskConical,
  users: Users,
  clock: Clock,
  shield: ShieldCheck,
  lock: Lock,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  arrow: ArrowRight,
  arrowUp: ArrowUpRight,
  chevron: ChevronDown,
  check: Check,
  star: Star,
  stethoscope: Stethoscope,
  brain: Brain,
  baby: Baby,
  calendar: CalendarCheck,
  menu: Menu,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = registry[name];
  return <Glyph className={className} aria-hidden="true" />;
}
