import React from 'react'
import { BOTTOM_NAV_ITEMS } from '@/data'
import { Box, IconButton, Stack } from '@mui/material'

const getFontSize = (fontSize: unknown): string | number | undefined =>
    typeof fontSize === 'string' || typeof fontSize === 'number' ? fontSize : undefined

export default function BottomNavItems() {
    return (
        <>
        {BOTTOM_NAV_ITEMS.map((item) => {
                    const IconComponent = item.icon
                    return (
                        <Box key={item.name}>
                            <Stack
                                spacing={0}
                                sx={(theme) => {
                                    const fontSize = {
                                        sm: getFontSize(theme.typography.paragraph1.fontSize),
                                        xs: getFontSize(theme.typography.paragraph2.fontSize),
                                    }

                                    return {
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize,
                                    }
                                }}
                            >
                                <IconButton sx={{ p: '4px' }}>
                                    <IconComponent />
                                </IconButton>
                                <Box
                                    sx={(theme) => ({
                                        fontSize: {
                                            sm: getFontSize(theme.typography.paragraph1.fontSize),
                                            xs: getFontSize(theme.typography.paragraph2.fontSize),
                                        },
                                    })}
                                >
                                    {item.name === 'Create' ? '' : item.name}
                                </Box>
                            </Stack>
                        </Box>
                    )
                })}
        </>
    )
}
