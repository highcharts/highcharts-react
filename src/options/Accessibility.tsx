/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */

import { getHighcharts } from "../Highcharts";

import accessibility from "highcharts/es-modules/masters/modules/accessibility.src";

if (typeof getHighcharts().__provided === "undefined") {
  typeof accessibility === "function" && accessibility(getHighcharts());
}

export type AccessibilityProps = {
  announceNewData?: {
    announcementFormatter?: Highcharts.AccessibilityAnnouncementFormatter;
    enabled?: boolean;
    interruptUser?: boolean;
    minAnnounceInterval?: number;
  };
  customComponents?: any;
  description?: string;
  enabled?: boolean;
  highContrastMode?: string;
  highContrastTheme?: any;
  keyboardNavigation?: {
    enabled?: boolean;
    focusBorder?: {
      enabled?: boolean;
      hideBrowserFocusOutline?: boolean;
      margin?: number;
      style?: { borderRadius?: number; color?: string; lineWidth?: number };
    };
    order?: Array<string>;
    seriesNavigation?: {
      mode?: "normal" | "serialize";
      pointNavigationEnabledThreshold?: boolean | number;
      rememberPointFocus?: boolean;
      skipNullPoints?: boolean;
    };
    wrapAround?: boolean;
  };
  landmarkVerbosity?: string;
  linkedDescription?: string | Highcharts.HTMLDOMElement;
  point?: {
    dateFormat?: string;
    dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
    describeNull?: boolean;
    descriptionFormat?: string;
    descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
    valueDecimals?: number;
    valueDescriptionFormat?: string;
    valuePrefix?: string;
    valueSuffix?: string;
  };
  screenReaderSection?: {
    afterChartFormat?: string;
    afterChartFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>;
    axisRangeDateFormat?: string;
    beforeChartFormat?: string;
    beforeChartFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Chart>;
    onPlayAsSoundClick?: Highcharts.ScreenReaderClickCallbackFunction;
    onViewDataTableClick?: Highcharts.ScreenReaderClickCallbackFunction;
  };
  series?: {
    describeSingleSeries?: boolean;
    descriptionFormat?: string;
    descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Series>;
    pointDescriptionEnabledThreshold?: boolean | number;
  };
  typeDescription?: string;
};

export function Accessibility(props: AccessibilityProps) {
  return null;
}

Accessibility._HCReact = {
  type: "HC_Option",
  HCOption: "accessibility",
  childOption: "",
  defaultOptions: undefined,
  isArrayType: false,
};

export default Accessibility;
