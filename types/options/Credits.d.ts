/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
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
    children?: string | (string | number)[] | Element;
};
export declare function Credits(props: CreditsProps): any;
export declare namespace Credits {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Credits;
//# sourceMappingURL=Credits.d.ts.map