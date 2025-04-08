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

import type { SeriesVwapOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/vwap.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Vwap series
 */
const Vwap = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "vwap",
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

interface VwapSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesVwapOptions>;
  children?: React.ReactNode;
}

export function VwapSeries(_props: VwapSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
VwapSeries.type = "Series";
Vwap.Series = VwapSeries;

VwapSeries._HCReact = {
  type: "Series",
  HC_Option: "series.vwap",
  childOption: "series.vwap",
};

Vwap.type = "SeriesChart";
export default Vwap;
