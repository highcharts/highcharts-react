/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesBulletOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A bullet graph is a variation of a bar graph. The bullet graph features a
 * single measure, compares it to a target, and displays it in the context of
 * qualitative ranges of performance that could be set using
 * [plotBands](https://api.highcharts.com/highcharts/yAxis.plotBands) on
 * [yAxis](https://api.highcharts.com/highcharts/yAxis).
 *
 * A ready-made chart with `chart.type` set to `bullet`. Declare the data with
 * `<Bullet.Series>`, or use `BulletSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bullet>
 *   <Bullet.Series data={[1, 2, 3]} />
 * </Bullet>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bullet
 */
declare function Bullet(props: ICommonAttributes): React.JSX.Element;
declare namespace Bullet {
    export { BulletSeries as Series };
    export var type: string;
}
type SeriesBulletConfig = Omit<SeriesBulletOptions, "type">;
/** Props for the `<BulletSeries />` component. */
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
/**
 * A bullet graph is a variation of a bar graph. The bullet graph features a
 * single measure, compares it to a target, and displays it in the context of
 * qualitative ranges of performance that could be set using
 * [plotBands](https://api.highcharts.com/highcharts/yAxis.plotBands) on
 * [yAxis](https://api.highcharts.com/highcharts/yAxis).
 *
 * Renders the `bullet` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BulletSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bullet
 */
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
