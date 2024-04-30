/*******************************************************************************
 *
 * Highcharts React Wrapper Generator
 *
 *
 *******************************************************************************/

import fetch from 'node-fetch';
import genComponent from './generator/gen-component.mjs';
import genRoot from './generator/gen-root-component.mjs';

import { writeFile } from 'node:fs/promises';
import prettier from 'prettier';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const options = {
  outputPath: path.join(__dirname, '..', 'src')
};

////////////////////////////////////////////////////////////////////////////////

/** Fetch tree.json */
const fetchTree = async () => {
  console.log('Fetching tree from api.highcharts.com..');

  const response = await fetch(
    'https://api.highcharts.com/highcharts/tree.json'
  );

  return await response.json();
};

/** Dump component */
const dumpComponent = (componentName, componentSrc) =>
  writeFile(
    path.join(options.outputPath, componentName + '.tsx'),
    componentSrc
  );

////////////////////////////////////////////////////////////////////////////////

/** Main entry point */
const build = async () => {
  const tree = await fetchTree();

  // Handle root component
  const rootSrc = await genRoot(tree);
  await dumpComponent(
    'Highcharts',
    prettier.format(rootSrc, { parser: 'typescript' })
  );

  // TODO: Filter and name map
  for (let i = 0; i < Object.keys(tree.series.children).length; ++i) {
    let name = Object.keys(tree.series.children)[i];
    const pname = name[0].toUpperCase() + name.substr(1);

    const seriesSrc = await genComponent(pname, tree.series.children[name]);
    await dumpComponent(
      pname,
      prettier.format(seriesSrc, { parser: 'typescript' })
    );
  }

  return true;
};

build().then(console.log('All done!')).catch(console.error);
