/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesMfiOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/MFI/MFIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Mfi series
 */
const Mfi = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "mfi",
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

interface MfiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMfiOptions>;
}

export function MfiSeries(_props: MfiSeriesProps) {
  return null;
}

MfiSeries.type = "Series";
Mfi.Series = MfiSeries;

// TODO: Fix typings
// @ts-ignore:
MfiSeries.defaultProps = {
  type: "mfi",
};

Mfi.type = "SeriesChart";
export default Mfi;
