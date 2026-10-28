import { FOOTER_LINK_ITEMS } from '@/data'
import { theme } from '@/themes/themes'
import { alpha, Box, Stack } from '@mui/material'
import React from 'react'

export default function FooterLinksData() {
    return (
        <>
            {
                FOOTER_LINK_ITEMS.map((item, index) => {
                    return (
                        <Stack
                            key={index}
                            sx={{
                                flex: 1,
                                gap: 1.5,
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    ...theme.typography.footer.overline,
                                    color: alpha(theme.palette.secondary.contrastText, 0.4),
                                    fontWeight: 100,
                                })}
                            >
                                {item.title}
                            </Box>
                            <Stack
                                sx={{
                                    fontSize: (theme) => theme.typography.paragraph2.fontSize,
                                    gap: 1.3,
                                }}
                            >
                                {
                                    item.links.map((link, linkIndex) => {
                                        return (
                                            <Box
                                                key={linkIndex}
                                                sx={{
                                                    fontWeight: 100,
                                                    whiteSpace: 'nowrap',
                                                    color: alpha(theme.palette.secondary.contrastText, 0.7),
                                                }}
                                            >
                                                {link}
                                            </Box>
                                        )
                                    })
                                }

                            </Stack>
                        </Stack>
                    )
                })
            }
        </>
    )
}
