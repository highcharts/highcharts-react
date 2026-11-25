/**
 * Re-exports the Highcharts namespace in the root declaration files.
 *
 * `tsc` emits the `Highcharts` export as a variable, which has no type meaning
 * (the source keeps the `let` for `setHighcharts`). The namespace comes from
 * the product typings, as `nodenext` resolves the masters default import to
 * the module object.
 *
 * The import points to the canonical typings (`highcharts/highstock.js`), not
 * the `.src` copy the masters resolve to, so augmentations of `highcharts`
 * apply to the exported types (#597).
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MASTERS_IMPORT =
  /^import HC from "highcharts\/es-modules\/masters\/([a-z-]+)\.src\.js";$/m;
const VARIABLE_EXPORT = 'export declare let Highcharts: typeof HC;';
const NAMESPACE_EXPORT = 'export { HC as Highcharts };';

for (const file of readdirSync(ROOT).filter((f) => f.endsWith('.d.ts'))) {
  const path = join(ROOT, file);
  const source = readFileSync(path, 'utf8');

  if (!source.includes(VARIABLE_EXPORT)) {
    continue;
  }

  if (!MASTERS_IMPORT.test(source)) {
    throw new Error(`Unexpected Highcharts import in ${file}.`);
  }

  writeFileSync(
    path,
    source
      .replace(MASTERS_IMPORT, 'import * as HC from "highcharts/$1.js";')
      .replace(VARIABLE_EXPORT, NAMESPACE_EXPORT)
  );
}

const rootTypes = readFileSync(join(ROOT, 'Highcharts.d.ts'), 'utf8');

if (!rootTypes.includes(NAMESPACE_EXPORT)) {
  throw new Error('Unexpected Highcharts export in Highcharts.d.ts.');
}
