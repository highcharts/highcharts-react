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
import type { SeriesPieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pie series
 */
declare const Pie: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PieSeries;
    type: string;
};
type SeriesPieConfig = Omit<SeriesPieOptions, "type">;
export interface PieSeriesProps {
    id?: SeriesPieConfig["id"];
    index?: SeriesPieConfig["index"];
    name?: SeriesPieConfig["name"];
    className?: SeriesPieConfig["className"];
    color?: SeriesPieConfig["color"];
    events?: SeriesPieConfig["events"];
    data?: SeriesPieConfig["data"];
    options?: SeriesPieConfig;
}
export declare function PieSeries(_props: PieSeriesProps): any;
export declare namespace PieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pie;
