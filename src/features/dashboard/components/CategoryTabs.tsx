import React from 'react'
import { typography } from '@/themes/typography'
import { alpha, Box, Stack } from '@mui/material';

interface CategoryTabsProps {
    title: string;
    icon: React.ElementType;
    iconColor: string;
}
export default function CategoryTabs({ title, icon: Icon, iconColor }: CategoryTabsProps) {
    return (
        <Stack>
            <Stack
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: "0.5rem",
                    borderRadius: '0.5rem',
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.05),
                    padding: '0.5rem 0.625rem',
                    cursor: 'pointer',
                    "&:hover": {
                        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
                    },
                    "&:active": {
                        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
                        scale: 0.98,
                    }
                }}
            >
                <Box
                    sx={{
                        width: '1rem',
                        height: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: iconColor,
                    }}
                >
                    <Icon
                        sx={{
                            width: '1rem',
                            height: '1rem',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        fontSize: typography.paragraph1.fontSize,
                        lineHeight: 1,
                    }}
                >
                    {title}
                </Box>
            </Stack>
        </Stack>
    )
}
