import React from 'react'
import { typography } from '@/themes/typography'
import { alpha, Box, Chip, Stack } from '@mui/material';

interface CategoryTabsProps {
    title: string;
    icon: React.ElementType;
    iconColor: string;
}
export default function CategoryTabs({ title, icon: Icon, iconColor }: CategoryTabsProps) {
    return (
        <Stack>
            <Chip
                icon={
                    <Icon
                        sx={{
                            width: '1rem',
                            height: '1rem',
                        }}
                    />
                }
                label={
                    <Box
                        sx={{
                            fontSize: typography.paragraph1.fontSize,
                            lineHeight: 1,
                        }}
                    >
                        {title}
                    </Box>
                }
                sx={{
                    borderRadius: '0.5rem',
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.05),
                    height: 'auto',
                    padding: '0.5rem 0.625rem',
                    cursor: 'pointer',
                    '& .MuiChip-icon': {
                        color: iconColor,
                        marginLeft: 0,
                        marginRight: '0.5rem',
                    },
                    '& .MuiChip-label': {
                        padding: 0,
                    },
                    "&:hover": {
                        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
                    },
                    "&:active": {
                        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
                        scale: 0.98,
                    }
                }}
            />
        </Stack>
    )
}
