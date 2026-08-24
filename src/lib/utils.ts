import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageSrc(image: any): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (typeof image === "object" && "src" in image && typeof image.src === "string") {
    return image.src;
  }
  return String(image);
}
