import type { CSSProperties } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

type TypographyStyle = Omit<CSSProperties, "fontSize"> & {
    fontSize?: ResponsiveStyleValue<CSSProperties["fontSize"]>;
};

type TypographyGroup = Record<string, TypographyStyle>;

declare module "@mui/material/styles" {
    interface TypographyVariants {
        nav: TypographyGroup;
        dashboard: TypographyGroup;
    }

    interface TypographyVariantsOptions {
        nav?: TypographyGroup;
        dashboard?: TypographyGroup;
    }
}

export const typography = {
    fontFamily: "Poppins, sans-serif",

    h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
    },

    h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.25,
    },

    h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
    },

    h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.35,
    },

    h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.4,
    },

    h6: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.4,
    },

    subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.5,
    },

    subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.5,
    },

    body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },

    body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },

    button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        textTransform: "none",
    },

    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.4,
    },

    overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: 1.5,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
    },

    nav: {
        brand: {
            fontSize: "1.5rem",
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