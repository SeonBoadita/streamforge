"use client";

import { Box, Tooltip, type TooltipProps } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

interface CommonToolPickerProps {
    name: ReactNode;
    children: ReactElement;
    placement?: TooltipProps['placement'];
    disabled?: boolean;
}

export default function CommonToolPicker({
    name,
    children,
    placement = 'right',
    disabled = false,
}: CommonToolPickerProps) {
    return (
        <Tooltip
            title={name}
            placement={placement}
            arrow
            enterDelay={300}
            disableHoverListener={disabled}
            disableFocusListener={disabled}
            disableTouchListener={disabled}
        >
            <Box sx={{ display: 'block', width: '100%' }}>
                {children}
            </Box>
        </Tooltip>
    );
}
