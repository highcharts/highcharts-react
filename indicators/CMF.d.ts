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
import type { SeriesCmfOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * CMF series
 */
declare const CMF: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CMFSeries;
    type: string;
};
type SeriesCmfConfig = Omit<SeriesCmfOptions, "type">;
export interface CMFSeriesProps {
    id?: SeriesCmfConfig["id"];
    index?: SeriesCmfConfig["index"];
    name?: SeriesCmfConfig["name"];
    className?: SeriesCmfConfig["className"];
    color?: SeriesCmfConfig["color"];
    events?: SeriesCmfConfig["events"];
    options?: SeriesCmfConfig;
}
export declare function CMFSeries(_props: CMFSeriesProps): any;
export declare namespace CMFSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CMF;
