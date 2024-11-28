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

import type { SeriesDmiOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/DMI/DMIIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
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
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface DmiSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesDmiOptions>;
  children?: React.ReactNode;
}

export function DmiSeries(_props: DmiSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
DmiSeries.type = "Series";
Dmi.Series = DmiSeries;

DmiSeries._HCReact = {
  type: "Series",
  HC_Option: "series.dmi",
  childOption: "series.dmi",
};

// TODO: Fix typings
// @ts-ignore:
DmiSeries.defaultProps = {
  type: "dmi",
};

Dmi.type = "SeriesChart";
export default Dmi;
