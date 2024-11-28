/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
export type PlotOptionsProps = {
    series?: {
        accessibility?: {
            description?: string;
            descriptionFormat?: string;
            enabled?: boolean;
            exposeAsGroupOnly?: boolean;
            keyboardNavigation?: {
                enabled?: boolean;
            };
        };
        allAreas?: boolean;
        allowPointSelect?: boolean;
        animation?: boolean | Highcharts.AnimationOptionsObject;
        animationLimit?: number;
        boostBlending?: "add" | "multiply" | "darken";
        boostThreshold?: number;
        borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        borderWidth?: number;
        className?: string;
        clip?: boolean;
        color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        colorAxis?: number | string | boolean;
        colorIndex?: number;
        colorKey?: string;
        compare?: "percent" | "value";
        compareBase?: number;
        compareStart?: boolean;
        connectEnds?: boolean;
        connectNulls?: boolean;
        crisp?: boolean;
        cropThreshold?: number;
        cumulative?: boolean;
        cumulativeStart?: boolean;
        cursor?: string | Highcharts.CursorValue;
        custom?: Highcharts.Dictionary<any>;
        dashStyle?: Highcharts.DashStyleValue;
        dataGrouping?: {
            anchor?: Highcharts.DataGroupingAnchor;
            approximation?: Highcharts.DataGroupingApproximationValue | Function;
            dateTimeLabelFormats?: Object;
            enabled?: boolean;
            firstAnchor?: Highcharts.DataGroupingAnchorExtremes;
            forced?: boolean;
            groupAll?: boolean;
            groupPixelWidth?: number;
            lastAnchor?: Highcharts.DataGroupingAnchorExtremes;
            units?: Array<Array<string, Array<number> | null>>;
        };
        dataLabels?: {
            align?: Highcharts.AlignValue | null;
            alignTo?: string;
            allowOverlap?: boolean;
            animation?: {
                defer?: number;
            };
            backgroundColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            borderRadius?: number;
            borderWidth?: number;
            className?: string;
            crop?: boolean;
            defer?: boolean;
            enabled?: boolean;
            filter?: {
                operator?: ">" | "<" | ">=" | "<=" | "==" | "===" | "!=" | "!==";
                property?: string;
                value?: number;
            };
            format?: string;
            formatter?: Highcharts.DataLabelsFormatterCallbackFunction;
            inside?: boolean;
            nullFormat?: boolean | string;
            nullFormatter?: Highcharts.DataLabelsFormatterCallbackFunction;
            overflow?: Highcharts.DataLabelsOverflowValue;
            padding?: number;
            position?: Highcharts.AlignValue;
            rotation?: number;
            shadow?: boolean | Highcharts.ShadowOptionsObject;
            shape?: string;
            style?: Highcharts.CSSObject;
            textPath?: {
                attributes?: Highcharts.SVGAttributes;
                enabled?: boolean;
            };
            useHTML?: boolean;
            verticalAlign?: Highcharts.VerticalAlignValue | null;
            x?: number;
            y?: number;
            zIndex?: number;
        };
        dataSorting?: {
            enabled?: boolean;
            matchByName?: boolean;
            sortKey?: string;
        };
        description?: string;
        dragDrop?: {
            dragHandle?: {
                className?: string;
                color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                lineColor?: Highcharts.ColorString;
                lineWidth?: number;
                zIndex?: number;
            };
            dragMaxX?: number | string;
            dragMaxY?: number;
            dragMinX?: number | string;
            dragMinY?: number;
            dragPrecisionX?: number;
            dragPrecisionY?: number;
            dragSensitivity?: number;
            draggableX?: boolean;
            draggableY?: boolean;
            groupBy?: string;
            guideBox?: {
                default?: {
                    className?: string;
                    color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                    cursor?: string;
                    lineColor?: Highcharts.ColorString;
                    lineWidth?: number;
                    zIndex?: number;
                };
            };
            liveRedraw?: boolean;
        };
        enableMouseTracking?: boolean;
        events?: {
            afterAnimate?: Highcharts.SeriesAfterAnimateCallbackFunction;
            checkboxClick?: Highcharts.SeriesCheckboxClickCallbackFunction;
            click?: Highcharts.SeriesClickCallbackFunction;
            hide?: Highcharts.SeriesHideCallbackFunction;
            mouseOut?: Highcharts.SeriesMouseOutCallbackFunction;
            mouseOver?: Highcharts.SeriesMouseOverCallbackFunction;
            show?: Highcharts.SeriesShowCallbackFunction;
        };
        findNearestPointBy?: string;
        gapSize?: number;
        gapUnit?: "relative" | "value";
        getExtremesFromAll?: boolean;
        inactiveOtherPoints?: boolean;
        includeInDataExport?: boolean;
        joinBy?: string | Array<string>;
        keys?: Array<string>;
        label?: {
            boxesToAvoid?: Array<Highcharts.LabelIntersectBoxObject>;
            connectorAllowed?: boolean;
            connectorNeighbourDistance?: number;
            enabled?: boolean;
            format?: string;
            formatter?: Highcharts.FormatterCallbackFunction<Series>;
            maxFontSize?: number | null;
            minFontSize?: number | null;
            onArea?: boolean | null;
            style?: {
                fontSize?: number | string;
                fontWeight?: string;
            };
            useHTML?: boolean;
        };
        lastPrice?: {
            color?: string;
            enabled?: boolean;
        };
        lastVisiblePrice?: {
            enabled?: boolean;
        };
        legendSymbol?: string;
        legendSymbolColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        lineWidth?: number;
        linecap?: Highcharts.SeriesLinecapValue;
        linkedTo?: string;
        marker?: {
            enabled?: boolean;
            enabledThreshold?: number;
            fillColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            height?: number;
            lineColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            lineWidth?: number;
            radius?: number;
            states?: {
                hover?: {
                    animation?: {
                        duration?: number;
                    };
                    enabled?: boolean;
                    fillColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                    lineColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                    lineWidth?: number;
                    lineWidthPlus?: number;
                    radius?: number;
                    radiusPlus?: number;
                };
                normal?: {
                    animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
                };
                select?: {
                    enabled?: boolean;
                    fillColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                    lineColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                    lineWidth?: number;
                    radius?: number;
                };
            };
            symbol?: string;
            width?: number;
        };
        navigatorOptions?: Highcharts.PlotSeriesOptions;
        negativeColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
        onPoint?: {
            connectorOptions?: {
                dashstyle?: string;
                stroke?: string;
                width?: number;
            };
            id?: string;
            position?: {
                offsetX?: number;
                offsetY?: number;
                x?: number;
                y?: number;
            };
        };
        opacity?: number;
        point?: {
            events?: {
                click?: Highcharts.PointClickCallbackFunction;
                drag?: Highcharts.PointDragCallbackFunction;
                dragStart?: Highcharts.PointDragStartCallbackFunction;
                drop?: Highcharts.PointDropCallbackFunction;
                mouseOut?: Highcharts.PointMouseOutCallbackFunction;
                mouseOver?: Highcharts.PointMouseOverCallbackFunction;
                remove?: Highcharts.PointRemoveCallbackFunction;
                select?: Highcharts.PointSelectCallbackFunction;
                unselect?: Highcharts.PointUnselectCallbackFunction;
                update?: Highcharts.PointUpdateCallbackFunction;
            };
        };
        pointDescriptionFormat?: Function;
        pointDescriptionFormatter?: Function;
        pointInterval?: number;
        pointIntervalUnit?: "day" | "month" | "year";
        pointPlacement?: string | number;
        pointRange?: number;
        pointStart?: number | string;
        relativeXValue?: boolean;
        selected?: boolean;
        shadow?: boolean | Highcharts.ShadowOptionsObject;
        showCheckbox?: boolean;
        showInLegend?: boolean;
        showInNavigator?: boolean;
        skipKeyboardNavigation?: boolean;
        softThreshold?: boolean;
        sonification?: {
            enabled?: boolean;
        };
        stacking?: "normal" | "overlap" | "percent" | "stream";
        states?: {
            hover?: {
                animation?: {
                    duration?: number;
                };
                borderColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                borderWidth?: number;
                color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
                enabled?: boolean;
                halo?: {
                    attributes?: Highcharts.SVGAttributes;
                    opacity?: number;
                    size?: number;
                };
                lineWidth?: number;
                lineWidthPlus?: number;
            };
            inactive?: {
                animation?: {
                    duration?: number;
                };
                enabled?: boolean;
                opacity?: number;
            };
            normal?: {
                animation?: boolean | Partial<Highcharts.AnimationOptionsObject>;
            };
        };
        step?: "left" | "center" | "right";
        stickyTracking?: boolean;
        threshold?: number | null;
        turboThreshold?: number;
        visible?: boolean;
        zIndex?: number;
        zoneAxis?: string;
        zones?: {
            className?: string;
            color?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            dashStyle?: Highcharts.DashStyleValue;
            fillColor?: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject;
            value?: number;
        };
    };
};
export declare function PlotOptions(props: PlotOptionsProps): any;
export declare namespace PlotOptions {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default PlotOptions;
