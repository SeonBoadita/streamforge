import { Box, Stack } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { typography } from '@/themes/typography';
export default function CommonViewAll() {
    return (
        <Stack
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s ease-in-out',
                color: 'primary.main',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                "&:hover": {
                    color: 'primary.dark',
                    gap: '0.5rem',
                }
            }}
        >
            <Box
                sx={{
                    fontSize: typography.paragraph2.fontSize,
                }}
            >View All
            </Box>
            <ArrowForwardIosOutlinedIcon
                sx={{
                    width: '0.75rem',
                    height: '0.75rem',
                }}
            />
        </Stack>
    )
}
