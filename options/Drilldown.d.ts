/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import type { AnimationOptionsObject, CSSObject, SeriesOptionsType } from "highcharts";

export type DrilldownProps = {
    activeAxisLabelStyle?: CSSObject;
    activeDataLabelStyle?: {
        color?: string;
        cursor?: string;
        fontWeight?: string;
        textDecoration?: string;
    };
    allowPointDrilldown?: boolean;
    animation?: boolean | AnimationOptionsObject;
    mapZooming?: boolean;
    series?: Array<SeriesOptionsType>;
    children?: Array<SeriesOptionsType>;
};
export declare function Drilldown(props: DrilldownProps): any;
export declare namespace Drilldown {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Drilldown;
