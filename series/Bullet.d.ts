/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React from "react";
import type { SeriesBulletOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bullet series
 */
declare const Bullet: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: BulletSeriesProps): React.JSX.Element;
    type: string;
};
interface BulletSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBulletOptions>;
}
export default Bullet;
