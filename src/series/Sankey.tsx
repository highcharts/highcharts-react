/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSankeyOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Sankey/SankeySeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Sankey series
 */
const Sankey = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sankey",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface SankeySeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSankeyOptions>;
  children?: React.ReactNode;
}

export function SankeySeries(_props: SankeySeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;

SankeySeries._HCReact = {
  type: "Series",
  HC_Option: "series.sankey",
  childOption: "series.sankey",
};

Sankey.type = "SeriesChart";
export default Sankey;
