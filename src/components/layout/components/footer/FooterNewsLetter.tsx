import React from 'react'
import {
    FooterNewsLetterCheckBox,
    FooterNewsLetterHeader,
    FooterNewsLetterSubscribe,
} from './footerNewsLetter/index'
import { Stack } from '@mui/material'

export default function FooterNewsLetter() {
    return (
        <Stack
            sx={{
                flex: 1,
            }}
        >
            <Stack
                sx={{
                    gap: 1.5,
                    alignItems: 'flex-start',
                }}
                >
                    <FooterNewsLetterHeader />
                    <FooterNewsLetterSubscribe />
                    <FooterNewsLetterCheckBox />
            </Stack>
        </Stack>
    )
}
