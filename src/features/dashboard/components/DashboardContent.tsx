'use client'

import { CATEGORY_DATA, CONTENT_SECTION_DATA } from '@/data'
import { Box, Stack } from '@mui/material'
import React from 'react'
import ContentSection from './ContentSection'
import CategoryTabs from './CategoryTabs'
export default function DashboardContent() {
    return (
        <Stack
            component="main"
            spacing={5}
            sx={{
                minHeight: '100vh',
                width: '100%',
                padding: "2rem",
                backgroundColor: 'background.surface',
                color: 'text.primary',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            }}
        >
            {/* Content Sections
            Categories - horizontal flex (wrap)
            Live - horizontal flex (scroll)
            Shorts - lg/md: horizontal flex (scroll), sm/xs: grid (vertical)
            Creators - horizontal flex (scroll)
            Videos - grid (vertical)
        */}

            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    minWidth: 0,
                    gap: '1rem',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '& > *': {
                        flex: '0 0 auto',
                    },
                }}
            >
                {CATEGORY_DATA.map((category) => (
                    <CategoryTabs
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        iconColor={category.iconColor}
                    />
                ))}
            </Box>
            {
                CONTENT_SECTION_DATA.map((section, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                "&::before": {
                                    content: '""',
                                    display: 'block',
                                    height: '1px',
                                    backgroundColor: 'divider',
                                    marginBottom: '1rem',
                                }
                            }}
                        >
                            <ContentSection
                                id={section.id}
                                title={section.title}
                                description={section.description}
                                icon={section.icon}
                                iconColor={section.iconColor}
                            />
                        </Box>
                    )
                })
            }
        </Stack>
    )
}