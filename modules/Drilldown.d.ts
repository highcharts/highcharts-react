/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */

/** Props for the `<Drilldown />` component. */
export type DrilldownProps = {
    activeAxisLabelStyle?: Highcharts.CSSObject;
    activeDataLabelStyle?: Highcharts.CSSObject;
    allowPointDrilldown?: boolean;
    animation?: boolean | Highcharts.AnimationOptionsObject;
    mapZooming?: boolean;
    series?: Array<Highcharts.SeriesOptionsType>;
    children?: React.ReactNode;
};
/**
 * Options for drill down, the concept of inspecting increasingly high
 * resolution data through clicking on chart items like columns or pie slices.
 *
 * Sets `drilldown` on the parent chart. The children set `series`. Importing
 * the component also loads the Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Drilldown series={[{ id: "q1", data: [1, 2, 3] }]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/drilldown
 */
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
