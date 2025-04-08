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

import type { SeriesEmaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/ema.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Ema series
 */
const Ema = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ema",
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

interface EmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesEmaOptions>;
  children?: React.ReactNode;
}

export function EmaSeries(_props: EmaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
EmaSeries.type = "Series";
Ema.Series = EmaSeries;

EmaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.ema",
  childOption: "series.ema",
};

Ema.type = "SeriesChart";
export default Ema;
