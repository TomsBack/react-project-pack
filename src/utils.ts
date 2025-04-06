import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge class names using clsx and tailwind-merge.
 * @param classes The class names to merge.
 * @returns A string of merged class names.
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
