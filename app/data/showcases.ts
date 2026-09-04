import { publicAsset } from "~/lib/publicAsset";
import type { ShowcaseInfo } from "~/types";

export const showcases: ShowcaseInfo[] = [{
  video: publicAsset("/demonlord_clicker.webm"),
  name: "Demon Lord: Clicker",
  credits: [
    "Blazium Games",
    "Divine Games, Inc.",
    "Pogr, Inc.",
  ],
  link: {
    label: "Steam",
    url: "https://store.steampowered.com/app/1742110/Demon_Lord_Clicker",
  },
}] as const;