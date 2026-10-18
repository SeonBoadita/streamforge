"use client";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "@/themes/themes";
export default function Provider({children} : {children: React.ReactNode}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
