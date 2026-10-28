import { Box } from '@mui/material'
import React from 'react'

export default function FooterBrandDescription() {
    return (
        <Box
            sx={{
                fontSize: (theme) => theme.typography.caption,
                color: (theme) => theme.palette.text.secondary,
                textAlign: 'start',
                width: '75%',
            }}
        >
            A next-gen streaming platform for creators,
            viewers, and communities. Discover amazing
            content, support creators, and be part of
            something bigger.
        </Box>
    )
}
