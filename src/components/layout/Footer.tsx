import { Box, Stack } from '@mui/material'
import React from 'react'
import { Logo } from './components/footer'
import { FOOTER_SOCIAL_ITEMS } from '@/data'

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '200px',
                    backgroundColor: 'background.default',
                    boxShadow: '0 -1px 8px rgba(0, 0, 0, 0.1)',
                    color: 'text.primary',


                    "&::before": {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        width: '100%',
                        backgroundColor: 'divider',
                    }
                }}
            >
                <Stack
                    sx={{
                        width: '100%',
                        minHeight: 'inherit',
                        padding: "20px 30px",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Stack
                        direction={{
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column",
                        }}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            gap: 4,

                            '& > :not(:last-child)': {
                                borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                                paddingRight: 4,
                            },
                            '& > :not(:first-child)': {
                                paddingLeft: 4,
                            }
                        }}
                    >
                        <Stack
                            sx={{
                                flex: 1,
                                gap: 1.5,
                            }}
                        >
                            <Stack>
                                <Box>
                                    <Logo />
                                </Box>
                            </Stack>
                            <Box
                                sx={{
                                    fontSize: (theme) => theme.typography.caption,
                                    color: (theme) => theme.palette.text.secondary,
                                    textAlign: 'justify',
                                }}
                            >
                                A next-gen streaming platform for creators,
                                viewers, and communities. Discover amazing
                                content, support creators, and be part of
                                something bigger.
                            </Box>
                            <Stack
                                direction="row"
                                sx={{
                                    gap: 3,
                                }}
                            >
                                {FOOTER_SOCIAL_ITEMS.map(({ name, icon: Icon }) => (
                                    <Box
                                        key={name}
                                        component={Icon}
                                        aria-label={name}
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.grey[800],
                                            cursor: 'pointer',
                                            borderRadius: '8px',
                                            padding: 1,
                                            width: 34,
                                            height: 34,
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Stack>

                        <Stack
                            sx={{
                                flex: 1,
                            }}
                        >
                            Two
                        </Stack>
                        <Stack
                            sx={{
                                flex: 1,
                            }}
                        >
                            Three
                        </Stack>
                    </Stack>
                    <Stack>
                        Hello, I am Seonbin Kim. I am a
                    </Stack>
                </Stack>
                {/* <Image
                src="/images/streamforge-logo.svg"
                alt="StreamForge Logo"
                width={100}
                height={50}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                }} 
                ></Image> */}
            </Box>
        </>
    )
}
