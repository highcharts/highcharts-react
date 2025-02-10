/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */

export type TitleProps = {
  align?: Highcharts.AlignValue;
  floating?: boolean;
  margin?: number;
  minScale?: number;
  style?: Highcharts.CSSObject;
  text?: string;
  useHTML?: boolean;
  verticalAlign?: Highcharts.VerticalAlignValue;
  x?: number;
  y?: number;
  children?:
    | string
    | (string | number)[]
    | React.ReactElement
    | React.ReactElement[];
};

export function Title(props: TitleProps) {
  return null;
}

Title._HCReact = {
  type: "HC_Option",
  HCOption: "title",
  childOption: "text",
  defaultOptions: undefined,
  isArrayType: false,
};

export default Title;
