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

import type { SeriesObvOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/obv.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Obv series
 */
const Obv = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "obv",
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

interface ObvSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesObvOptions>;
  children?: React.ReactNode;
}

export function ObvSeries(_props: ObvSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ObvSeries.type = "Series";
Obv.Series = ObvSeries;

ObvSeries._HCReact = {
  type: "Series",
  HC_Option: "series.obv",
  childOption: "series.obv",
};

Obv.type = "SeriesChart";
export default Obv;
