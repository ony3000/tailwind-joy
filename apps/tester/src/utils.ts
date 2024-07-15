import { v7 } from 'uuid';

export async function sleep(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, milliseconds);
  });
}

export function uuid() {
  return v7();
}
