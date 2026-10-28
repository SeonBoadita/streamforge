import { CommonButton } from '@/components/common'
import { alpha, Box, Stack } from '@mui/material'
import React from 'react'

export default function FooterNewsLetterSubscribe() {
    return (
        <Stack
            sx={{
                width: '100%',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <Box
                component="input"
                placeholder='Enter your email'
                sx={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: (theme) => `1px solid ${alpha(theme.palette.secondary.contrastText, 0.4)}`,
                    backgroundColor: 'background.paper',
                    fontSize: (theme) => theme.typography.paragraph1.fontSize,
                    color: (theme) => alpha(theme.palette.secondary.contrastText, 0.8),
                    '&:focus': {
                        outline: 'none',
                        border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 1)}`,
                    },
                    '&:focus::placeholder': (theme) => ({
                        color: alpha(theme.palette.primary.main, 0.5),
                    }),
                }}
            />
            <Box sx={{ width: '100%' }}>
                <CommonButton
                    text="Subscribe"
                    borderRadius="8px"
                />
            </Box>
        </Stack>
    )
}
