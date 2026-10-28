import { Box, Stack } from '@mui/material'
import FooterBrandDescription from './footerBrand/FooterBrandDiscription'
import FooterBrandSocialLinks from './footerBrand/FooterBrandSocialLinks'
import FooterBrandLogo from './footerBrand/FooterBrandLogo'

export default function FooterBrand() {
    return (
        <>
            <Stack
                sx={{
                    flex: 1,
                    gap: 1.5,
                }}
            >
                <FooterBrandLogo />
                <FooterBrandDescription />
                <FooterBrandSocialLinks />
            </Stack>
        </>
    )
}
