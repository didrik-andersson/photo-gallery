const _colors = {
  white: "#fff",
  black: "#000",
  blue_light: "#e6f3fb",
  blue: "#0D78C5",
  blue_darken: "#0048b5",
  green: "#13AA13",
  green_hover: "#32b232",
  green_transparent: "rgba(0,188,0,0.05)",
  light_green: "#b8e5b8",
  brand_green: "#3ac83a",
  shade_green_10: "#e7f7e7",
  red: "#e01e59",
  dark_red: "#e30f21",
  light_red: "#fce7e9",
  sage: "#e3f9e0",
  sage_hover: "#bde8bd",
  orange: "#f24d09",
  light_orange: "#FEEDE6",
  yellow: "#ffdc02",
  light_yellow: "#FFF4C7",

  gray10: "#101010",
  gray20: "#333",
  gray40: "#4d4d4d",
  gray50: "#808080",
  gray65: "#b6b6b6",
  gray80: "#dcdcdc",
  gray85: "#e6e6e6",
  gray92: "#f1f1f1",
  gray95: "#f5f5f5",

  dark10: "rgba(0, 0, 0, 0.1)",
  dark30: "rgba(0, 0, 0, 0.3)",
  dark50: "rgba(0, 0, 0, 0.5)",
  dark60: "rgba(0, 0, 0, 0.6)",

  light20: "rgba(255, 255, 255, 0.2)",
};

const theme = {
  colors: {
    bg: {
      main: _colors.white,
      accent: _colors.gray95,
      alt: _colors.black,
      outer: _colors.gray92,
      active: _colors.green_transparent,
      highlight: _colors.blue_light,
      warning: _colors.light_red,
      positive: _colors.light_green,
      member: _colors.light_yellow,
      info: _colors.shade_green_10,
      infoActive: _colors.gray65,
    },
    text: {
      main: _colors.black,
      alt: _colors.gray40,
      ghost: _colors.gray50,
      link: _colors.blue,
      linkHover: _colors.blue_darken,
      onColor: _colors.white,
      onAlt: _colors.white,
      highlight: _colors.orange,
      sale: _colors.orange,
      placeholder: _colors.gray50,
      disabled: _colors.dark60,
    },
    badge: {
      sale: _colors.dark_red,
      highlight: _colors.orange,
    },
    coupon: {
      bg: _colors.orange,
      disabled: {
        default: _colors.gray85,
        text: _colors.dark60,
      },
    },
    button: {
      base: {
        default: _colors.black,
        hover: _colors.gray10,
        text: _colors.white,
      },
      positive: {
        default: _colors.sage,
        hover: _colors.sage_hover,
        text: _colors.green,
      },
      forward: {
        default: _colors.green,
        hover: _colors.green_hover,
      },
      soft: {
        default: _colors.gray95,
        text: _colors.black,
        hover: _colors.gray92,
      },
      ghost: {
        default: _colors.dark10,
        text: _colors.black,
        hover: _colors.gray65,
        disabledBackground: _colors.gray95,
        disabledText: _colors.dark30,
      },
      disabled: {
        default: _colors.gray85,
        text: _colors.dark50,
      },
    },
    toggle: {
      bg: _colors.gray50,
      thumb: _colors.white,
    },
    border: {
      main: _colors.dark10,
      hover: _colors.gray65,
      alt: _colors.gray85,
      onColor: _colors.light20,
      active: _colors.blue,
      activeAlt: _colors.green,
    },
    ui: {
      positive: _colors.green,
      negative: _colors.dark_red,
      neutral: _colors.yellow,
      unknown: _colors.gray50,
      info: _colors.blue,
    },
    dots: {
      active: _colors.gray20,
      inactive: _colors.gray80,
    },
    input: {
      disabled: _colors.gray95,
      checkbox: {
        selected: _colors.brand_green,
      },
    },
    loader: _colors.black,
  },

  skeleton: {
    loader: _colors.gray85,
    backLoader: _colors.gray95,
  },

  screens: {
    XXS: "@media  (min-width: 319px) ",
    LtXS: "@media (max-width: 374px)",
    XS: "@media (min-width: 375px)",
    LtSm: "@media (max-width: 599px)",
    Sm: "@media (min-width: 600px)",
    SmLtMd: "@media (min-width: 600px) and (max-width: 899px)",
    LtMd: "@media (max-width: 899px)",
    Md: "@media (min-width: 900px)",
    MdLtLg: "@media (min-width: 900px) and (max-width: 1199px)",
    LtLg: "@media (max-width: 1199px)",
    Lg: "@media (min-width: 1200px)",
    LtXL: "@media (max-width: 1799px)",
    XL: "@media (min-width: 1800px)",
  },
};

export { theme };
