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

import type { SeriesAroonOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Aroon/AroonIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Aroon series
 */
const Aroon = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "aroon",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface AroonSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAroonOptions>;
  children?: React.ReactNode;
}

export function AroonSeries(_props: AroonSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AroonSeries.type = "Series";
Aroon.Series = AroonSeries;

AroonSeries._HCReact = {
  type: "Series",
  HC_Option: "series.aroon",
  childOption: "series.aroon",
};

Aroon.type = "SeriesChart";
export default Aroon;
