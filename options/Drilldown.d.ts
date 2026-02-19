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
export type DrilldownProps = {
    activeAxisLabelStyle?: Highcharts.CSSObject;
    activeDataLabelStyle?: {
        color?: string;
        cursor?: string;
        fontWeight?: string;
        textDecoration?: string;
    };
    allowPointDrilldown?: boolean;
    animation?: boolean | Highcharts.AnimationOptionsObject;
    mapZooming?: boolean;
    series?: Array<Highcharts.SeriesOptionsType>;
    children?: Array<Highcharts.SeriesOptionsType>;
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
