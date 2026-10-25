import { CommonViewAll } from '@/components/common'
import { typography } from '@/themes/typography'
import { alpha, Box, Stack } from '@mui/material'
import React from 'react'

interface ContentSectionProps {
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor: string;
}

export default function ContentSection({ title, description, icon: Icon, iconColor }: ContentSectionProps) {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Stack
                spacing={1.5}
            >
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
                        <CommonViewAll />
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        width: '100%',
                        minWidth: 0,
                        maxHeight: '400px',
                        flexDirection: 'row',
                        gap: '1rem',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '& > *': {
                            flex: '0 0 250px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            height: '150px',
                            backgroundColor: 'primary.main',
                            borderRadius: '0.5rem',
                        }}
                    >
                    </Box>

                </Stack>
            </Stack>
        </Box>
    )
}
