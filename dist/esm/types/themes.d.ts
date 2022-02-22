/// <reference types="react" />
declare module '@mui/material/styles' {
    interface TypographyVariants {
        subtitle: React.CSSProperties;
        'caption-sm': React.CSSProperties;
        uiMicro: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        subtitle?: React.CSSProperties;
        'caption-sm'?: React.CSSProperties;
        uiMicro?: React.CSSProperties;
    }
    interface Palette {
        accentYellow: Palette['primary'];
        accentDarkBlue: Palette['primary'];
        accentBlue: Palette['primary'];
    }
    interface PaletteOptions {
        accentYellow: PaletteOptions['primary'];
        accentDarkBlue: PaletteOptions['primary'];
        accentBlue: PaletteOptions['primary'];
    }
    interface PaletteColor {
        lighter?: string;
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
    }
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        'sm-tab': true;
        tab: true;
        laptop: true;
        desktop: true;
        'lg-desktop': true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        black: true;
        'black-outline': true;
        grey: true;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle: true;
        'caption-sm': true;
        uiMicro: true;
        subtitle1: false;
        subtitle2: false;
    }
}
export declare const defaultTheme: import("@mui/material/styles").Theme;
//# sourceMappingURL=themes.d.ts.map