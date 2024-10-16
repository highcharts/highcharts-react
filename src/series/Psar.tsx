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

import type { SeriesPsarOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PSAR/PSARIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Psar series
 */
const Psar = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "psar",
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

interface PsarSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPsarOptions>;
}

Psar.Series = (_props: PsarSeriesProps) => <></>;

Psar.Series.type = "Series";

// TODO: Fix typings
// @ts-ignore:
Psar.Series.defaultProps = {
  type: "psar",
};

Psar.type = "SeriesChart";
export default Psar;
