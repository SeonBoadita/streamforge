import { Box, Stack } from '@mui/material'

export default function Logo() {
    return (
        <>
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
                        width: 35,
                        height: 35,
                    }}
                ></Box>
                <Box
                    className='logo-text'
                    component="h4"
                    sx={{
                        display: {
                            sm: "inline",
                            xs: "none",
                        }
                    }}
                >
                    <Box
                    sx={{
                        display: 'inline',
                        fontWeight: 400,
                    }}
                    >
                        Stream
                    </Box>
                    Forge
                </Box>
            </Stack>
        </>
    )
}
