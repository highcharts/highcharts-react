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
import React from "react";
import type { SeriesBulletOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bullet series
 */
declare const Bullet: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BulletSeries;
    type: string;
};
interface BulletSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBulletOptions>;
}
export declare function BulletSeries(_props: BulletSeriesProps): any;
export declare namespace BulletSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Bullet;
