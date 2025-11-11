
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ... keep any other code you already have, like selectRandomIDs ...

export const selectRandomIDs = (objectIDs: number[], selection: number) => {
  const total = objectIDs.length

  let IDs = []

  while (IDs.length < 10) {
    let randomID = Math.floor(Math.random() * total)
    IDs.push(objectIDs[randomID])
  }

  return IDs
}
