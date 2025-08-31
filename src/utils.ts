import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge class names using clsx and tailwind-merge.
 * @param {ClassValue[]} classes The class names to merge.
 * @returns {string} A string of merged class names.
 */
const cn = (...classes: ClassValue[]): string => twMerge(clsx(classes));

export default cn;
