/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesAbandsOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/ABands/ABandsIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Abands series
 */
const Abands = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "abands",
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

interface AbandsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAbandsOptions>;
  children?: React.ReactNode;
}

export function AbandsSeries(_props: AbandsSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
AbandsSeries.type = "Series";
Abands.Series = AbandsSeries;

AbandsSeries._HCReact = {
  type: "Series",
  HC_Option: "series.abands",
  childOption: "series.abands",
};

// TODO: Fix typings
// @ts-ignore:
AbandsSeries.defaultProps = {
  type: "abands",
};

Abands.type = "SeriesChart";
export default Abands;
