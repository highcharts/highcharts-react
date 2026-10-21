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
import type { AccessibilityAnnouncementFormatter, CSSObject, Chart, HTMLDOMElement, Point, ScreenReaderClickCallbackFunction, ScreenReaderFormatterCallbackFunction, Series } from "highcharts";

/** Props for the `<Accessibility />` component. */
export type AccessibilityProps = {
    announceNewData?: {
        announcementFormatter?: AccessibilityAnnouncementFormatter;
        enabled?: boolean;
        interruptUser?: boolean;
        minAnnounceInterval?: number;
    };
    description?: string;
    enabled?: boolean;
    highContrastMode?: string;
    keyboardNavigation?: {
        enabled?: boolean;
        focusBorder?: {
            enabled?: boolean;
            hideBrowserFocusOutline?: boolean;
            margin?: number;
            style?: CSSObject;
        };
        order?: Array<string>;
        seriesNavigation?: {
            mode?: "normal" | "serialize";
            pointNavigationEnabledThreshold?: boolean | number;
            rememberPointFocus?: boolean;
            skipNullPoints?: string;
        };
        wrapAround?: boolean;
    };
    landmarkVerbosity?: string;
    linkedDescription?: string | HTMLDOMElement;
    point?: {
        dateFormat?: string;
        dateFormatter?: ScreenReaderFormatterCallbackFunction<Point>;
        describeNull?: boolean;
        descriptionFormat?: string;
        descriptionFormatter?: ScreenReaderFormatterCallbackFunction<Point>;
        valueDecimals?: number;
        valueDescriptionFormat?: string;
        valuePrefix?: string;
        valueSuffix?: string;
    };
    screenReaderSection?: {
        afterChartFormat?: string;
        afterChartFormatter?: ScreenReaderFormatterCallbackFunction<Chart>;
        axisRangeDateFormat?: string;
        beforeChartFormat?: string;
        beforeChartFormatter?: ScreenReaderFormatterCallbackFunction<Chart>;
        onPlayAsSoundClick?: ScreenReaderClickCallbackFunction;
        onViewDataTableClick?: ScreenReaderClickCallbackFunction;
    };
    series?: {
        describeSingleSeries?: boolean;
        descriptionFormat?: string;
        descriptionFormatter?: ScreenReaderFormatterCallbackFunction<Series>;
        pointDescriptionEnabledThreshold?: boolean | number;
    };
    typeDescription?: string;
};
/**
 * Options for configuring accessibility for the chart. Requires the
 * [accessibility module](https://code.highcharts.com/modules/accessibility.js)
 * to be loaded. For a description of the module and information on its
 * features, see [Highcharts
 * Accessibility](https://www.highcharts.com/docs/accessibility/accessibility-module).
 *
 * Sets `accessibility` on the parent chart. Importing the component also loads
 * the Highcharts module it needs.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { Accessibility } from '@highcharts/react/modules/Accessibility';
 *
 * <Chart>
 *   <Accessibility description="Sales per month" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/accessibility
 */
export declare function Accessibility(props: AccessibilityProps): any;
export declare namespace Accessibility {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Accessibility;
