/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesBulletOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Bullet series
 */
declare const Bullet: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BulletSeries;
    type: string;
};
export interface BulletSeriesProps {
    type?: "bullet";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesBulletOptions, "type">;
}
export declare function BulletSeries(_props: BulletSeriesProps): any;
export declare namespace BulletSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bullet;
