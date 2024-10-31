/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesKlingerOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface KlingerSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesKlingerOptions>;
}

export function KlingerSeries(_props: KlingerSeriesProps) {
  return null;
}

KlingerSeries.type = "Series";
Klinger.Series = KlingerSeries;

// TODO: Fix typings
// @ts-ignore:
KlingerSeries.defaultProps = {
  type: "klinger",
};

Klinger.type = "SeriesChart";
export default Klinger;
