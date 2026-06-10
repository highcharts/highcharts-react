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
import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Polygon series
 */
declare const Polygon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PolygonSeries;
    type: string;
};
type SeriesPolygonConfig = Omit<SeriesPolygonOptions, "type">;
export interface PolygonSeriesProps {
    id?: SeriesPolygonConfig["id"];
    index?: SeriesPolygonConfig["index"];
    name?: SeriesPolygonConfig["name"];
    className?: SeriesPolygonConfig["className"];
    color?: SeriesPolygonConfig["color"];
    events?: SeriesPolygonConfig["events"];
    data?: SeriesPolygonConfig["data"];
    options?: SeriesPolygonConfig;
}
export declare function PolygonSeries(_props: PolygonSeriesProps): any;
export declare namespace PolygonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Polygon;
