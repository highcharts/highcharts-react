/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesPriceenvelopesOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Priceenvelopes series
 */
const Priceenvelopes = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "priceenvelopes",
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

interface PriceenvelopesSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPriceenvelopesOptions>;
}

export function PriceenvelopesSeries(_props: PriceenvelopesSeriesProps) {
  return null;
}

PriceenvelopesSeries.type = "Series";
Priceenvelopes.Series = PriceenvelopesSeries;

// TODO: Fix typings
// @ts-ignore:
PriceenvelopesSeries.defaultProps = {
  type: "priceenvelopes",
};

Priceenvelopes.type = "SeriesChart";
export default Priceenvelopes;
