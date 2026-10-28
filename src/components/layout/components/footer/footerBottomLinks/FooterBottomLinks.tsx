import { FOOTER_LEGAL_LINKS } from '@/data'
import { Box, Stack } from '@mui/material'
import React from 'react'

export default function FooterBottomLinks() {
    return (
        <Stack
            direction="row"
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}
        >
            {
                FOOTER_LEGAL_LINKS.map((link, index) => (
                    <Box
                        key={index}
                        sx={{
                            cursor: 'pointer',
                            position: 'relative',
                            padding: '0 15px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                textDecoration: 'underline',
                            },

                            "&::before": {
                                content: '""',
                                position: 'absolute',
                                bottom: "10%",
                                left: 0,
                                height: '80%',
                                width: '1px',
                                backgroundColor: 'text.primary',
                            }
                        }}
                    >
                        {link}
                    </Box>
                ))
            }
        </Stack>
    )
}
