/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesPriceenvelopesOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/priceenvelopes.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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
  children?: React.ReactNode;
}

export function PriceenvelopesSeries(_props: PriceenvelopesSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
PriceenvelopesSeries.type = "Series";
Priceenvelopes.Series = PriceenvelopesSeries;

PriceenvelopesSeries._HCReact = {
  type: "Series",
  HC_Option: "series.priceenvelopes",
  childOption: "series.priceenvelopes",
};

Priceenvelopes.type = "SeriesChart";
export default Priceenvelopes;
