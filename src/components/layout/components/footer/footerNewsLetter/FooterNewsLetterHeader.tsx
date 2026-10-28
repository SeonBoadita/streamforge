import { alpha, Box } from '@mui/material'
import React from 'react'

export default function FooterNewsLetterHeader() {
    return (
        <>
            <Box
                sx={(theme) => ({
                    ...theme.typography.footer.overline,
                    color: alpha(theme.palette.secondary.contrastText, 0.4),
                    fontWeight: 100,
                })}

            >STAY IN THE LOOP
            </Box>
            <Box
                sx={(theme) => ({
                    ...theme.typography.paragraph2,
                    color: alpha(theme.palette.secondary.contrastText, 0.6),
                })}
            >
                Get the latest updates, creators stories, and features delivered to your inbox.
            </Box>
        </>
    )
}
