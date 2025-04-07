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

import type { SeriesAtrOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/ATR/ATRIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Atr series
 */
const Atr = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "atr",
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

interface AtrSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAtrOptions>;
  children?: React.ReactNode;
}

export function AtrSeries(_props: AtrSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AtrSeries.type = "Series";
Atr.Series = AtrSeries;

AtrSeries._HCReact = {
  type: "Series",
  HC_Option: "series.atr",
  childOption: "series.atr",
};

Atr.type = "SeriesChart";
export default Atr;
