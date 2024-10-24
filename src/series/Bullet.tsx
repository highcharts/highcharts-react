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

import type { SeriesBulletOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Bullet/BulletSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface BulletSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesBulletOptions>;
}

export function BulletSeries(_props: BulletSeriesProps) {
  return null;
}

BulletSeries.type = "Series";
Bullet.Series = BulletSeries;

// TODO: Fix typings
// @ts-ignore:
BulletSeries.defaultProps = {
  type: "bullet",
};

Bullet.type = "SeriesChart";
export default Bullet;
