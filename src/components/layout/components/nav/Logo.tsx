import { Box, Stack } from '@mui/material'
import { typography } from '@/themes/typography'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Go to home"
            style={{
                display: 'inline-flex',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <Stack
                direction="row"
                sx={{
                    alignItems: 'center',
                }}
            >
                <Box
                    className='logo'
                    component="img"
                    src="/logo.png"
                    alt="Logo"
                    sx={{
                        width: {
                            lg: 35,
                            md: 35,
                            sm: 35,
                            xs: 40
                        },
                        height: {
                            lg: 35,
                            md: 35,
                            sm: 35,
                            xs: 40
                        },
                    }}
                ></Box>
                <Box
                    className='logo-text'
                    sx={{
                        fontSize: '1rem',
                        display: {
                            sm: "inline",
                            xs: "none",
                        }
                    }}
                >
                    <Box
                    sx={{
                        display: 'inline',
                        ...typography.nav.brand,
                    }}
                    >
                        Stream
                    </Box>
                    Forge
                </Box>
            </Stack>
        </Link>
    )
}
