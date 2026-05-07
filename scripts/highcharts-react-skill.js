#!/usr/bin/env node
import { cp, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../.claude/skills/highcharts-react'
);
const dest = resolve(process.cwd(), '.claude/skills/highcharts-react');

try {
  await mkdir(dest, { recursive: true });
  await cp(src, dest, { recursive: true });
  console.log(
    'Highcharts React skill added to .claude/skills/highcharts-react'
  );
} catch (err) {
  console.error('Failed to add Highcharts React skill:', err.message);
  process.exit(1);
}
