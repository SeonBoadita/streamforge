import { alpha, Box, Checkbox, Stack } from '@mui/material'
import React from 'react'

export default function FooterNewsLetterCheckBox() {
    return (
        <Stack
            direction="row"
            sx={{
                gap: 0.5,
                alignItems: 'center',
            }}
        >
            <Checkbox
                sx={{
                    padding: 0,
                    transform: 'scale(0.8)',
                    transformOrigin: 'left center',
                }}
            />
            <Box
                sx={(theme) => ({
                    ...theme.typography.paragraph2,
                    color: alpha(theme.palette.secondary.contrastText, 0.6),
                    lineHeight: 1.4,
                })}
            >
                I agree to receive emails from StreamForge.
            </Box>
        </Stack>
    )
}
