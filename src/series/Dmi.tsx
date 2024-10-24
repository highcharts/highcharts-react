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

import type { SeriesDmiOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/DMI/DMIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Dmi series
 */
const Dmi = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "dmi",
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

interface DmiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDmiOptions>;
}

export function DmiSeries(_props: DmiSeriesProps) {
  return null;
}

DmiSeries.type = "Series";
Dmi.Series = DmiSeries;

// TODO: Fix typings
// @ts-ignore:
DmiSeries.defaultProps = {
  type: "dmi",
};

Dmi.type = "SeriesChart";
export default Dmi;
