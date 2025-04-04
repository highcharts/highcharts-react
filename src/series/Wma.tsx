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

import type { SeriesWmaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/WMA/WMAIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Wma series
 */
const Wma = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "wma",
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

interface WmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesWmaOptions>;
  children?: React.ReactNode;
}

export function WmaSeries(_props: WmaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
WmaSeries.type = "Series";
Wma.Series = WmaSeries;

WmaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.wma",
  childOption: "series.wma",
};

Wma.type = "SeriesChart";
export default Wma;
