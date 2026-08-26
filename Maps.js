/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useEffect, useRef, useImperativeHandle, useMemo,
// @ts-ignore
 } from "react";
import HC from "highcharts/es-modules/masters/highmaps.src.js";
// Add data-hc-option to allowed attributes
if (HC.AST.allowedAttributes.indexOf("data-hc-option") === -1) {
    HC.AST.allowedAttributes.push("data-hc-option");
}
export let Highcharts = HC;
export const Logger = {
    logLevel: "silent",
    log(...content) {
        if (this.logLevel === "debug") {
            console.log(...content);
        }
    },
};
/**
 * Sets the global Highcharts reference.
 *
 * If no argument is provided, resets Highcharts to the default instance.
 */
export function setHighcharts(newHC) {
    if (newHC === undefined) {
        Highcharts = HC;
        delete Highcharts.__provided;
        return;
    }
    Highcharts = newHC;
    Highcharts.__provided = true;
}
/**
 * Returns the current global Highcharts reference.
 *
 */
export function getHighcharts() {
    return Highcharts;
}
/** Registry of the loaded series types, missing from the public typings. */
const seriesTypes = HC.seriesTypes;
/** Every series type a config declares, drilldown series included. */
const collectSeriesTypes = (config) => { var _a, _b; var _c, _d; return [
    (_a = config.chart) === null || _a === void 0 ? void 0 : _a.type,
    ...((_c = config.series) !== null && _c !== void 0 ? _c : []).map((s) => s === null || s === void 0 ? void 0 : s.type),
    ...((_d = (_b = config.drilldown) === null || _b === void 0 ? void 0 : _b.series) !== null && _d !== void 0 ? _d : []).map((s) => s === null || s === void 0 ? void 0 : s.type),
].filter(Boolean); };
/** Loads the modules a config requires (undefined when nothing is missing). */
function loadMissingModules(config) {
    const missing = collectSeriesTypes(config).filter((type) => seriesModuleLoaders[type] && !seriesTypes[type]);
    if (!missing.length) {
        return undefined;
    }
    Logger.log("Loading series modules for", missing.join(", "));
    return Promise.all(missing.map((type) => seriesModuleLoaders[type]()));
}
const toArr = (thing) => (Array.isArray(thing) ? thing.flat() : [thing]);
const resolveChild = (c) => {
    var _a, _b, _c, _d;
    var _e;
    // Handle supported components.
    if (((_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a.type) === "Series" || ((_b = c === null || c === void 0 ? void 0 : c.type) === null || _b === void 0 ? void 0 : _b._HCReact)) {
        return c;
    }
    // Filter out if not a function.
    if (typeof (c === null || c === void 0 ? void 0 : c.type) !== "function") {
        return null;
    }
    // Process custom functions if they are custom components (for example,
    // wrapped supported components).
    const rendered = c.type((_e = c.props) !== null && _e !== void 0 ? _e : {});
    if (((_c = rendered === null || rendered === void 0 ? void 0 : rendered.type) === null || _c === void 0 ? void 0 : _c.type) === "Series" || ((_d = rendered === null || rendered === void 0 ? void 0 : rendered.type) === null || _d === void 0 ? void 0 : _d._HCReact)) {
        return rendered;
    }
    return null;
};
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isPlainObject(value) {
    if (!isObject(value))
        return false;
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function deepMerge(target, ...sources) {
    for (const source of sources) {
        if (!isObject(source))
            continue;
        for (const [key, value] of Object.entries(source)) {
            // Prototype pollution, mirrors the guard in Highcharts.merge
            if (key === "__proto__" || key === "constructor")
                continue;
            // Arrays fall through to the assignment below and are carried over by
            // reference, as Highcharts.merge does - copying them would hand the
            // chart a new identity on every render.
            if (isPlainObject(value)) {
                const current = target[key];
                target[key] = deepMerge(isPlainObject(current) ? current : {}, value);
                continue;
            }
            target[key] = value;
        }
    }
    return target;
}
function isReactElementWithMeta(value) {
    return (typeof value === "object" &&
        value !== null &&
        "$$typeof" in value &&
        "props" in value);
}
function isSeriesElement(value) {
    var _a;
    if (!isReactElementWithMeta(value)) {
        return false;
    }
    const type = value.type;
    return (type === null || type === void 0 ? void 0 : type.type) === "Series" || ((_a = type === null || type === void 0 ? void 0 : type._HCReact) === null || _a === void 0 ? void 0 : _a.type) === "Series";
}
function seriesFromElement(child, renderHTML = undefined) {
    var _a, _b, _c;
    var _d;
    const _e = (_d = child.props) !== null && _d !== void 0 ? _d : {}, { children, options, type, data } = _e, otherProps = __rest(_e, ["children", "options", "type", "data"]);
    return deepMerge(Object.assign({ type: type !== null && type !== void 0 ? type : (_c = (_b = (_a = child.type) === null || _a === void 0 ? void 0 : _a._HCReact) === null || _b === void 0 ? void 0 : _b.HCOption) === null || _c === void 0 ? void 0 : _c.replace("series.", "") }, (data ? { data } : {})), options, otherProps, children && getChildProps(children, renderHTML));
}
function getChildProps(children, renderHTML = undefined) {
    const optionsFromChildren = {};
    /** Insert value into object by dot.notation path */
    function objInsert(obj, path, value = null) {
        const keys = path.split(".");
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            const k = keys[i];
            if (!current[k])
                current[k] = {};
            current = current[k];
        }
        current[keys[keys.length - 1]] = value;
        return obj;
    }
    function renderChildren(arr) {
        return renderHTML
            ? renderHTML(arr)
            : arr.filter((c) => typeof c === "string").join("");
    }
    /** Checks if a value is a React fragment. */
    function isFragment(value) {
        return value.type === Symbol.for("react.fragment");
    }
    /** Checks if an element wraps Highcharts option children. */
    function isRoutableWrapper(value) {
        var _a;
        const props = (_a = value.props) !== null && _a !== void 0 ? _a : {};
        if (Object.keys(props).length !== 1) {
            return false;
        }
        const childArray = Array.isArray(props.children)
            ? props.children
            : [props.children];
        return childArray.some((child) => { var _a, _b; return ((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a["data-hc-option"]) || ((_b = child === null || child === void 0 ? void 0 : child.type) === null || _b === void 0 ? void 0 : _b._HCReact); });
    }
    /** Handles the Series component passed as a child. */
    function handleSeriesChild(child, series) {
        if (!isReactElementWithMeta(child)) {
            return;
        }
        series.push(seriesFromElement(child, renderHTML));
    }
    function handleChildren(children, obj, meta) {
        var _a, _b;
        if (meta.childOption === "series") {
            const series = [];
            const childArray = Array.isArray(children) ? children : [children];
            for (const child of childArray) {
                handleSeriesChild(child, series);
            }
            if (series.length > 0) {
                objInsert(obj, "series", series);
            }
            return;
        }
        const childArray = Array.isArray(children) ? children : [children];
        if (childArray.some((c) => { var _a; return (_a = c === null || c === void 0 ? void 0 : c.props) === null || _a === void 0 ? void 0 : _a["data-hc-option"]; })) {
            const lostChildren = [];
            for (const child of childArray) {
                const optKey = (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a["data-hc-option"];
                if (optKey) {
                    objInsert(obj, optKey, renderChildren([child]));
                }
                else {
                    lostChildren.push(child);
                }
            }
            if (lostChildren.length && meta.childOption) {
                objInsert(obj, meta.childOption, renderChildren(lostChildren));
            }
            return;
        }
        const nonOptionChildren = [];
        let hasOptionChildren = false;
        for (const c of childArray) {
            // Nested option components resolve into the parent's own object
            if ((_b = c === null || c === void 0 ? void 0 : c.type) === null || _b === void 0 ? void 0 : _b._HCReact) {
                handleChild(c, obj);
                hasOptionChildren = true;
                continue;
            }
            nonOptionChildren.push(c);
        }
        // Skipped when every child was an option component to avoid overwriting it
        if (meta.childOption &&
            (nonOptionChildren.length > 0 || !hasOptionChildren)) {
            objInsert(obj, meta.childOption, renderChildren(nonOptionChildren));
        }
    }
    function handleChild(child, target = optionsFromChildren) {
        var _a, _b;
        var _c, _d, _e;
        var _f;
        if (!child || typeof child !== "object")
            return;
        // Series children resolve into the `series` array rather than into an
        // option keyed by their `HCOption`. Handled here so that a series child is
        // consumed exactly once - the dedicated components carry an `HCOption` of
        // `series.<type>`, which would otherwise also be picked up below and end up
        // as a stray `"series.line"` key in the resulting options.
        if (isSeriesElement(child)) {
            const series = ((_c = optionsFromChildren.series) !== null && _c !== void 0 ? _c : (optionsFromChildren.series = []));
            series.push(seriesFromElement(child, renderHTML));
            return;
        }
        const meta = (_a = child.type) === null || _a === void 0 ? void 0 : _a._HCReact;
        if (!(meta === null || meta === void 0 ? void 0 : meta.HCOption))
            return;
        const optionParent = ((_d = target[_f = meta.HCOption]) !== null && _d !== void 0 ? _d : (target[_f] = meta.isArrayType ? [] : {}));
        const parentIsArray = Array.isArray(optionParent);
        const insertInto = parentIsArray ? {} : optionParent;
        const _g = (_e = child.props) !== null && _e !== void 0 ? _e : {}, { children: childChildren } = _g, props = __rest(_g, ["children"]);
        if (meta.defaultOptions)
            Object.assign(insertInto, meta.defaultOptions);
        Object.assign(insertInto, props);
        if ((typeof childChildren === "string" ||
            typeof childChildren === "number") &&
            meta.childOption) {
            objInsert(insertInto, meta.childOption, String(childChildren));
        }
        else if (Array.isArray(childChildren)) {
            handleChildren(childChildren, insertInto, meta);
        }
        else if (isReactElementWithMeta(childChildren) && renderHTML) {
            if (isFragment(childChildren) || isRoutableWrapper(childChildren)) {
                handleChildren((_b = childChildren.props) === null || _b === void 0 ? void 0 : _b.children, insertInto, meta);
            }
            else {
                handleChildren([childChildren], insertInto, meta);
            }
        }
        if (parentIsArray) {
            target[meta.HCOption].push(insertInto);
        }
    }
    if (Array.isArray(children)) {
        children.flat().forEach((c) => handleChild(c));
    }
    else {
        handleChild(children);
    }
    return optionsFromChildren;
}
function renderToHTML(el) {
    // React prop names to their HTML attribute equivalents map.
    const ATTR_MAP = {
        className: "class",
        htmlFor: "for",
        tabIndex: "tabindex",
        colSpan: "colspan",
        rowSpan: "rowspan",
        dateTime: "datetime",
        readOnly: "readonly",
        maxLength: "maxlength",
        minLength: "minlength",
    };
    // HTML void elements that don't have closing tags.
    const VOID_TAGS = new Set([
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
    ]);
    // HTML entity escape map.
    const ESC_MAP = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    };
    // Escapes special HTML characters in text content.
    function esc(s) {
        return s.replace(/[&<>"']/g, (c) => ESC_MAP[c]);
    }
    // Escapes special characters in attribute values (only quotes & ampersands).
    function escAttr(s) {
        return s.replace(/["&]/g, (c) => ESC_MAP[c]);
    }
    // Maps React prop names to HTML attribute names.
    function mapAttrName(k) {
        const name = ATTR_MAP[k] || k;
        // Handle data-* and aria-* attributes.
        if (name.startsWith("data-") || name.startsWith("aria-")) {
            return name.toLowerCase();
        }
        // Handle data-* and aria-* like camelCase props.
        if (name.startsWith("data") || name.startsWith("aria")) {
            return name.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        }
        return name;
    }
    // Recursively renders an element and its children to HTML.
    function render(el) {
        var _a;
        // Return empty string for null/undefined, booleans, and non-React elements.
        if (el === null || el === undefined || typeof el === "boolean") {
            return "";
        }
        // Return escaped string for strings.
        if (typeof el === "string") {
            return esc(el);
        }
        // Return stringified number for numbers.
        if (typeof el === "number") {
            return String(el);
        }
        // Return concatenated string for arrays.
        if (Array.isArray(el)) {
            return el.map(render).join("");
        }
        const element = el;
        // Return empty string for unknown element types.
        if (!(element === null || element === void 0 ? void 0 : element.$$typeof)) {
            return "";
        }
        // Call function components with props and render the result.
        if (typeof element.type === "function") {
            return render(element.type(element.props || {}));
        }
        // Render fragment components.
        if (element.type === Symbol.for("react.fragment")) {
            return render((_a = element.props) === null || _a === void 0 ? void 0 : _a.children);
        }
        // Render DOM elements (HTML tags).
        if (typeof element.type === "string") {
            const _b = element.props || {}, { children, key, ref, dangerouslySetInnerHTML, suppressContentEditableWarning, suppressHydrationWarning } = _b, props = __rest(_b, ["children", "key", "ref", "dangerouslySetInnerHTML", "suppressContentEditableWarning", "suppressHydrationWarning"]);
            const tag = element.type;
            const attrs = [];
            // Build attribute string from props.
            for (const [k, v] of Object.entries(props)) {
                // Skip null or undefined values.
                if (v === null || v === undefined) {
                    continue;
                }
                // Skip event handlers (onClick, onChange, etc.).
                if (k.startsWith("on") && typeof v === "function") {
                    continue;
                }
                // Only add boolean attributes if true.
                if (typeof v === "boolean") {
                    if (v) {
                        attrs.push(mapAttrName(k));
                    }
                    continue;
                }
                // Convert style objects to CSS string.
                if (k === "style" && typeof v === "object" && !Array.isArray(v)) {
                    const css = Object.entries(v)
                        .filter(([_, val]) => val != null)
                        .map(([p, val]) => {
                        const prop = p.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
                        return `${prop}:${val}`;
                    })
                        .join(";");
                    if (css)
                        attrs.push(`style="${escAttr(css)}"`);
                    continue;
                }
                // Map React names to HTML and handle data-/aria- attributes.
                attrs.push(`${mapAttrName(k)}="${escAttr(String(v))}"`);
            }
            const attrsStr = attrs.length ? " " + attrs.join(" ") : "";
            // Void elements are self-closing (no children, no closing tag).
            if (VOID_TAGS.has(tag)) {
                return `<${tag}${attrsStr}>`;
            }
            // Regular elements with content.
            const content = typeof dangerouslySetInnerHTML === "object" &&
                dangerouslySetInnerHTML !== null &&
                "__html" in dangerouslySetInnerHTML &&
                dangerouslySetInnerHTML.__html != null
                ? String(dangerouslySetInnerHTML.__html)
                : render(children);
            return `<${tag}${attrsStr}>${content}</${tag}>`;
        }
        return "";
    }
    return render(el);
}
// React v20+ notice: forwardRef will be removed
// https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop
/**
 * The chart container for Highcharts Maps. Renders a map from the GeoJSON or
 * TopoJSON passed to the series `mapData`.
 *
 * Declare the series as children, either with a dedicated component such as
 * `MapSeries` or with the generic `MapsSeries`, and configure the chart with
 * option components such as `Title` or `Tooltip`. Options passed through the
 * `options` prop are merged in first, direct props next, and children last.
 *
 * @example
 * <MapsChart>
 *   <Title>Population by region</Title>
 *   <MapSeries data={values} options={{ mapData: topology }} />
 * </MapsChart>
 *
 * @see https://www.highcharts.com/docs/react/components/chart
 */
export const MapsChart = forwardRef(function MapsChart(props, ref) {
    var _a;
    const renderHTML = (_a = props.renderToHTML) !== null && _a !== void 0 ? _a : renderToHTML;
    // Memoized for the no-children usage (<Chart options={...} />). With children
    // it is ineffective, as props.children is a new identity on every render.
    const chartConfig = useMemo(() => {
        const resolvedChildren = toArr(props.children).map(resolveChild);
        // Merge order, lowest to highest precedence: framework defaults, the
        // options prop, direct props, then options from children. getChildProps
        // resolves series children into the series key, and only adds that key
        // when children actually declare series - otherwise an empty array would
        // clobber series supplied through the options prop.
        return Highcharts.merge({ chart: { allowMutatingData: false } }, props.options || {}, Object.assign(Object.assign({ title: Object.assign({}, (props.title !== undefined ? { text: props.title } : {})), subtitle: Object.assign({}, (props.subtitle !== undefined ? { text: props.subtitle } : {})), caption: Object.assign({}, (props.caption !== undefined ? { text: props.caption } : {})), credits: Object.assign({}, (props.credits !== undefined ? { text: props.credits } : {})), chart: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (props.type !== undefined ? { type: props.type } : {})), (props.height !== undefined ? { height: props.height } : {})), (props.width !== undefined ? { width: props.width } : {})), (props.inverted !== undefined ? { inverted: props.inverted } : {})), (props.animation !== undefined
                ? { animation: props.animation }
                : {})), (props.styledMode !== undefined
                ? { styledMode: props.styledMode }
                : {})), (props.backgroundColor !== undefined
                ? { backgroundColor: props.backgroundColor }
                : {})), (props.borderColor !== undefined
                ? { borderColor: props.borderColor }
                : {})), (props.borderWidth !== undefined
                ? { borderWidth: props.borderWidth }
                : {})), (props.margin !== undefined ? { margin: props.margin } : {})), (props.spacing !== undefined ? { spacing: props.spacing } : {})) }, (props.colors !== undefined ? { colors: props.colors } : {})), (props.dataTable !== undefined
            ? { dataTable: props.dataTable }
            : {})), getChildProps(resolvedChildren, renderHTML));
    }, [
        props.children,
        props.options,
        renderHTML,
        props.title,
        props.subtitle,
        props.caption,
        props.credits,
        props.type,
        props.height,
        props.width,
        props.inverted,
        props.animation,
        props.styledMode,
        props.backgroundColor,
        props.borderColor,
        props.borderWidth,
        props.margin,
        props.spacing,
        props.colors,
        props.dataTable,
    ]);
    const containerRef = useRef();
    const chartRef = useRef();
    useEffect(() => {
        if (props.highcharts) {
            setHighcharts(props.highcharts);
        }
    }, [props.highcharts]);
    useImperativeHandle(ref, () => ({
        get chart() {
            return chartRef.current;
        },
        get container() {
            return containerRef.current;
        },
    }), []);
    // Create the chart on mount, then update it on config changes.
    useEffect(() => {
        const applyConfig = () => {
            Logger.log(JSON.stringify(chartConfig, undefined, "  "));
            if (!chartRef.current) {
                const HCConstructor = props.chartConstructor || "mapChart";
                Logger.log("Creating chart using", HCConstructor, "constructor");
                chartRef.current = getHighcharts()[HCConstructor](containerRef.current, chartConfig);
            }
            else {
                Logger.log("Updating chart", JSON.parse(JSON.stringify(chartConfig)));
                chartRef.current.update(chartConfig, true, true);
            }
        };
        const pending = loadMissingModules(chartConfig);
        if (!pending) {
            applyConfig();
            return;
        }
        let cancelled = false;
        pending
            .catch((error) => {
            Logger.log("Could not load the series modules.", error);
        })
            .then(() => {
            if (!cancelled) {
                applyConfig();
            }
        });
        return () => {
            cancelled = true;
        };
    }, [chartConfig, props.chartConstructor]);
    // Destroy the chart when the component unmounts.
    useEffect(() => () => {
        var _a;
        if ((_a = chartRef.current) === null || _a === void 0 ? void 0 : _a.renderer) {
            chartRef.current.destroy();
        }
        chartRef.current = undefined;
    }, []);
    return React.createElement("div", Object.assign({}, props.containerProps, { ref: containerRef }));
});
/**
 * A chart series whose type is set with the `type` prop.
 *
 * For a fixed type, prefer a dedicated component such as `MapSeries` for the
 * best autocomplete. Reach for `MapsSeries` when the type is dynamic, e.g.
 * `<MapsSeries type={type} data={data} />`. For full type safety on advanced
 * settings, pass them through the `options` prop.
 *
 * @example
 * <MapsSeries type="map" data={values} />
 */
export function MapsSeries(props) {
    return null;
}
MapsSeries.type = "Series";
MapsChart.Series = MapsSeries;
export default MapsChart;
// The modules each series type requires, in load order. Paths are literals so
// that bundlers can code-split them.
const seriesModuleLoaders = {
    abands: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/acceleration-bands.src.js")),
    ad: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/accumulation-distribution.src.js")),
    ao: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/ao.src.js")),
    apo: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/apo.src.js")),
    arcdiagram: () => import("highcharts/es-modules/masters/modules/sankey.src.js").then(() => import("highcharts/es-modules/masters/modules/arc-diagram.src.js")),
    arearange: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    areasplinerange: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    aroon: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/aroon.src.js")),
    aroonoscillator: () => import("highcharts/es-modules/masters/indicators/indicators.src.js")
        .then(() => import("highcharts/es-modules/masters/indicators/aroon.src.js"))
        .then(() => import("highcharts/es-modules/masters/indicators/aroon-oscillator.src.js")),
    atr: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/atr.src.js")),
    bb: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/bollinger-bands.src.js")),
    bellcurve: () => import("highcharts/es-modules/masters/modules/histogram-bellcurve.src.js"),
    boxplot: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    bubble: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    bullet: () => import("highcharts/es-modules/masters/modules/bullet.src.js"),
    cci: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/cci.src.js")),
    chaikin: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/chaikin.src.js")),
    cmf: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/cmf.src.js")),
    cmo: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/cmo.src.js")),
    columnpyramid: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    columnrange: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    contour: () => import("highcharts/es-modules/masters/modules/coloraxis.src.js").then(() => import("highcharts/es-modules/masters/modules/contour.src.js")),
    cylinder: () => import("highcharts/es-modules/masters/highcharts-3d.src.js").then(() => import("highcharts/es-modules/masters/modules/cylinder.src.js")),
    dema: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/dema.src.js")),
    dependencywheel: () => import("highcharts/es-modules/masters/modules/sankey.src.js").then(() => import("highcharts/es-modules/masters/modules/dependency-wheel.src.js")),
    disparityindex: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/disparity-index.src.js")),
    dmi: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/dmi.src.js")),
    dpo: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/dpo.src.js")),
    dumbbell: () => import("highcharts/es-modules/masters/highcharts-more.src.js").then(() => import("highcharts/es-modules/masters/modules/dumbbell.src.js")),
    ema: () => import("highcharts/es-modules/masters/indicators/indicators.src.js"),
    errorbar: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    flowmap: () => import("highcharts/es-modules/masters/modules/flowmap.src.js"),
    funnel: () => import("highcharts/es-modules/masters/modules/funnel.src.js"),
    funnel3d: () => import("highcharts/es-modules/masters/highcharts-3d.src.js")
        .then(() => import("highcharts/es-modules/masters/modules/cylinder.src.js"))
        .then(() => import("highcharts/es-modules/masters/modules/funnel3d.src.js")),
    gantt: () => import("highcharts/es-modules/masters/highcharts-gantt.src.js").then(() => import("highcharts/es-modules/masters/modules/gantt.src.js")),
    gauge: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    geoheatmap: () => import("highcharts/es-modules/masters/modules/geoheatmap.src.js"),
    heatmap: () => import("highcharts/es-modules/masters/modules/heatmap.src.js"),
    heikinashi: () => import("highcharts/es-modules/masters/modules/heikinashi.src.js"),
    histogram: () => import("highcharts/es-modules/masters/modules/histogram-bellcurve.src.js"),
    hollowcandlestick: () => import("highcharts/es-modules/masters/modules/hollowcandlestick.src.js"),
    ikh: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/ichimoku-kinko-hyo.src.js")),
    item: () => import("highcharts/es-modules/masters/modules/item-series.src.js"),
    keltnerchannels: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/keltner-channels.src.js")),
    klinger: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/klinger.src.js")),
    linearregression: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/regressions.src.js")),
    linearregressionangle: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/regressions.src.js")),
    linearregressionintercept: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/regressions.src.js")),
    linearregressionslope: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/regressions.src.js")),
    lollipop: () => import("highcharts/es-modules/masters/highcharts-more.src.js")
        .then(() => import("highcharts/es-modules/masters/modules/dumbbell.src.js"))
        .then(() => import("highcharts/es-modules/masters/modules/lollipop.src.js")),
    macd: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/macd.src.js")),
    mfi: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/mfi.src.js")),
    momentum: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/momentum.src.js")),
    natr: () => import("highcharts/es-modules/masters/indicators/indicators.src.js")
        .then(() => import("highcharts/es-modules/masters/indicators/atr.src.js"))
        .then(() => import("highcharts/es-modules/masters/indicators/natr.src.js")),
    networkgraph: () => import("highcharts/es-modules/masters/modules/networkgraph.src.js"),
    obv: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/obv.src.js")),
    organization: () => import("highcharts/es-modules/masters/modules/sankey.src.js").then(() => import("highcharts/es-modules/masters/modules/organization.src.js")),
    packedbubble: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    pareto: () => import("highcharts/es-modules/masters/modules/pareto.src.js"),
    pc: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/price-channel.src.js")),
    pictorial: () => import("highcharts/es-modules/masters/modules/pictorial.src.js"),
    pivotpoints: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/pivot-points.src.js")),
    pointandfigure: () => import("highcharts/es-modules/masters/modules/pointandfigure.src.js"),
    polygon: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    ppo: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/ppo.src.js")),
    priceenvelopes: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/price-envelopes.src.js")),
    psar: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/psar.src.js")),
    pyramid: () => import("highcharts/es-modules/masters/modules/funnel.src.js"),
    pyramid3d: () => import("highcharts/es-modules/masters/highcharts-3d.src.js")
        .then(() => import("highcharts/es-modules/masters/modules/cylinder.src.js"))
        .then(() => import("highcharts/es-modules/masters/modules/funnel3d.src.js"))
        .then(() => import("highcharts/es-modules/masters/modules/pyramid3d.src.js")),
    renko: () => import("highcharts/es-modules/masters/modules/renko.src.js"),
    roc: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/roc.src.js")),
    rsi: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/rsi.src.js")),
    sankey: () => import("highcharts/es-modules/masters/modules/sankey.src.js"),
    scatter3d: () => import("highcharts/es-modules/masters/highcharts-3d.src.js"),
    slowstochastic: () => import("highcharts/es-modules/masters/indicators/indicators.src.js")
        .then(() => import("highcharts/es-modules/masters/indicators/stochastic.src.js"))
        .then(() => import("highcharts/es-modules/masters/indicators/slow-stochastic.src.js")),
    sma: () => import("highcharts/es-modules/masters/indicators/indicators.src.js"),
    solidgauge: () => import("highcharts/es-modules/masters/highcharts-more.src.js").then(() => import("highcharts/es-modules/masters/modules/solid-gauge.src.js")),
    stochastic: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/stochastic.src.js")),
    streamgraph: () => import("highcharts/es-modules/masters/modules/streamgraph.src.js"),
    sunburst: () => import("highcharts/es-modules/masters/modules/sunburst.src.js"),
    supertrend: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/supertrend.src.js")),
    tema: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/tema.src.js")),
    tiledwebmap: () => import("highcharts/es-modules/masters/modules/tiledwebmap.src.js"),
    tilemap: () => import("highcharts/es-modules/masters/modules/tilemap.src.js"),
    timeline: () => import("highcharts/es-modules/masters/modules/timeline.src.js"),
    treegraph: () => import("highcharts/es-modules/masters/modules/treemap.src.js").then(() => import("highcharts/es-modules/masters/modules/treegraph.src.js")),
    treemap: () => import("highcharts/es-modules/masters/modules/treemap.src.js"),
    trendline: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/trendline.src.js")),
    trix: () => import("highcharts/es-modules/masters/indicators/indicators.src.js")
        .then(() => import("highcharts/es-modules/masters/indicators/tema.src.js"))
        .then(() => import("highcharts/es-modules/masters/indicators/trix.src.js")),
    variablepie: () => import("highcharts/es-modules/masters/modules/variable-pie.src.js"),
    variwide: () => import("highcharts/es-modules/masters/modules/variwide.src.js"),
    vbp: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/volume-by-price.src.js")),
    vector: () => import("highcharts/es-modules/masters/modules/vector.src.js"),
    venn: () => import("highcharts/es-modules/masters/modules/venn.src.js"),
    vwap: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/vwap.src.js")),
    waterfall: () => import("highcharts/es-modules/masters/highcharts-more.src.js"),
    williamsr: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/williams-r.src.js")),
    windbarb: () => import("highcharts/es-modules/masters/modules/windbarb.src.js"),
    wma: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/wma.src.js")),
    wordcloud: () => import("highcharts/es-modules/masters/modules/wordcloud.src.js"),
    xrange: () => import("highcharts/es-modules/masters/modules/xrange.src.js"),
    zigzag: () => import("highcharts/es-modules/masters/indicators/indicators.src.js").then(() => import("highcharts/es-modules/masters/indicators/zigzag.src.js")),
};
