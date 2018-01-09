import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 40
    },
    "stepwizard-step p": {
        "marginTop": 10
    },
    "stepwizard-row": {
        "display": "table-row"
    },
    "stepwizard": {
        "display": "table",
        "width": "50%",
        "position": "relative"
    },
    "stepwizard-step button[disabled]": {
        "opacity": "1 !important",
        "filter": "alpha(opacity=100) !important"
    },
    "stepwizard-row:before": {
        "top": 14,
        "bottom": 0,
        "position": "absolute",
        "content": " ",
        "width": "100%",
        "height": 1,
        "backgroundColor": "#ccc",
        "zOrder": 0
    },
    "stepwizard-step": {
        "display": "table-cell",
        "textAlign": "center",
        "position": "relative"
    },
    "btn-circle": {
        "width": 30,
        "height": 30,
        "textAlign": "center",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "fontSize": 12,
        "lineHeight": 1.428571429,
        "borderRadius": 15
    }
});