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
import type { SeriesPivotpointsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * PivotPoints series
 */
declare const PivotPoints: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PivotPointsSeries;
    type: string;
};
type SeriesPivotpointsConfig = Omit<SeriesPivotpointsOptions, "type">;
export interface PivotPointsSeriesProps {
    id?: SeriesPivotpointsConfig["id"];
    index?: SeriesPivotpointsConfig["index"];
    name?: SeriesPivotpointsConfig["name"];
    className?: SeriesPivotpointsConfig["className"];
    color?: SeriesPivotpointsConfig["color"];
    events?: SeriesPivotpointsConfig["events"];
    options?: SeriesPivotpointsConfig;
}
export declare function PivotPointsSeries(_props: PivotPointsSeriesProps): any;
export declare namespace PivotPointsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PivotPoints;
