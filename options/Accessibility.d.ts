/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-07-17
 *
 */
export type AccessibilityProps = {
    announceNewData?: {
        announcementFormatter?: Highcharts.AccessibilityAnnouncementFormatter;
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
            style?: {
                borderRadius?: number;
                color?: string;
                lineWidth?: number;
            };
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
