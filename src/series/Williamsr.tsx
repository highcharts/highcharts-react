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

import type { SeriesWilliamsrOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/WilliamsR/WilliamsRIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Williamsr series
 */
const Williamsr = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "williamsr",
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

interface WilliamsrSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWilliamsrOptions>;
  children?: React.ReactNode;
}

export function WilliamsrSeries(_props: WilliamsrSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
WilliamsrSeries.type = "Series";
Williamsr.Series = WilliamsrSeries;

WilliamsrSeries._HCReact = {
  type: "Series",
  HC_Option: "series.williamsr",
  childOption: "series.williamsr",
};

Williamsr.type = "SeriesChart";
export default Williamsr;
