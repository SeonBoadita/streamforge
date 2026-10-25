import { Box, Stack } from '@mui/material'
import React from 'react'
import Hero from './components/Hero'
import DashboardContent from './components/DashboardContent'

export default function Dashboard() {
    return (
        <>
            <Stack
                sx={{
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Hero />
                </Box>
                <Box sx={{ width: '100%', height: '100%' }}>
                    <DashboardContent />
                </Box>
            </Stack>
        </>
    )
}
