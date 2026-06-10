/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */









export type StockToolsProps = {
    gui?: {
        buttons?: Array<string>;
        className?: string;
        definitions?: {
            advanced?: {
                fibonacci?: {
                    symbol?: string;
                };
                fibonacciTimeZones?: {
                    symbol?: string;
                };
                items?: Array<string>;
                parallelChannel?: {
                    symbol?: string;
                };
                pitchfork?: {
                    symbol?: string;
                };
                timeCycles?: {
                    symbol?: string;
                };
            };
            crookedLines?: {
                crooked3?: {
                    symbol?: string;
                };
                crooked5?: {
                    symbol?: string;
                };
                elliott3?: {
                    symbol?: string;
                };
                elliott5?: {
                    symbol?: string;
                };
                items?: Array<string>;
            };
            currentPriceIndicator?: {
                symbol?: string;
            };
            flags?: {
                flagCirclepin?: {
                    symbol?: string;
                };
                flagDiamondpin?: {
                    symbol?: string;
                };
                flagSimplepin?: {
                    symbol?: string;
                };
                flagSquarepin?: {
                    symbol?: string;
                };
                items?: Array<string>;
            };
            fullScreen?: {
                symbol?: string;
            };
            indicators?: {
                symbol?: string;
            };
            lines?: {
                arrowInfinityLine?: {
                    symbol?: string;
                };
                arrowRay?: {
                    symbol?: string;
                };
                arrowSegment?: {
                    symbol?: string;
                };
                horizontalLine?: {
                    symbol?: string;
                };
                items?: Array<string>;
                line?: {
                    symbol?: string;
                };
                ray?: {
                    symbol?: string;
                };
                segment?: {
                    symbol?: string;
                };
                verticalLine?: {
                    symbol?: string;
                };
            };
            measure?: {
                items?: Array<string>;
                measureX?: {
                    symbol?: string;
                };
                measureXY?: {
                    symbol?: string;
                };
                measureY?: {
                    symbol?: string;
                };
            };
            saveChart?: {
                symbol?: string;
            };
            separator?: {
                elementType?: string;
                symbol?: string;
            };
            simpleShapes?: {
                circle?: {
                    symbol?: string;
                };
                ellipse?: {
                    symbol?: string;
                };
                items?: Array<string>;
                label?: {
                    symbol?: string;
                };
                rectangle?: {
                    symbol?: string;
                };
            };
            toggleAnnotations?: {
                symbol?: string;
            };
            typeChange?: {
                items?: Array<string>;
                typeCandlestick?: {
                    symbol?: string;
                };
                typeHLC?: {
                    symbol?: string;
                };
                typeHeikinAshi?: {
                    symbol?: string;
                };
                typeHollowCandlestick?: {
                    symbol?: string;
                };
                typeLine?: {
                    symbol?: string;
                };
                typeOHLC?: {
                    symbol?: string;
                };
            };
            verticalLabels?: {
                items?: Array<string>;
                verticalArrow?: {
                    symbol?: string;
                };
                verticalCounter?: {
                    symbol?: string;
                };
                verticalLabel?: {
                    symbol?: string;
                };
            };
            zoomChange?: {
                items?: Array<string>;
                zoomX?: {
                    symbol?: string;
                };
                zoomXY?: {
                    symbol?: string;
                };
                zoomY?: {
                    symbol?: string;
                };
            };
        };
        enabled?: boolean;
        toolbarClassName?: string;
        visible?: boolean;
    };
};
export declare function StockTools(props: StockToolsProps): any;
export declare namespace StockTools {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default StockTools;
