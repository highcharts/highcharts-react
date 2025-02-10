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

import type { SeriesAreasplineOptions } from "highcharts/highcharts";
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
 * Areaspline series
 */
const Areaspline = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "areaspline",
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

interface AreasplineSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAreasplineOptions>;
  children?: React.ReactNode;
}

export function AreasplineSeries(_props: AreasplineSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AreasplineSeries.type = "Series";
Areaspline.Series = AreasplineSeries;

AreasplineSeries._HCReact = {
  type: "Series",
  HC_Option: "series.areaspline",
  childOption: "series.areaspline",
};

Areaspline.type = "SeriesChart";
export default Areaspline;
