import { realpathSync } from "fs";
import { resolve } from "path";
import { homedir } from "os";

export default function resolveVirtualRoot(path) {
  return realpathSync(resolve(homedir(), path.substring(2)));
}
