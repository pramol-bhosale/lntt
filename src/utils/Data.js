import { Calendar, CalendarPlus, MagnifyingGlass, TrendUp } from "@phosphor-icons/react";

export const sideBarLinks = [
  {
    label: "Schedule Entry",
    path: "schedules/add",
    icon: <CalendarPlus size={30} weight="fill" />,
  },
  {
    label: "Schedules",
    path: "schedules/view",
    icon: <Calendar size={30} weight="fill" />,
  },
  {
    label: "SMEs Availability",
    path: "availability",
    icon: <MagnifyingGlass size={30} />,
  },
  {
    label: "Reports",
    path: "report",
    icon: <TrendUp size={30} />,
  }
];

export const StockTableColumns = [];
