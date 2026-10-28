import { CommonShortsCard, CommonVideoCard } from '@/components/common';
import { alpha, Box, Grid, IconButton } from '@mui/material';
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
                        sx={(theme) => ({
                            position: 'relative',
                            width: '100%',
                            minWidth: 0,
                            '&:hover': {
                                [theme.breakpoints.up('md')]: {
                                    '.embla__prev-button': {
                                        opacity: 1,
                                        left: '0.5rem',
                                    },
                                    '.embla__next-button': {
                                        opacity: 1,
                                        right: '0.5rem',
                                    },
                                },
                            },
                        })}
                    >
                        {/* Previous Button */}
                        <IconButton
                            onClick={scrollPrev}
                            className="embla__prev-button"
                            sx={{
                                position: 'absolute',
                                left: {
                                    lg: '0rem',
                                    md: '0rem',
                                    sm: '0.5rem',
                                    xs: '0.5rem',
                                },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 2,
                                '&:hover': {
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.background.paper, 0.8),
                                },
                                opacity: {
                                    lg: 0,
                                    md: 0,
                                    sm: 1,
                                    xs: 1,
                                },
                                transition: 'all 0.5s, left 0.3s',
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
                                                    : <CommonVideoCard
                                                        isCreator={id === 'creators' ? true : false}
                                                    />
                                            }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>

                        {/* Next Button */}
                        <IconButton
                            onClick={scrollNext}
                            className="embla__next-button"
                            sx={{
                                position: 'absolute',
                                right: {
                                    lg: '0rem',
                                    md: '0rem',
                                    sm: '0.5rem',
                                    xs: '0.5rem',
                                },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 2,
                                '&:hover': {
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.background.paper, 0.8),
                                },
                                opacity: {
                                    lg: 0,
                                    md: 0,
                                    sm: 1,
                                    xs: 1,
                                },
                                transition: 'all 0.5s, right 0.3s',
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                ) : <Grid
                    container
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: 2,
                    }}
                >
                    {tempItems.map((item, index) => (
                        <Grid key={index}>
                            <CommonVideoCard />
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    );
}