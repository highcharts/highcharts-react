/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Bellcurve series
 */
declare const Bellcurve: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BellcurveSeries;
    type: string;
};
type SeriesBellcurveConfig = Omit<SeriesBellcurveOptions, "type">;
export interface BellcurveSeriesProps {
    id?: SeriesBellcurveConfig["id"];
    index?: SeriesBellcurveConfig["index"];
    name?: SeriesBellcurveConfig["name"];
    className?: SeriesBellcurveConfig["className"];
    color?: SeriesBellcurveConfig["color"];
    events?: SeriesBellcurveConfig["events"];
    options?: SeriesBellcurveConfig;
}
export declare function BellcurveSeries(_props: BellcurveSeriesProps): any;
export declare namespace BellcurveSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bellcurve;
