/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
export type CreditsProps = {
    enabled?: boolean;
    events?: object;
    href?: string;
    mapText?: string;
    mapTextFull?: string;
    position?: Highcharts.AlignObject;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
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
