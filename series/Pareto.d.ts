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
import type { SeriesParetoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Pareto series
 */
declare const Pareto: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ParetoSeries;
    type: string;
};
type SeriesParetoConfig = Omit<SeriesParetoOptions, "type">;
export interface ParetoSeriesProps {
    id?: SeriesParetoConfig["id"];
    index?: SeriesParetoConfig["index"];
    name?: SeriesParetoConfig["name"];
    className?: SeriesParetoConfig["className"];
    color?: SeriesParetoConfig["color"];
    events?: SeriesParetoConfig["events"];
    data?: SeriesParetoConfig["data"];
    options?: SeriesParetoConfig;
}
export declare function ParetoSeries(_props: ParetoSeriesProps): any;
export declare namespace ParetoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pareto;
