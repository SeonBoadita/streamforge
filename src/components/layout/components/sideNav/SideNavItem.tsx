"use client";

import { alpha, Box, IconButton, Stack } from '@mui/material'

interface SideNavItemProps {
    isExpanded: boolean;
    onToggle: () => void;
    name: string;
    icon: React.ReactNode;
    iconToggle?: React.ReactNode;
}

export default function SideNavItem({ isExpanded, onToggle, name, icon, iconToggle }: SideNavItemProps) {
    return (
        <Stack
            onClick={name === 'Collapse' ? onToggle : undefined}
            sx={(theme) => ({
                alignItems: 'center',
                cursor: 'pointer',
                justifyContent: isExpanded ? 'flex-start' : 'center',
                gap: isExpanded ? 1 : 0,
                flexDirection: 'row',
                width: '100%',
                minWidth: 0,
                minHeight: 40,
                position: 'relative',
                borderRadius: 2,
                transition: 'background-color 0.15s ease-in-out',
                "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
                "&::before": {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '4px',
                    height: '100%',
                    borderTopLeftRadius: 2,
                    borderBottomLeftRadius: 2,
                    backgroundColor: theme.palette.primary.main,
                    opacity: 0,
                    transition: 'opacity 0.15s ease-in-out',
                },
                "&:hover::before": {
                    opacity: 1,
                },
            })}
        >
            <IconButton
                type="button"
                aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
                aria-expanded={isExpanded}
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    flexShrink: 0,
                    width: isExpanded ? undefined : 40,
                    height: isExpanded ? undefined : 40,
                }}
            >
                {name === 'Collapse' && isExpanded && iconToggle ? iconToggle : icon}
            </IconButton>
            <Box
                sx={(theme) => ({
                    color: 'text.primary',
                    ...theme.typography.paragraph1,
                    opacity: isExpanded ? 1 : 0,
                    visibility: isExpanded ? 'visible' : 'hidden',
                    width: isExpanded ? 'auto' : 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.15s ease-in-out, visibility 0.15s ease-in-out',
                })}
            >
                {name}
            </Box>
        </Stack>
    )
}
