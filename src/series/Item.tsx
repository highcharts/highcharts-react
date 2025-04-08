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

import type { SeriesItemOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/item.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Item series
 */
const Item = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "item",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface ItemSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesItemOptions>;
  children?: React.ReactNode;
}

export function ItemSeries(_props: ItemSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
ItemSeries.type = "Series";
Item.Series = ItemSeries;

ItemSeries._HCReact = {
  type: "Series",
  HC_Option: "series.item",
  childOption: "series.item",
};

Item.type = "SeriesChart";
export default Item;
