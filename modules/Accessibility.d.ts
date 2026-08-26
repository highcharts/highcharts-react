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

/** Props for the `<Accessibility />` component. */
export type AccessibilityProps = {
    announceNewData?: {
        announcementFormatter?: Highcharts.AccessibilityAnnouncementFormatter;
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
            style?: Highcharts.CSSObject;
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
    linkedDescription?: string | Highcharts.HTMLDOMElement;
    point?: {
        dateFormat?: string;
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        describeNull?: boolean;
        descriptionFormat?: string;
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        valueDecimals?: number;
        valueDescriptionFormat?: string;
        valuePrefix?: string;
        valueSuffix?: string;
    };
    screenReaderSection?: {
        afterChartFormat?: string;
        afterChartFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>;
        axisRangeDateFormat?: string;
        beforeChartFormat?: string;
        beforeChartFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>;
        onPlayAsSoundClick?: Highcharts.ScreenReaderClickCallbackFunction;
        onViewDataTableClick?: Highcharts.ScreenReaderClickCallbackFunction;
    };
    series?: {
        describeSingleSeries?: boolean;
        descriptionFormat?: string;
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Series>;
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
