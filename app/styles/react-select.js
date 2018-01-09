import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Select": {
        "position": "relative",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "Select div": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "Select input": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "Select span": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "Selectis-disabled > Select-control": {
        "backgroundColor": "#f9f9f9"
    },
    "Selectis-disabled > Select-control:hover": {
        "boxShadow": "none"
    },
    "Selectis-disabled Select-arrow-zone": {
        "cursor": "default",
        "pointerEvents": "none",
        "opacity": 0.35
    },
    "Select-control": {
        "backgroundColor": "#fff",
        "borderColor": "#d9d9d9 #ccc #b3b3b3",
        "borderRadius": 4,
        "border": "1px solid #ccc",
        "color": "#333",
        "cursor": "default",
        "display": "table",
        "borderSpacing": 0,
        "borderCollapse": "separate",
        "height": 36,
        "outline": "none",
        "overflow": "hidden",
        "position": "relative",
        "width": "100%"
    },
    "Select-control:hover": {
        "boxShadow": "0 1px 0 rgba(0, 0, 0, 0.06)"
    },
    "Select-control Select-input:focus": {
        "outline": "none"
    },
    "is-searchableis-open > Select-control": {
        "cursor": "text"
    },
    "is-open > Select-control": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "background": "#fff",
        "borderColor": "#b3b3b3 #ccc #d9d9d9"
    },
    "is-open > Select-control > Select-arrow": {
        "borderColor": "transparent transparent #999",
        "borderWidth": "0 5px 5px"
    },
    "is-searchableis-focused:not(is-open) > Select-control": {
        "cursor": "text"
    },
    "is-focused:not(is-open) > Select-control": {
        "borderColor": "#007eff",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1)"
    },
    "Select-placeholder": {
        "bottom": 0,
        "color": "#aaa",
        "left": 0,
        "lineHeight": 34,
        "paddingLeft": 10,
        "paddingRight": 10,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "maxWidth": "100%",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "Select--single > Select-control Select-value": {
        "bottom": 0,
        "color": "#aaa",
        "left": 0,
        "lineHeight": 34,
        "paddingLeft": 10,
        "paddingRight": 10,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "maxWidth": "100%",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "has-valueSelect--single > Select-control Select-value Select-value-label": {
        "color": "#333"
    },
    "has-valueis-pseudo-focusedSelect--single > Select-control Select-value Select-value-label": {
        "color": "#333"
    },
    "has-valueSelect--single > Select-control Select-value aSelect-value-label": {
        "cursor": "pointer",
        "textDecoration": "none"
    },
    "has-valueis-pseudo-focusedSelect--single > Select-control Select-value aSelect-value-label": {
        "cursor": "pointer",
        "textDecoration": "none"
    },
    "has-valueSelect--single > Select-control Select-value aSelect-value-label:hover": {
        "color": "#007eff",
        "outline": "none",
        "textDecoration": "underline"
    },
    "has-valueis-pseudo-focusedSelect--single > Select-control Select-value aSelect-value-label:hover": {
        "color": "#007eff",
        "outline": "none",
        "textDecoration": "underline"
    },
    "has-valueSelect--single > Select-control Select-value aSelect-value-label:focus": {
        "color": "#007eff",
        "outline": "none",
        "textDecoration": "underline"
    },
    "has-valueis-pseudo-focusedSelect--single > Select-control Select-value aSelect-value-label:focus": {
        "color": "#007eff",
        "outline": "none",
        "textDecoration": "underline"
    },
    "Select-input": {
        "height": 34,
        "paddingLeft": 10,
        "paddingRight": 10,
        "verticalAlign": "middle"
    },
    "Select-input > input": {
        "width": "100%",
        "background": "none transparent",
        "border": "0 none",
        "boxShadow": "none",
        "cursor": "default",
        "display": "inline-block",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "outline": "none",
        "lineHeight": 14,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "WebkitAppearance": "none"
    },
    "is-focused Select-input > input": {
        "cursor": "text"
    },
    "has-valueis-pseudo-focused Select-input": {
        "opacity": 0
    },
    "Select-control:not(is-searchable) > Select-input": {
        "outline": "none"
    },
    "Select-loading-zone": {
        "cursor": "pointer",
        "display": "table-cell",
        "position": "relative",
        "textAlign": "center",
        "verticalAlign": "middle",
        "width": 16
    },
    "Select-loading": {
        "WebkitAnimation": "Select-animation-spin 400ms infinite linear",
        "OAnimation": "Select-animation-spin 400ms infinite linear",
        "animation": "Select-animation-spin 400ms infinite linear",
        "width": 16,
        "height": 16,
        "boxSizing": "border-box",
        "borderRadius": "50%",
        "border": "2px solid #ccc",
        "borderRightColor": "#333",
        "display": "inline-block",
        "position": "relative",
        "verticalAlign": "middle"
    },
    "Select-clear-zone": {
        "WebkitAnimation": "Select-animation-fadeIn 200ms",
        "OAnimation": "Select-animation-fadeIn 200ms",
        "animation": "Select-animation-fadeIn 200ms",
        "color": "#999",
        "cursor": "pointer",
        "display": "table-cell",
        "position": "relative",
        "textAlign": "center",
        "verticalAlign": "middle",
        "width": 17
    },
    "Select-clear-zone:hover": {
        "color": "#D0021B"
    },
    "Select-clear": {
        "display": "inline-block",
        "fontSize": 18,
        "lineHeight": 1
    },
    "Select--multi Select-clear-zone": {
        "width": 17
    },
    "Select-arrow-zone": {
        "cursor": "pointer",
        "display": "table-cell",
        "position": "relative",
        "textAlign": "center",
        "verticalAlign": "middle",
        "width": 25,
        "paddingRight": 5
    },
    "Select-arrow": {
        "borderColor": "#999 transparent transparent",
        "borderStyle": "solid",
        "borderWidth": "5px 5px 2.5px",
        "display": "inline-block",
        "height": 0,
        "width": 0
    },
    "is-open Select-arrow": {
        "borderTopColor": "#666"
    },
    "Select-arrow-zone:hover > Select-arrow": {
        "borderTopColor": "#666"
    },
    "Select--multi Select-multi-value-wrapper": {
        "display": "inline-block"
    },
    "Select Select-aria-only": {
        "display": "inline-block",
        "height": 1,
        "width": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "clip": "rect(0, 0, 0, 0)",
        "overflow": "hidden"
    },
    "Select-menu-outer": {
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "borderTopColor": "#e6e6e6",
        "boxShadow": "0 1px 0 rgba(0, 0, 0, 0.06)",
        "boxSizing": "border-box",
        "marginTop": -1,
        "maxHeight": 200,
        "position": "absolute",
        "top": "100%",
        "width": "100%",
        "zIndex": 1,
        "WebkitOverflowScrolling": "touch"
    },
    "Select-menu": {
        "maxHeight": 198,
        "overflowY": "auto"
    },
    "Select-option": {
        "boxSizing": "border-box",
        "backgroundColor": "#fff",
        "color": "#666666",
        "cursor": "pointer",
        "display": "block",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10
    },
    "Select-option:last-child": {
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "Select-optionis-selected": {
        "backgroundColor": "rgba(0, 126, 255, 0.04)",
        "color": "#333"
    },
    "Select-optionis-focused": {
        "backgroundColor": "rgba(0, 126, 255, 0.08)",
        "color": "#333"
    },
    "Select-optionis-disabled": {
        "color": "#cccccc",
        "cursor": "default"
    },
    "Select-noresults": {
        "boxSizing": "border-box",
        "color": "#999999",
        "cursor": "default",
        "display": "block",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10
    },
    "Select--multi Select-input": {
        "verticalAlign": "middle",
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "Select--multihas-value Select-input": {
        "marginLeft": 5
    },
    "Select--multi Select-value": {
        "backgroundColor": "rgba(0, 126, 255, 0.08)",
        "borderRadius": 2,
        "border": "1px solid rgba(0, 126, 255, 0.24)",
        "color": "#007eff",
        "display": "inline-block",
        "fontSize": 0.9,
        "lineHeight": 1.4,
        "marginLeft": 5,
        "marginTop": 5,
        "verticalAlign": "top"
    },
    "Select--multi Select-value-icon": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "borderBottomLeftRadius": 2,
        "borderTopLeftRadius": 2,
        "borderRight": "1px solid rgba(0, 126, 255, 0.24)",
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5
    },
    "Select--multi Select-value-label": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "borderBottomRightRadius": 2,
        "borderTopRightRadius": 2,
        "cursor": "default",
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5
    },
    "Select--multi aSelect-value-label": {
        "color": "#007eff",
        "cursor": "pointer",
        "textDecoration": "none"
    },
    "Select--multi aSelect-value-label:hover": {
        "textDecoration": "underline"
    },
    "Select--multi Select-value-icon:hover": {
        "backgroundColor": "rgba(0, 113, 230, 0.08)",
        "color": "#0071e6"
    },
    "Select--multi Select-value-icon:focus": {
        "backgroundColor": "rgba(0, 113, 230, 0.08)",
        "color": "#0071e6"
    },
    "Select--multi Select-value-icon:active": {
        "backgroundColor": "rgba(0, 126, 255, 0.24)"
    },
    "Select--multiis-disabled Select-value": {
        "backgroundColor": "#fcfcfc",
        "border": "1px solid #e3e3e3",
        "color": "#333"
    },
    "Select--multiis-disabled Select-value-icon": {
        "cursor": "not-allowed",
        "borderRight": "1px solid #e3e3e3"
    },
    "Select--multiis-disabled Select-value-icon:hover": {
        "backgroundColor": "#fcfcfc"
    },
    "Select--multiis-disabled Select-value-icon:focus": {
        "backgroundColor": "#fcfcfc"
    },
    "Select--multiis-disabled Select-value-icon:active": {
        "backgroundColor": "#fcfcfc"
    }
});