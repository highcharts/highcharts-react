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

import type { SeriesFlagsOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface FlagsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesFlagsOptions>;
}

export function FlagsSeries(_props: FlagsSeriesProps) {
  return null;
}

FlagsSeries.type = "Series";
Flags.Series = FlagsSeries;

// TODO: Fix typings
// @ts-ignore:
FlagsSeries.defaultProps = {
  type: "flags",
};

Flags.type = "SeriesChart";
export default Flags;
