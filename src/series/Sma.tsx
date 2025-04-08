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

import type { SeriesSmaOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/sma.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Sma series
 */
const Sma = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sma",
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

interface SmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSmaOptions>;
  children?: React.ReactNode;
}

export function SmaSeries(_props: SmaSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SmaSeries.type = "Series";
Sma.Series = SmaSeries;

SmaSeries._HCReact = {
  type: "Series",
  HC_Option: "series.sma",
  childOption: "series.sma",
};

Sma.type = "SeriesChart";
export default Sma;
