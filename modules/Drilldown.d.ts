/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import type { AnimationOptionsObject, BreadcrumbsAlignOptions, BreadcrumbsClickCallbackFunction, BreadcrumbsFormatterCallbackFunction, ButtonRelativeToValue, CSSObject, SVGAttributes, SeriesOptionsType } from "highcharts";

/** Props for the `<Drilldown />` component. */
export type DrilldownProps = {
    activeAxisLabelStyle?: CSSObject;
    activeDataLabelStyle?: CSSObject;
    allowPointDrilldown?: boolean;
    animation?: boolean | AnimationOptionsObject;
    breadcrumbs?: {
        buttonSpacing?: number;
        buttonTheme?: SVGAttributes;
        events?: {
            click?: BreadcrumbsClickCallbackFunction;
        };
        floating?: boolean;
        format?: string | undefined;
        formatter?: BreadcrumbsFormatterCallbackFunction;
        position?: BreadcrumbsAlignOptions;
        relativeTo?: ButtonRelativeToValue;
        rtl?: boolean;
        separator?: {
            style?: CSSObject;
            text?: string;
        };
        showFullPath?: boolean;
        style?: CSSObject;
        useHTML?: boolean;
        zIndex?: number;
    };
    mapZooming?: boolean;
    series?: Array<SeriesOptionsType>;
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
 * import { Chart } from '@highcharts/react';
 * import { Drilldown } from '@highcharts/react/modules/Drilldown';
 *
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
