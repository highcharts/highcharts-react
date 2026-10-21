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
import type { AccessibilityAnnouncementFormatter, CSSObject, Chart, HTMLDOMElement, Point, ScreenReaderClickCallbackFunction, ScreenReaderFormatterCallbackFunction, Series } from "highcharts";

export type AccessibilityProps = {
    announceNewData?: {
        announcementFormatter?: AccessibilityAnnouncementFormatter;
        enabled?: boolean;
        interruptUser?: boolean;
        minAnnounceInterval?: number;
    };
    customComponents?: any;
    description?: string;
    enabled?: boolean;
    highContrastMode?: string;
    highContrastTheme?: any;
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
