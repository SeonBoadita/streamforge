import type { CSSProperties } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

type TypographyStyle = Omit<CSSProperties, "fontSize"> & {
    fontSize?: ResponsiveStyleValue<CSSProperties["fontSize"]>;
};

type TypographyGroup = Record<string, TypographyStyle>;

declare module "@mui/material/styles" {
    interface TypographyVariants {
        icons: TypographyStyle;
        heading1: TypographyStyle;
        heading2: TypographyStyle;
        heading3: TypographyStyle;
        heading4: TypographyStyle;
        paragraph1: TypographyStyle;
        paragraph2: TypographyStyle;
        paragraph3: TypographyStyle;
        nav: TypographyGroup;
        dashboard: TypographyGroup;
    }

    interface TypographyVariantsOptions {
        icons?: TypographyStyle;
        heading1?: TypographyStyle;
        heading2?: TypographyStyle;
        heading3?: TypographyStyle;
        heading4?: TypographyStyle;
        paragraph1?: TypographyStyle;
        paragraph2?: TypographyStyle;
        paragraph3?: TypographyStyle;
        nav?: TypographyGroup;
        dashboard?: TypographyGroup;
    }
}

export const typography = {
    fontFamily: "Poppins, sans-serif",

    icons: {
        width: "1.5625rem",
        height: "1.5625rem",
    },

    heading1: {
        fontSize: "1.875rem", // 30px
    },

    heading2: {
        fontSize: "1.625rem", // 26px
    },

    heading3: {
        fontSize: "1.25rem", // 20px
    },

    heading4: {
        fontSize: "1.125rem", // 18px
    },

    paragraph1: {
        fontSize: "1rem", // 16px
    },

    paragraph2: {
        fontSize: "0.875rem", // 14px
    },

    paragraph3: {
        fontSize: "0.75rem", // 12px
    },

    overline: {
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
    },

    nav: {
        brand: {
            fontSize: "1.2rem",
            fontWeight: 600,
            lineHeight: 1.2,
        },

        item: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.43,
        },

        itemStrong: {
            fontSize: "0.875rem",
            fontWeight: 600,
            lineHeight: 1.43,
        },

        meta: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 1.33,
        },

        menuAction: {
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.33,
        },

        badge: {
            fontSize: "0.75rem",
            fontWeight: 600,
            lineHeight: 1,
        },
    },

    dashboard: {
        heroTitle: {
            fontSize: {
                xs: "1.8rem",
                sm: "2rem",
                md: "2rem",
                lg: "2rem",
            },
            fontWeight: 600,
        },

        title: {
            fontSize: "1.25rem",
            fontWeight: 600,
        },

        subtitle: {
            fontSize: "1rem",
            fontWeight: 500,
        },

        text: {
            fontSize: "0.75rem",
            fontWeight: 400,
        },
    },
};