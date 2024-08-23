import { v4 } from 'uuid';

export const r = String.raw;

function naiveRng() {
  return [...Array(16)].map(() => Math.floor(Math.random() * 0x100));
}

export function uuid() {
  return v4({
    rng: naiveRng,
  });
}
