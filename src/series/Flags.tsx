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

import type { SeriesFlagsOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

/**
 * Flags series
 */
const Flags = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "flags",
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

interface FlagsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesFlagsOptions>;
  children?: React.ReactNode;
}

export function FlagsSeries(_props: FlagsSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
FlagsSeries.type = "Series";
Flags.Series = FlagsSeries;

FlagsSeries._HCReact = {
  type: "Series",
  HC_Option: "series.flags",
  childOption: "series.flags",
};

// TODO: Fix typings
// @ts-ignore:
FlagsSeries.defaultProps = {
  type: "flags",
};

Flags.type = "SeriesChart";
export default Flags;
