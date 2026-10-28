import { FOOTER_SOCIAL_ITEMS } from '@/data'
import { Box, Stack } from '@mui/material'
import React from 'react'

export default function FooterBrandSocialLinks() {
    return (
        <Stack
            direction="row"
            sx={{
                flexWrap: 'wrap',
                gap: {
                    lg: 3.2,
                    md: 1.5,
                    sm: 1.5,
                    xs: 1.5,
                },
            }}
        >
            {FOOTER_SOCIAL_ITEMS.map(({ name, icon: Icon }) => (
                <Box
                    key={name}
                    component={Icon}
                    aria-label={name}
                    sx={{
                        backgroundColor: (theme) => theme.palette.grey[800],
                        cursor: 'pointer',
                        borderRadius: '8px',
                        padding: 1,
                        width: 34,
                        height: 34,
                    }}
                />
            ))}
        </Stack>
    )
}
