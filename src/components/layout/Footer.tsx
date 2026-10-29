import { Box, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'
import React from 'react'
import { FooterBottom, FooterBottomText, FooterBrand, FooterLinks, FooterNewsLetter } from './components/footer'

export default function Footer() {
    return (
        <>
            <Box
                sx={(theme) => ({
                    position: 'relative',
                    width: '100%',
                    minHeight: '200px',
                    backgroundColor: 'background.default',
                    boxShadow: '0 -1px 8px rgba(0, 0, 0, 0.1)',
                    color: 'text.primary',
                    overflow: 'hidden',

                    "&::before": {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        width: '100%',
                        backgroundColor: alpha(theme.palette.primary.main, 0.4),
                        display: {
                            lg: 'block',
                            md: 'block',
                            sm: 'block',
                            xs: 'block',
                        },
                    }
                })}
            >
                <Stack
                    sx={{
                        width: '100%',
                        minHeight: 'inherit',
                        padding: {
                            lg: "20px 30px",
                            md: "20px 30px",
                            sm: "0 20px",
                            xs: "0 20px",
                        },
                        gap: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Stack
                        direction={{
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column",
                        }}
                        sx={(theme) => ({
                            alignItems: 'stretch',
                            justifyContent: 'space-between',
                            width: '100%',

                            '& > *': {
                                paddingRight: {
                                    lg: 2,
                                    md: 2,
                                    sm: 0,
                                    xs: 0
                                },
                                paddingLeft: {
                                    lg: 2,
                                    md: 2,
                                    sm: 0,
                                    xs: 0
                                },
                                paddingTop: {
                                    lg: 0,
                                    md: 0,
                                    sm: 4,
                                    xs: 4
                                },
                                paddingBottom: {
                                    lg: 0,
                                    md: 0,
                                    sm: 4,
                                    xs: 4
                                },
                            },
                            '& > :not(:last-child)': {
                                borderRight: {
                                    lg: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                    md: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                    sm: 'none',
                                    xs: 'none',
                                },
                                borderBottom: {
                                    lg: 'none',
                                    md: 'none',
                                    sm: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                    xs: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                },
                            }
                        })}
                    >
                        <FooterBrand />
                        <FooterLinks />
                        <FooterNewsLetter />
                    </Stack>
                    <FooterBottom />
                </Stack>
                <FooterBottomText />
            </Box>
        </>
    )
}
