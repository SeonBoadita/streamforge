import { CommonShortsCard, CommonVideoCard } from '@/components/common';
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'

interface ContentBottomProps {
    id: string;
}

export default function ContentBottom({ id }: ContentBottomProps) {

    const tempItems = [1,1,1,1,1,1,1,1,1,1,1];

    return (
        <>
        {
            id === "live"|| id === "creators" || id === "shorts" ? (
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
                }}
            >
                {
                    tempItems.map((item, index)=>{
                        return (
                            <Box
                            key={index}
                            sx={{
                                flex: id === 'shorts' ? '0 0 180px' : '0 0 250px',
                            }}
                            >
                                {
                                    id === "shorts" ? <CommonShortsCard /> : <CommonVideoCard />
                                }
                            </Box>
                        )
                    })
                }
            </Stack>
            ) : (
                <Grid
                container
                spacing={2}
                >
                    {
                        tempItems.map((item, index)=>{
                            return (
                                <Grid
                                key={index}
                                size={{
                                    lg: 3,
                                    md: 4,
                                    sm: 6,
                                    xs: 12
                                }}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                >
                                    <CommonVideoCard />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )
        }

        </>
    )
}
