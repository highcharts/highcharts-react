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

import type { SeriesTrixOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Trix series
 */
const Trix = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "trix",
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

interface TrixSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesTrixOptions>;
}

Trix.Series = (_props: TrixSeriesProps) => <></>;

Trix.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Trix.Series.defaultProps = {
  type: "trix",
};

Trix.type = "SeriesChart";
export default Trix;
