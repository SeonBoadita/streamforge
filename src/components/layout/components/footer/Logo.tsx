import { alpha, Box, Stack } from '@mui/material'

export default function Logo() {
    return (
        <>
            <Stack
                direction="row"
                sx={{
                    alignItems: 'center',
                    lineHeight: "-1.5",

                }}
            >
                <Box
                    className='logo'
                    component="img"
                    src="/logo.png"
                    alt="Logo"
                    sx={{
                        width: 50,
                        height: 50,
                    }}
                ></Box>
                <Stack
                    className='logo-text'
                    sx={{
                        fontSize: '1.8rem',
                        lineHeight: 1,
                    }}
                >
                    <Box
                    sx={{
                        fontWeight: 700,
                    }}
                    >
                        StreamForge
                        <Box
                            sx={{
                                display: 'block',
                                fontSize: (theme) => theme.typography.overline,
                                lineHeight: 1,
                                marginTop: '5px',
                                color: (theme) => alpha(theme.palette.secondary.contrastText, 0.5),
                            }}
                        >
                            Watch. Create. Belong.
                        </Box>
                    </Box>

                </Stack>
            </Stack>
        </>
    )
}
