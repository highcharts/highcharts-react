/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import { getHighcharts } from "../Highcharts";

import exporting from "highcharts/esm/modules/exporting.src";

if (typeof getHighcharts().__provided === "undefined") {
  typeof exporting === "function" && exporting(getHighcharts());
}
import offlineexporting from "highcharts/esm/modules/offline-exporting.src";

if (typeof getHighcharts().__provided === "undefined") {
  typeof offlineexporting === "function" && offlineexporting(getHighcharts());
}

import exportdata from "highcharts/esm/modules/export-data.src";

if (typeof getHighcharts().__provided === "undefined") {
  typeof exportdata === "function" && exportdata(getHighcharts());
}

export type ExportingProps = {
  accessibility?: { enabled?: boolean };
  allowHTML?: boolean;
  allowTableSorting?: boolean;
  applyStyleSheets?: boolean;

  chartOptions?: Highcharts.Options;
  csv?: {
    annotations?: { itemDelimiter?: string; join?: boolean };
    columnHeaderFormatter?: Function | null;
    dateFormat?: string;
    decimalPoint?: string | null;
    itemDelimiter?: string | null;
    lineDelimiter?: string;
  };
  enabled?: boolean;
  error?: Highcharts.ExportingErrorCallbackFunction;
  fallbackToExportServer?: boolean;
  fetchOptions?: Object;
  filename?: string;
  libURL?: string;
  menuItemDefinitions?: Highcharts.Dictionary<Highcharts.ExportingMenuObject>;
  pdfFont?: {
    bold?: string | undefined;
    bolditalic?: string | undefined;
    italic?: string | undefined;
    normal?: string | undefined;
  };
  printMaxWidth?: number;
  scale?: number;
  showExportInProgress?: boolean;
  showTable?: boolean;
  sourceHeight?: number;
  sourceWidth?: number;
  tableCaption?: boolean | string;
  type?: Highcharts.ExportingMimeTypeValue;
  url?: {};
  useMultiLevelHeaders?: boolean;
  useRowspanHeaders?: boolean;
  width?: number;
};

export function Exporting(props: ExportingProps) {
  return null;
}

Exporting._HCReact = {
  type: "HC_Option",
  HCOption: "exporting",
  childOption: "",
  defaultOptions: undefined,
  isArrayType: false,
};

export default Exporting;
