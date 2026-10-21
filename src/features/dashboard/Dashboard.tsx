import { Box, Stack } from '@mui/material'
import React from 'react'
import Hero from './components/Hero'

export default function Dashboard() {
    return (
        <>
        <Stack
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            overflowX: 'hidden',
        }}
        >
            <Box>
                <Hero />
            </Box>
        </Stack>
        </>
    )
}
