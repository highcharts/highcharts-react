/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */

import { getHighcharts } from "../Highcharts";

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
  defaultOptions: undefined,
  isArrayType: false,
};

export default Credits;
