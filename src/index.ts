import { blink } from "./blink";

// FIXME: correct keyframes type.
export default function anymate(keyframes: any) {
  return {
    blink: blink(keyframes),
  };
}
