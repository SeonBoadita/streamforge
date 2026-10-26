import React from 'react'
import { CommonViewAll } from '@/components/common'
import { typography } from '@/themes/typography'
import { alpha, Box, Stack } from '@mui/material'


interface ContentTopProps {
    id: string,
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor: string;
}

export default function ContentTop({ id, title, description, icon: Icon, iconColor }: ContentTopProps) {
    return (
        <Stack>
            <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        minWidth: 0,
                        flex: 1,
                    }}
                >
                    <Stack
                        sx={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                        }}
                    >
                        <Box sx={{ color: iconColor }}>
                            <Icon />
                        </Box>
                        <Box>
                            <Stack
                                sx={{
                                    fontSize: typography.heading5.fontSize,
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    maxWidth: {
                                        lg: '90%',
                                        md: '90%',
                                        sm: '90%',
                                        xs: '80%',
                                    },
                                }}
                            >{title}
                            </Stack>
                            <Stack
                                sx={{
                                    fontSize: typography.paragraph2.fontSize,
                                    letterSpacing: "0.5px",
                                    maxWidth: {
                                        lg: '90%',
                                        md: '90%',
                                        sm: '90%',
                                        xs: '90%',
                                    },
                                    color: (theme) => alpha(theme.palette.text.secondary, 0.9),
                                }}
                            >{description}
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                {
                    id !== "videos" ? (
                        <CommonViewAll />
                    ) : null
                }
            </Stack>
        </Stack>
    )
}
