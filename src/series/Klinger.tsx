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

import type { SeriesKlingerOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Klinger series
 */
const Klinger = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "klinger",
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

interface KlingerSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesKlingerOptions>;
  children?: React.ReactNode;
}

export function KlingerSeries(_props: KlingerSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
KlingerSeries.type = "Series";
Klinger.Series = KlingerSeries;

KlingerSeries._HCReact = {
  type: "Series",
  HC_Option: "series.klinger",
  childOption: "series.klinger",
};

// TODO: Fix typings
// @ts-ignore:
KlingerSeries.defaultProps = {
  type: "klinger",
};

Klinger.type = "SeriesChart";
export default Klinger;
