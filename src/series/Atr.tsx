/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesAtrOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/ATR/ATRIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface AtrSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAtrOptions>;
}

Atr.Series = (_props: AtrSeriesProps) => <></>;

Atr.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Atr.Series.defaultProps = {
  type: "atr",
};

Atr.type = "SeriesChart";
export default Atr;
