import { realpathSync } from "fs";
import { homedir } from "os";

export default function untildify(path) {
  return realpathSync(path.replace(/^~(?=$|\/|\\)/, homedir()));
}
