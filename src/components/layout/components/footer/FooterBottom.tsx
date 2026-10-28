import { Box, Stack } from '@mui/material'
import { FooterBottomLinks } from './footerBottomLinks'
import FooterBottomLanguage from './footerBottomLinks/FooterBottomLanguage'

export default function FooterBottom() {
    return (
        <Stack
            direction={{
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
            }}
            sx={{
                gap: 1,
                width: '100%',
                justifyContent: {
                    lg: 'space-between',
                    md: 'center',
                    sm: 'center',
                    xs: 'center',
                },
                alignItems: {
                    lg: 'center',
                    md: 'center',
                    sm: 'center',
                    xs: 'center',
                },
                fontSize: (theme) =>
                    theme.typography.footer.overline.fontSize,
            }}
        >
            <Box>
                &copy; 2023 StreamForge. All rights reserved.
            </Box>

            <FooterBottomLinks />

            <FooterBottomLanguage />
        </Stack>
    )
}