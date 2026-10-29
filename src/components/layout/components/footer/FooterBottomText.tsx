import { theme } from '@/themes/themes'
import { alpha, Box } from '@mui/material'
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

export default function FooterBottomText() {
    return (
        <Box
            aria-hidden
            sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',

                width: '100%',
                textAlign: 'center',

                fontFamily: anton.style.fontFamily,
                fontSize: {
                    lg: 'clamp(5rem, 12rem, 20rem)',
                    md: 'clamp(4rem, 8rem, 16rem)',
                    sm: 'clamp(3rem, 6rem, 12rem)',
                    xs: 'clamp(2.5rem, 4rem, 10rem)',
                },
                letterSpacing: {
                    lg: '0.165em',
                    md: '0.1em',
                    sm: '0.1em',
                    xs: '0.02em',
                },
                fontWeight: 900,
                lineHeight: 0.8,
                whiteSpace: 'nowrap',

                background: `linear-gradient(to bottom,${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
            }}
        >
            STREAMFORGE
        </Box>
    )
}
