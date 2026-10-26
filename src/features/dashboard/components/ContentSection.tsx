
import { Box, Stack } from '@mui/material';
import React from 'react'
import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';

interface ContentSectionProps {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor: string;
}

export default function ContentSection({ id, title, description, icon: Icon, iconColor }: ContentSectionProps) {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Stack
                spacing={1.5}
            >
                <ContentTop
                    id={id}
                    title={title}
                    description={description}
                    icon={Icon}
                    iconColor={iconColor}
                />
                <ContentBottom
                    id={id}
                />
            </Stack>
        </Box>
    )
}
