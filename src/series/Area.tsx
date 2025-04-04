/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesAreaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

if (typeof getHighcharts().__provided === "undefined") {
}

/**
 * Area series
 */
const Area = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "area",
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

interface AreaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAreaOptions>;
  children?: React.ReactNode;
}

export function AreaSeries(_props: AreaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AreaSeries.type = "Series";
Area.Series = AreaSeries;

AreaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.area",
  childOption: "series.area",
};

Area.type = "SeriesChart";
export default Area;
