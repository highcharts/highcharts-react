/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
export type CreditsProps = {
    enabled?: boolean;
    href?: string;
    mapText?: string;
    mapTextFull?: string;
    position?: {
        align?: string;
        verticalAlign?: string;
        x?: number;
        y?: number;
    };
    style?: Highcharts.CSSObject;
    text?: string;
    children?: string | (string | number)[] | React.ReactElement | React.ReactElement[];
};
export declare function Credits(props: CreditsProps): any;
export declare namespace Credits {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Credits;
