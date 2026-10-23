import { theme } from '@/themes/themes';
import { alpha, Box } from '@mui/material';
import React from 'react';

type ResponsiveBoolean = {
    lg: boolean;
    md: boolean;
    sm: boolean;
    xs: boolean;
};

interface CommonCarouselDotsProps {
    currentActiveIndex?: number;
    count?: number;
    isHorizontal: ResponsiveBoolean;
}

export default function CommonCarouselDots({
    currentActiveIndex = 0,
    count = 0,
    isHorizontal,
}: CommonCarouselDotsProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: alpha(theme.palette.primary.main, 0.5),
                        transition: 'all 0.3s ease',
                        borderRadius: '50%',
                        ...currentActiveIndex === index && {
                            width: {
                                lg: isHorizontal.lg ? '20px' : '10px',
                                md: isHorizontal.md ? '20px' : '10px',
                                sm: isHorizontal.sm ? '20px' : '10px',
                                xs: isHorizontal.xs ? '20px' : '10px',
                            },
                            height: {
                                lg: isHorizontal.lg ? '10px' : '20px',
                                md: isHorizontal.md ? '10px' : '20px',
                                sm: isHorizontal.sm ? '10px' : '20px',
                                xs: isHorizontal.xs ? '10px' : '20px',
                            },
                            borderRadius: {
                                lg: isHorizontal.lg ? '20px' : '5px',
                                md: isHorizontal.md ? '20px' : '5px',
                                sm: isHorizontal.sm ? '20px' : '5px',
                                xs: isHorizontal.xs ? '20px' : '5px',
                            },
                            backgroundColor: 'primary.main',
                        },
                    }}
                />
            ))}
        </>
    );
}
