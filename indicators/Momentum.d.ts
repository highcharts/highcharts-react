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
import type { SeriesMomentumOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Momentum series
 */
declare const Momentum: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MomentumSeries;
    type: string;
};
type SeriesMomentumConfig = Omit<SeriesMomentumOptions, "type">;
export interface MomentumSeriesProps {
    id?: SeriesMomentumConfig["id"];
    index?: SeriesMomentumConfig["index"];
    name?: SeriesMomentumConfig["name"];
    className?: SeriesMomentumConfig["className"];
    color?: SeriesMomentumConfig["color"];
    events?: SeriesMomentumConfig["events"];
    options?: SeriesMomentumConfig;
}
export declare function MomentumSeries(_props: MomentumSeriesProps): any;
export declare namespace MomentumSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Momentum;
