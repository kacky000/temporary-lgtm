import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An approving review comment with quiet dread: the word "temporary" and the year beside it.
const comment =
  "LGTM. It sits right under a comment from 2019 that says \"temporary,\" and I think we both know what that means.";

const limit = 140;
if ([...comment].length > limit) throw new Error(`comment is ${[...comment].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), comment);
