const svgs = {
  passing: {
    "1.svg": "soccer",
    "22.svg": "world",
    "23.svg": "tiger",
    "25.svg": "butterfly",
    "26.svg": "floorplan",
    "2.svg": "all",
    "8.svg": "layers",
    "10.svg": "line",
    "11.svg": "poly",
    "13.svg": "path",
    "15.svg": "curve",
    "27.svg": "arcs",
    "29.svg": "markers",
    "16.svg": "linear",
    "18.svg": "radial",
    "19.svg": "radial",
    "30.svg": "pattern",
    "34.svg": "transform",
    "20.svg": "indefinite",
    "21.svg": "multiple",
    "35.svg": "glyphs",
    "36.svg": "external",
    "33.svg": "masks",
    "24.svg": "units",
    "28.svg": "viewport",
    "31.svg": "links",
    "32.svg": "images",
    "issue106.svg": "Issue #106: gradient transform",
    "issue112.svg": "Issue #112: marker orientation",
    "issue114.svg": "Issue #114: text anchor",
    "issue115.svg": "Issue #115: marker orientation",
    "issue116.svg": "Issue #116: text dominant baseline",
    "issue117.svg": "Issue #117: svg logo",
    "issue121.svg": "Issue #121: ellipse animation",
    "issue122.svg": "Issue #122: radial gradient (broken - don't scale)",
    "issue125a.svg": "Issue #125a: complex path and gradient",
    "issue125b.svg": "Issue #125b: complex path and gradient",
    "issue128.svg": "Issue #128: markers (broken - don't align)",
    "issue132.svg": "Issue #132: radial gradients (broken - don't scale)",
    "issue134.svg": "Issue #134: positioning",
    "issue135.svg": "Issue #135: gradient transform (broken)",
    "issue137.svg": "Issue #137: positioning (broken)",
    "issue138.svg": "Issue #138: image in pattern (broken)",
    "issue142.svg": "Issue #142: stroke dash support",
    "issue144.svg": "Issue #144: large complex",
    "issue145.svg": "Issue #145: css id selector",
    "issue161.svg": "Issue #161: google chart gradient (svg error)",
    "issue166.svg": "Issue #166: custom glyphs",
    "issue172.svg": "Issue #172: cylinder gradient (broken - radial gradient off)",
    "issue175.svg": "Issue #175: stroke width",
    "issue176.svg": "Issue #176: rounded rectangles",
    "issue178.svg": "Issue #178: pattern offset",
    "issue179.svg": "Issue #179: animate rotate transform center",
    "issue180.svg": "Issue #180: pattern x offset width (open)",
    "issue183.svg": "Issue #183: mask error (broken)",
    "issue184.svg": "Issue #184: transformed pattern",
    "issue187.svg": "Issue #187: nested tspans",
    "issue195.svg": "Issue #195: gray filter",
    "issue196.svg": "Issue #196: incorrect radial gradient",
    "issue197.svg": "Issue #197: non smooth lines",
    "issue202.svg": "Issue #202: text anchor middle",
    "issue202b.svg": "Issue #202b: text anchor middle",
    "issue211.svg": "Issue #211: transform",
    "issue212.svg": "Issue #212: path shorthand quadratic bezier",
    "issue217.svg": "Issue #217: advanced css support",
    "issue227.svg": "Issue #227: clip path transform",
    "issue229.svg": "Issue #229: text anchor from style",
    "issue231.svg": "Issue #231: clip from style",
    "issue234.svg": "Issue #234: use / symbol",
    "issue234b.svg": "Issue #234b: use / symbol",
    "issue234c.svg": "Issue #234c: use / symbol",
    "issue234d.svg": "Issue #234d: use / symbol",
    "issue234e.svg": "Issue #234e: use / symbol",
    "issue238.svg": "Issue #238: improper clip context / FF stroke",
    "issue24.svg": "Issue #24: clipPath",
    "issue241.svg": "Issue #241: feColorMatrix",
    "issue244.svg": "Issue #244: text baseline",
    "issue25.svg": "Issue #25: stroke-linejoin",
    "issue255.svg": "Issue #255: transform parsing",
    "issue268.svg": "Issue #268: tspan dx dy not affecting x y",
    "issue269.svg": "Issue #269: opacity in e-notation",
    "issue273.svg": "Issue #273: fill freeze animation",
    "issue277.svg": "Issue #277: pattern parent opacity",
    "issue282.svg": "Issue #282: treat clip path as attribute",
    "issue289.svg": "Issue #289: multiple clip",
    "issue3.svg": "Issue #3: radial gradient (broken)",
    "issue30.svg": "Issue #30: text-anchor",
    "issue31.svg": "Issue #31: font-size",
    "issue32.svg": "Issue #32: font-family",
    "issue322.svg": "Issue #322: path parsing",
    "issue33.svg": "Issue #33: font-style",
    "issue34.svg": "Issue #34: font-weight",
    "issue35.svg": "Issue #35: gradient strokes",
    "issue352.svg": "Issue #352: transform as style",
    "issue358.svg": "Issue #358: patternTransform rotate offset",
    "issue36.svg": "Issue #36: marker",
    "issue362.svg": "Issue #362: text tspan dx dy offset fixes",
    "issue366.svg": "Issue #366: referenced gradients",
    "issue372.svg": "Issue #372: referenced gradients",
    "issue376.svg": "Issue #376: recurring css class definitions",
    "issue38.svg": "Issue #38: tspan",
    "issue39.svg": "Issue #39: tref",
    "issue40.svg": "Issue #40: pattern",
    "issue41.svg": "Issue #41: symbol",
    "issue42.svg": "Issue #42: polyline marker",
    "issue44.svg": "Issue #44: inner links",
    "issue46.svg": "Issue #46: multi-line text",
    "issue48.svg": "Issue #48: complex radial gradient",
    "issue50.svg": "Issue #50: gradient changing paths",
    "issue510.svg": "Issue #510: nested opacity",
    "issue52.svg": "Issue #52: stroke dash support",
    "issue54.svg": "Issue #54: path control points",
    "issue55.svg": "Issue #55: clipPath",
    "issue57.svg": "Issue #57: use and def",
    "issue57b.svg": "Issue #57b: complex gradient",
    "issue593.svg": "Issue #593: Web font support is broken since 1.5",
    "issue67.svg": "Issue #67: complex paths",
    "issue73.svg": "Issue #73: animation fill freeze",
    "issue75.svg": "Issue #75: path command z",
    "issue76.svg": "Issue #76: fill rule even odd",
    "issue77.svg": "Issue #77: inherited stroke colors",
    "issue79.svg": "Issue #79: use width height",
    "issue8.svg": "Issue #8: stroke linecap",
    "issue85.svg": "Issue #85: arabic glyphs",
    "issue88.svg": "Issue #88: centered text",
    "issue89.svg": "Issue #89: gradient transforms",
    "issue91.svg": "Issue #91: opacity masks",
    "issue94.svg": "Issue #94: visibility attribute",
    "issue98.svg": "Issue #98: path error",
    "issue99.svg": "Issue #99: tspan offset",
    "issue206.svg": "Issue #206: blur",
    "issue182.svg": "Issue #182: blur (broken - a bit off on intensity)",
    "issue66.svg": "Issue #66: gaussian blur",
    "issue610.svg": "Issue #610: rounded rectangle corners as bezier",
    "issue454.svg": "Issue #454: stroke dash offset on a line",
    "issue454b.svg": "Issue #454b: stroke dash offset on a line",
    "issue473.svg": "Issue #473: stroke dash on arc",
    "issue615.svg": "Issue #615: transform on clip",
    "issue342.svg": "Issue #342: text gradient",
    "issue620.svg": "Issue #620: em font size",
    "issue320.svg": "Issue #320: rem font size",
    "issue564.svg": "Issue #564: tspan text-anchor",
  },

  broken: {
    "issue70.svg": "Issue #70: bounding box (broken - missing shadow)",
    "issue71.svg": "Issue #71: glyph",
    "issue82.svg": "Issue #82: external font",
    "issue97.svg": "Issue #97: slow loading time",
    "issue104.svg": "Issue #104: linear gradient",
    "issue45.svg": "Issue #45: gradient transform (broken)",
    "issue181.svg": "Issue #181: linear gradient (broken - not appearing)",
    "issue158.svg": "Issue #158: complex w/ data images (broken - missing images in circles)"
  }
};

module.exports = svgs;
