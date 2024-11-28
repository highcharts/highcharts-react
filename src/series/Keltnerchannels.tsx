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

import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Keltnerchannels series
 */
const Keltnerchannels = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "keltnerchannels",
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

interface KeltnerchannelsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesKeltnerchannelsOptions>;
  children?: React.ReactNode;
}

export function KeltnerchannelsSeries(_props: KeltnerchannelsSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
KeltnerchannelsSeries.type = "Series";
Keltnerchannels.Series = KeltnerchannelsSeries;

KeltnerchannelsSeries._HCReact = {
  type: "Series",
  HC_Option: "series.keltnerchannels",
  childOption: "series.keltnerchannels",
};

// TODO: Fix typings
// @ts-ignore:
KeltnerchannelsSeries.defaultProps = {
  type: "keltnerchannels",
};

Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
