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
import type { SeriesPictorialOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Pictorial series
 */
declare const Pictorial: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PictorialSeries;
    type: string;
};
type SeriesPictorialConfig = Omit<SeriesPictorialOptions, "type">;
export interface PictorialSeriesProps {
    id?: SeriesPictorialConfig["id"];
    index?: SeriesPictorialConfig["index"];
    name?: SeriesPictorialConfig["name"];
    className?: SeriesPictorialConfig["className"];
    color?: SeriesPictorialConfig["color"];
    events?: SeriesPictorialConfig["events"];
    data?: SeriesPictorialConfig["data"];
    options?: SeriesPictorialConfig;
}
export declare function PictorialSeries(_props: PictorialSeriesProps): any;
export declare namespace PictorialSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pictorial;
