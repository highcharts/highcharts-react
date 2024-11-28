/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSunburstOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Sunburst/SunburstSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Sunburst series
 */
const Sunburst = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sunburst",
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

interface SunburstSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSunburstOptions>;
  children?: React.ReactNode;
}

export function SunburstSeries(_props: SunburstSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;

SunburstSeries._HCReact = {
  type: "Series",
  HC_Option: "series.sunburst",
  childOption: "series.sunburst",
};

// TODO: Fix typings
// @ts-ignore:
SunburstSeries.defaultProps = {
  type: "sunburst",
};

Sunburst.type = "SeriesChart";
export default Sunburst;
