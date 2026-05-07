/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesCciOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * CCI series
 */
declare const CCI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CCISeries;
    type: string;
};
type SeriesCciConfig = Omit<SeriesCciOptions, "type">;
export interface CCISeriesProps {
    id?: SeriesCciConfig["id"];
    index?: SeriesCciConfig["index"];
    name?: SeriesCciConfig["name"];
    className?: SeriesCciConfig["className"];
    color?: SeriesCciConfig["color"];
    events?: SeriesCciConfig["events"];
    options?: SeriesCciConfig;
}
export declare function CCISeries(_props: CCISeriesProps): any;
export declare namespace CCISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CCI;
