'use client'

import { CONTENT_SECTION_DATA } from '@/data'
import { BOTTOM_NAV_HEIGHT } from '@/constants'
import { Box, Stack } from '@mui/material'
import React from 'react'
import ContentSection from './ContentSection'
import CategorySection from './CategorySection'
export default function DashboardContent() {
    return (
        <Stack
            component="main"
            spacing={5}
            sx={{
                minHeight: '100vh',
                width: '100%',
                padding: "2rem",
                paddingBottom: {
                    xs: `calc(2rem + ${BOTTOM_NAV_HEIGHT}px)`,
                    sm: `calc(2rem + ${BOTTOM_NAV_HEIGHT}px)`,
                    md: "2rem",
                    lg: "2rem",
                },
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

            <CategorySection />
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