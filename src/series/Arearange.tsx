/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/arearange.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Arearange series
 */
const Arearange = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "arearange",
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

interface ArearangeSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesArearangeOptions>;
  children?: React.ReactNode;
}

export function ArearangeSeries(_props: ArearangeSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ArearangeSeries.type = "Series";
Arearange.Series = ArearangeSeries;

ArearangeSeries._HCReact = {
  type: "Series",
  HC_Option: "series.arearange",
  childOption: "series.arearange",
};

Arearange.type = "SeriesChart";
export default Arearange;
