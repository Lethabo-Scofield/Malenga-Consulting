import {
  Briefcase,
  Building2,
  Compass,
  Factory,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Laptop,
  Rocket,
  Store,
  Truck,
  Users,
  Code2,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/content/services";
import type { IndustrySlug } from "@/content/company";

/** Icons for the five divisions. */
export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "transport-supply-chain": Truck,
  "startup-business-development": Rocket,
  "it-software-development": Code2,
  "strategy-marketing": Compass,
  "workshops-coaching-mentorship": Users,
};

/** Icons for the industries. */
export const industryIcons: Record<IndustrySlug, LucideIcon> = {
  "logistics-transportation": Truck,
  "retail-distribution": Store,
  manufacturing: Factory,
  smes: Building2,
  "startups-entrepreneurs": Rocket,
  "educational-institutions": GraduationCap,
  "public-sector": Landmark,
  "non-profit": HeartHandshake,
  "technology-digital": Laptop,
  "professional-services": Briefcase,
};
