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

import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface KeltnerchannelsSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesKeltnerchannelsOptions>;
}

export function KeltnerchannelsSeries(_props: KeltnerchannelsSeriesProps) {
  return null;
}

KeltnerchannelsSeries.type = "Series";
Keltnerchannels.Series = KeltnerchannelsSeries;

// TODO: Fix typings
// @ts-ignore:
KeltnerchannelsSeries.defaultProps = {
  type: "keltnerchannels",
};

Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
