/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */

export type CreditsProps = {
  enabled?: boolean;
  href?: string;
  mapText?: string;
  mapTextFull?: string;
  position?: { align?: string; verticalAlign?: string; x?: number; y?: number };
  style?: Highcharts.CSSObject;
  text?: string;
  children?:
    | string
    | (string | number)[]
    | React.ReactElement
    | React.ReactElement[];
};

export function Credits(props: CreditsProps) {
  return null;
}

Credits._HCReact = {
  type: "HC_Option",
  HCOption: "credits",
  childOption: "text",
};

export default Credits;
