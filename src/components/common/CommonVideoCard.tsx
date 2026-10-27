import { Box } from '@mui/material'
import React from 'react'

interface CommonVideoCardProps {
    isCreator?: boolean;
}

export default function CommonVideoCard({isCreator = false} : CommonVideoCardProps) {
    return (
        <Box
            sx={{
                width: '100%',
                aspectRatio: isCreator ? '4/3' : '16 / 9',
                backgroundColor: 'primary.main',
                borderRadius: '0.5rem',
            }}
        >
        </Box>
    )
}
