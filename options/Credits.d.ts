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
export type CreditsProps = {
    enabled?: boolean;
    href?: string;
    mapText?: string;
    mapTextFull?: string;
    position?: Highcharts.AlignObject;
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
