import { homedir } from "os";
import { normalize } from 'path';

export function untildify(path) {
  return path.replace(/^~(?=$|\/|\\)/, homedir());
}

export function untildifyWith(path, replacement) {
  return normalize(path.replace(/^~(?=$|\/|\\)/, replacement));
}
