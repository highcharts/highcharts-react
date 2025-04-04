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

import type { SeriesSupertrendOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Supertrend series
 */
const Supertrend = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "supertrend",
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

interface SupertrendSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSupertrendOptions>;
  children?: React.ReactNode;
}

export function SupertrendSeries(_props: SupertrendSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
SupertrendSeries.type = "Series";
Supertrend.Series = SupertrendSeries;

SupertrendSeries._HCReact = {
  type: "Series",
  HC_Option: "series.supertrend",
  childOption: "series.supertrend",
};

Supertrend.type = "SeriesChart";
export default Supertrend;
