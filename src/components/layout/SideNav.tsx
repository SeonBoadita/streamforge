import { Box, Stack } from '@mui/material'
import type { Dispatch, SetStateAction } from 'react'
import {
    NAVBAR_HEIGHT,
    SIDENAV_COLLAPSED_WIDTH,
    SIDENAV_EXPANDED_WIDTH,
} from '@/constants'

import { SideNavItem } from './components/sideNav';
import { SIDE_NAV_ITEMS } from '@/data';
import { CommonToolPicker } from '@/components/common';

interface SideNavProps {
    isExpanded: boolean;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function SideNav({ isExpanded, setIsExpanded }: SideNavProps) {
    return (
        <>
            <Stack
                component="nav"
                aria-label="Sidebar navigation"
                sx={{
                    padding: "15px 5px",
                    position: 'fixed',
                    width: isExpanded
                        ? `${SIDENAV_EXPANDED_WIDTH}px`
                        : `${SIDENAV_COLLAPSED_WIDTH}px`,
                    top: NAVBAR_HEIGHT,
                    left: 0,
                    height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                    backgroundColor: 'primary.contrastText',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 3,
                    zIndex: 1,
                    transition: "width 0.3s ease-in-out",
                    color: 'text.primary',
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                    }
                }}
            >
                <Stack
                    spacing={1}
                    sx={{
                        alignItems: 'stretch',
                        justifyContent: 'flex-start',
                        width: '100%',
                    }}
                >
                    {
                        SIDE_NAV_ITEMS.map((section, index) => {
                            return (
                                <Box
                                    key={index}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            rowGap: 1,
                                            marginTop: index === 0 ? 0 : 1,

                                            "&::after": {
                                                content: '""',
                                                display: 'block',
                                                width: '100%',
                                                opacity: 0.1,
                                                height: '1px',
                                                backgroundColor: '#ffffff',
                                                marginTop: 1,
                                            }
                                        }}
                                    >
                                        <Stack spacing={2}>
                                            {section.items.map((item) => (
                                                <Box key={item.name}>
                                                    <CommonToolPicker
                                                        name={item.name}
                                                        disabled={isExpanded || item.name === 'Collapse'}
                                                    >
                                                        <SideNavItem
                                                            isExpanded={isExpanded}
                                                            onToggle={() => setIsExpanded((expanded) => !expanded)}
                                                            name={item.name}
                                                            icon={<item.icon />}
                                                            iconToggle={
                                                                'iconToggle' in item
                                                                    ? <item.iconToggle />
                                                                    : undefined
                                                            }
                                                        />
                                                    </CommonToolPicker>
                                                </Box>

                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            )
                        })
                    }

                </Stack>
            </Stack>
        </>
    )
}
