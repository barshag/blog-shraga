import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://blog.forward2shraga.com",
  siteName: "Forward2Shraga",
  siteDescription:
    "הבלוג של קהילת הסוכני בינה מלאכותית הגדולה בישראל",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "פוסטים", href: "/posts" },
    { label: "", href: "/" },
    { label: "אודות", href: "/about" },
  ],
  social: {
    github: "https://github.com/Forward2Shraga",
    twitter: "https://twitter.com/Forward2Shraga",
    linkedin: "https://www.linkedin.com/in/Forward2Shraga/",
    instagram: "https://www.instagram.com/Forward2Shraga/",
  },
};
export default siteConfig;
