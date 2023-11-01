import { ToolItemProps } from "./components/dashboard/tool-item";

export const MAX_FREE_COUNTS = 5;

export const THEME_MODES = [
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
];

export const TOOLS: ToolItemProps[] = [
  {
    title: "Conversation generation",
    icon: "/icons/conversation.svg",
    url: "/conversation",
    slug: "conversation",
    color: "bg-blue-500",
  },
  {
    title: "Photo generation",
    icon: "/icons/photo.svg",
    url: "/photo",
    color: "bg-violet-500",
    slug: "photo",
  },
  {
    title: "Video generation",
    icon: "/icons/video.svg",
    url: "/video",
    color: "bg-amber-500",
    slug: "video",
  },
  {
    title: "Audio generation",
    icon: "/icons/audio.svg",
    url: "/audio",
    color: "bg-orange-500",
    slug: "audio",
  },
  {
    title: "Code generation",
    icon: "/icons/code.svg",
    url: "/code",
    color: "bg-green-500",
    slug: "code",
  },
];

export const NAVIGATIONS = [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: "/dashboard",
    slug: "dashboard",
  },
  ...TOOLS,
];
