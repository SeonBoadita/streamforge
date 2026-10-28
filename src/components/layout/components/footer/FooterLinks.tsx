import { Stack } from '@mui/material'
import React from 'react'
import FooterLinksData from './footerLinks/FooterLinksData'

export default function FooterLinks() {
    return (
        <Stack
            sx={{
                flex: 1,
                width: '100%',
            }}
        >
            <Stack
                direction="row"
                sx={{
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <FooterLinksData />
            </Stack>
        </Stack>
    )
}
