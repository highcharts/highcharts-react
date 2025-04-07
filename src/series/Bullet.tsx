/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesBulletOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bullet/BulletSeries.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
}

/**
 * Bullet series
 */
const Bullet = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "bullet",
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

interface BulletSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBulletOptions>;
  children?: React.ReactNode;
}

export function BulletSeries(_props: BulletSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
BulletSeries.type = "Series";
Bullet.Series = BulletSeries;

BulletSeries._HCReact = {
  type: "Series",
  HC_Option: "series.bullet",
  childOption: "series.bullet",
};

Bullet.type = "SeriesChart";
export default Bullet;
