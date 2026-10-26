import { CATEGORY_DATA } from '@/data';
import { alpha, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useCallback, useRef } from 'react';
import CategoryTabs from './CategoryTabs';

export default function CategorySection() {
    const categoryRef = useRef<HTMLDivElement | null>(null);

    const scrollCategories = useCallback((direction: number) => {
        categoryRef.current?.scrollBy({
            left: direction * (categoryRef.current.clientWidth * 0.75),
            behavior: 'smooth',
        });
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                minWidth: 0,
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    sm: '2rem minmax(0, 1fr) 2rem',
                },
                alignItems: 'center',
                gap: '0.5rem',
            }}
        >
            <IconButton
                aria-label="Previous categories"
                onClick={() => scrollCategories(-1)}
                sx={{
                    width: '2rem',
                    height: '2rem',
                    display: {
                        xs: 'none',
                        sm: 'inline-flex',
                    },
                    borderRadius: '0.25rem',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: (theme) =>
                            alpha(theme.palette.background.paper, 0.8),
                    },
                }}
            >
                <ArrowBackIosNewIcon sx={{ width: '0.875rem', height: '0.875rem' }} />
            </IconButton>

            <Box
                ref={categoryRef}
                sx={{
                    overflow: 'hidden',
                    width: '100%',
                    minWidth: 0,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    touchAction: 'pan-x',
                    userSelect: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '0.75rem',
                        width: 'max-content',
                    }}
                >
                    {CATEGORY_DATA.map((category) => (
                        <Box key={category.id} sx={{ flex: '0 0 auto' }}>
                            <CategoryTabs
                                title={category.title}
                                icon={category.icon}
                                iconColor={category.iconColor}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <IconButton
                aria-label="Next categories"
                onClick={() => scrollCategories(1)}
                sx={{
                    width: '2rem',
                    height: '2rem',
                    display: {
                        xs: 'none',
                        sm: 'inline-flex',
                    },
                    borderRadius: '0.25rem',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: (theme) =>
                            alpha(theme.palette.background.paper, 0.8),
                    },
                }}
            >
                <ArrowForwardIosIcon sx={{ width: '0.875rem', height: '0.875rem' }} />
            </IconButton>
        </Box>
    );
}
