/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
export type YAxisProps = {
    endOnTick?: boolean;
    gridLineWidth?: number;
    height?: number | string;
    labels?: {
        align?: Highcharts.AlignValue;
        allowOverlap?: boolean;
        autoRotation?: Array<number>;
        autoRotationLimit?: number;
        distance?: number;
        enabled?: boolean;
        format?: string;
        formatter?: Highcharts.AxisLabelsFormatterCallbackFunction;
        indentation?: number;
        overflow?: string;
        padding?: number;
        position3d?: string;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean;
        staggerLines?: number;
        step?: number;
        style?: {
            color?: string;
            cursor?: string;
            fontSize?: number | string;
            textOverflow?: string;
        };
        useHTML?: boolean;
        x?: number;
        y?: number;
        zIndex?: number;
    };
    lineWidth?: number;
    max?: number | string | null;
    maxColor?: Highcharts.ColorType;
    maxLength?: number | string;
    maxPadding?: number;
    min?: number | string | null;
    minColor?: Highcharts.ColorType;
    minLength?: number | string;
    minPadding?: number;
    opposite?: Boolean;
    plotBands?: {
        acrossPanes?: boolean;
        borderColor?: Highcharts.ColorString;
        borderRadius?: number | string;
        borderWidth?: number;
        className?: string;
        color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        events?: {
            click?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mousemove?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseout?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseover?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
        };
        from?: number | string;
        id?: string;
        label?: {
            align?: Highcharts.AlignValue;
            allowOverlap?: boolean;
            inside?: boolean;
            rotation?: number;
            style?: Highcharts.CSSObject;
            text?: string;
            textAlign?: Highcharts.AlignValue;
            useHTML?: boolean;
            verticalAlign?: Highcharts.VerticalAlignValue;
            x?: number;
            y?: number;
        };
        to?: number | string;
        zIndex?: number;
    };
    plotLines?: {
        acrossPanes?: boolean;
        className?: string;
        color?: Highcharts.ColorString;
        dashStyle?: Highcharts.DashStyleValue;
        events?: {
            click?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mousemove?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseout?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
            mouseover?: Highcharts.EventCallbackFunction<Highcharts.PlotLineOrBand>;
        };
        id?: string;
        label?: {
            align?: Highcharts.AlignValue;
            formatter?: Highcharts.FormatterCallbackFunction<Highcharts.PlotLineOrBand>;
            rotation?: number;
            style?: Highcharts.CSSObject;
            text?: string;
            textAlign?: Highcharts.AlignValue;
            useHTML?: boolean;
            verticalAlign?: Highcharts.VerticalAlignValue;
            x?: number;
            y?: number;
        };
        labels?: {
            clip?: boolean;
        };
        value?: number | string;
        width?: number;
        zIndex?: number;
    };
    resize?: {
        controlledAxis?: {
            next?: Array<number | string>;
            prev?: Array<number | string>;
        };
        cursor?: string;
        enabled?: boolean;
        lineColor?: Highcharts.ColorString;
        lineDashStyle?: string;
        lineWidth?: number;
        x?: number;
        y?: number;
    };
    reversed?: boolean;
    reversedStacks?: boolean;
    showLastLabel?: boolean;
    softMax?: number;
    softMin?: number;
    stackLabels?: {
        align?: Highcharts.AlignValue;
        allowOverlap?: boolean;
        animation?: {
            defer?: number;
        };
        backgroundColor?: Highcharts.ColorType;
        borderColor?: Highcharts.ColorType;
        borderRadius?: number;
        borderWidth?: number;
        crop?: boolean;
        enabled?: boolean;
        format?: string;
        formatter?: Highcharts.FormatterCallbackFunction<Highcharts.StackItemObject>;
        overflow?: Highcharts.DataLabelsOverflowValue;
        rotation?: number;
        style?: {
            color?: string;
            fontSize?: number | string;
            fontWeight?: string;
            textOutline?: number;
        };
        textAlign?: Highcharts.AlignValue;
        useHTML?: boolean;
        verticalAlign?: Highcharts.VerticalAlignValue;
        x?: number;
        y?: number;
    };
    stackShadow?: {
        borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        borderWidth?: number;
        color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        enabled?: boolean;
    };
    startOnTick?: boolean;
    staticScale?: number;
    stops?: Array<Array<number, Highcharts.ColorType>>;
    tickPixelInterval?: number;
    tickWidth?: undefined | number;
    title?: {
        align?: Highcharts.AxisTitleAlignValue;
        margin?: number;
        offset?: number;
        position3d?: "offset" | "chart" | "flap" | "ortho" | null;
        reserveSpace?: boolean;
        rotation?: number;
        skew3d?: boolean | null;
        style?: {
            color?: string;
            fontSize?: number | string;
        };
        text?: string | null | (string | number)[] | React.ReactElement | React.ReactElement[];
        textAlign?: Highcharts.AlignValue;
        useHTML?: boolean;
        x?: number;
        y?: number;
    };
    tooltipValueFormat?: string;
    top?: number | string;
    type?: Highcharts.AxisTypeValue;
    accessibility?: {
        description?: string;
        enabled?: boolean;
        rangeDescription?: string;
    };
    alignTicks?: boolean;
    allowDecimals?: boolean | undefined;
    alternateGridColor?: Highcharts.ColorType;
    angle?: number;
    breaks?: {
        breakSize?: number;
        from?: number | string;
        repeat?: number;
        to?: number | string;
    };
    categories?: Array<string>;
    ceiling?: number;
    className?: string;
    crosshair?: {
        className?: string;
        color?: Highcharts.ColorType;
        dashStyle?: Highcharts.DashStyleValue;
        label?: {
            align?: Highcharts.AlignValue;
            backgroundColor?: Highcharts.ColorType;
            borderColor?: Highcharts.ColorType;
            borderRadius?: number;
            borderWidth?: number;
            enabled?: boolean;
            format?: string;
            formatter?: Highcharts.XAxisCrosshairLabelFormatterCallbackFunction;
            padding?: number;
            shape?: string;
            style?: Highcharts.CSSObject;
        };
        snap?: boolean;
        width?: number;
        zIndex?: number;
    };
    crossing?: number;
    dateTimeLabelFormats?: {
        day?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
        };
        hour?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
            range?: boolean;
        };
        millisecond?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
            range?: boolean;
        };
        minute?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
            range?: boolean;
        };
        month?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
        };
        second?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
            range?: boolean;
        };
        week?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
        };
        year?: {
            list?: Array<string | Highcharts.DateTimeFormatOptions>;
            main?: string | Highcharts.DateTimeFormatOptions;
        };
    };
    events?: {
        afterBreaks?: Highcharts.AxisEventCallbackFunction;
        afterSetExtremes?: Highcharts.AxisSetExtremesEventCallbackFunction;
        pointBreak?: Highcharts.AxisPointBreakEventCallbackFunction;
        pointBreakOut?: Highcharts.AxisPointBreakEventCallbackFunction;
        pointInBreak?: Highcharts.AxisPointBreakEventCallbackFunction;
        setExtremes?: Highcharts.AxisSetExtremesEventCallbackFunction;
    };
    floor?: number;
    grid?: {
        borderColor?: Highcharts.ColorString;
        borderWidth?: number;
        cellHeight?: number;
        columns?: Array<Highcharts.XAxisOptions>;
        enabled?: boolean;
    };
    gridLineColor?: Highcharts.ColorType;
    gridLineDashStyle?: Highcharts.DashStyleValue;
    gridLineInterpolation?: "circle" | "polygon";
    gridZIndex?: number;
    id?: string;
    left?: number | string;
    lineColor?: Highcharts.ColorType;
    linkedTo?: number;
    margin?: number;
    maxRange?: number;
    minRange?: number;
    minTickInterval?: number;
    minorGridLineColor?: Highcharts.ColorType;
    minorGridLineDashStyle?: Highcharts.DashStyleValue;
    minorGridLineWidth?: number;
    minorTickColor?: Highcharts.ColorType;
    minorTickInterval?: number | "auto";
    minorTickLength?: number;
    minorTickPosition?: string;
    minorTickWidth?: number;
    minorTicks?: boolean;
    minorTicksPerMajor?: number;
    offset?: number;
    ordinal?: boolean;
    overscroll?: number | string;
    pane?: number;
    panningEnabled?: boolean;
    range?: number;
    showEmpty?: boolean;
    showFirstLabel?: boolean;
    startOfWeek?: number;
    tickAmount?: number;
    tickColor?: Highcharts.ColorType;
    tickInterval?: number;
    tickLength?: number;
    tickPosition?: string;
    tickPositioner?: Highcharts.AxisTickPositionerCallbackFunction;
    tickPositions?: Array<number>;
    tickmarkPlacement?: string;
    uniqueNames?: boolean;
    units?: Array<Array<string, Array<number> | null>>;
    visible?: boolean;
    width?: number | string;
    zIndex?: number;
    zoomEnabled?: boolean;
    children?: string | null | (string | number)[] | React.ReactElement | React.ReactElement[] | (string | number)[] | React.ReactElement | React.ReactElement[];
};
export declare function YAxis(props: YAxisProps): any;
export declare namespace YAxis {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default YAxis;
