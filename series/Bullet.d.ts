/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
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
    children?: React.ReactNode;
}
export declare function BulletSeries(_props: BulletSeriesProps): any;
export declare namespace BulletSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Bullet;
