import { CommonShortsCard, CommonVideoCard } from '@/components/common';
import { Box, Grid, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback } from 'react';

interface ContentBottomProps {
    id: string;
}

export default function ContentBottom({ id }: ContentBottomProps) {

    const tempItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    return (
        <>
            {
                id === 'live' || id === 'creators' || id === 'shorts' ? (
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            minWidth: 0,
                        }}
                    >
                        {/* Previous Button */}
                        <IconButton
                            onClick={scrollPrev}
                            sx={{
                                position: 'absolute',
                                left: '0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 2,

                                '&:hover': {
                                    backgroundColor: 'background.paper',
                                },
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>

                        {/* Embla Viewport */}
                        <Box
                            ref={emblaRef}
                            sx={{
                                overflow: 'hidden',
                                width: '100%',
                            }}
                        >
                            {/* Embla Container */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                {
                                    tempItems.map((item, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                flex:
                                                    id === 'shorts'
                                                        ? '0 0 180px'
                                                        : '0 0 250px',
                                                minWidth: 0,
                                            }}
                                        >
                                            {
                                                id === 'shorts'
                                                    ? <CommonShortsCard />
                                                    : <CommonVideoCard />
                                            }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>

                        {/* Next Button */}
                        <IconButton
                            onClick={scrollNext}
                            sx={{
                                position: 'absolute',
                                right: '0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 2,

                                '&:hover': {
                                    backgroundColor: 'background.paper',
                                },
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                ) : (
                    <Grid
                        container
                        spacing={2}
                    >
                        {
                            tempItems.map((item, index) => (
                                <Grid
                                    key={index}
                                    size={{
                                        lg: 3,
                                        md: 4,
                                        sm: 6,
                                        xs: 12,
                                    }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <CommonVideoCard />
                                </Grid>
                            ))
                        }
                    </Grid>
                )
            }
        </>
    );
}