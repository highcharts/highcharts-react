/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
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
type SeriesBulletConfig = Omit<SeriesBulletOptions, "type">;
export interface BulletSeriesProps {
    id?: SeriesBulletConfig["id"];
    index?: SeriesBulletConfig["index"];
    name?: SeriesBulletConfig["name"];
    className?: SeriesBulletConfig["className"];
    color?: SeriesBulletConfig["color"];
    events?: SeriesBulletConfig["events"];
    data?: SeriesBulletConfig["data"];
    options?: SeriesBulletConfig;
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
