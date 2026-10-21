import { CommonButton } from '@/components/common'
import CommonBadge from '@/components/common/CommonBadge'
import { Box, Stack } from '@mui/material'
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from 'react'
import { theme } from '@/themes/themes';
import CommonCarouselDots from '@/components/common/CommonCarouselDots';

export default function Hero() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'primary.contrastText',
                    color: 'white',
                    padding: {
                        lg: '2rem 4rem',
                        md: '2rem 4rem',
                        sm: '2rem',
                        xs: '1.25rem',
                    },
                    textAlign: 'center',
                    width: '100vw',
                }}
            >
                <Stack
                sx={{
                    flexDirection: {
                        lg: 'row',
                        md: 'row',
                        sm: 'row',
                        xs: 'column',
                    },
                    gap: 3,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                >
                    <Stack
                    sx={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: 1.5,
                        flex: {
                            lg: 1,
                            md: 2,
                            sm: 2,
                            xs:1
                        },
                    }}
                    >
                        <Box>
                            <CommonBadge icon={<LocalFireDepartmentIcon
                            sx={{
                                ...theme.typography.dashboard.title,
                                color: 'warning.dark',
                            }}
                            />} 
                            textOne="TRENDING" textTwo="NOW" />
                        </Box>
                        <Box
                        sx={{
                            ...theme.typography.dashboard.heroTitle,
                            textAlign: 'left',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            width: {
                                lg: '80%',
                                md: '60%',
                                sm: '70%',
                            }
                        }}
                        >
                            Explore What&apos;s <span
                            style={{
                                color: '#8FAE25',
                            }}
                            >Trending</span> Right Now
                        </Box>
                        <Box
                        sx={{
                            ...theme.typography.dashboard.text,
                            textAlign: 'left',
                            width: {
                                lg: '100%',
                                md: '70%',
                                sm: '80%',
                                xs: '60%',
                            }
                        }}
                        >
                            Discover the hottest categories, live streams, amazing creators, and a global community - all in one place.
                        </Box>
                        <Box>
                            <CommonButton
                            endIcon={<ChevronRightIcon />}
                            endIconEnabled = {true}
                                text="Explore Categories"
                            />
                        </Box>
                    </Stack>


                    <Stack
                    sx={{
                        flex: {
                            lg: 2,
                            md:1,
                            sm:1,
                            xs: 0
                        },
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        gap: 1.4,
                        flexDirection: {
                            lg: 'column',
                            md: 'column',
                            sm: 'column',
                            xs: 'row',
                        },
                    }}
                    >
                        <CommonCarouselDots
                        currentActiveIndex={1}
                        count={5}
                        isHorizontal={{
                            lg: false,
                            md: false,
                            sm: false,
                            xs: true
                        }}
                        />
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
