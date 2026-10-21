import { theme } from "@/themes/themes";
import { Chip, Stack, Typography } from "@mui/material";
import React from "react";


interface CommonBadgeProps {
    icon?: React.ReactNode;
    textOne: string;
    textTwo?: string | null;
}
export default function CommonBadge({ icon = null, textOne, textTwo = null }: CommonBadgeProps) {
    return (
        <Chip
            sx={{
                backgroundColor: "transparent",
                borderRadius: "20px",
                color: "primary.main",
                border: "1px solid",
                borderColor: "primary.main",
            }}
            label={
                <Stack
                    sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {icon}

                    <Typography
                        sx={{
                            ...theme.typography.dashboard.text,
                            fontWeight: 700,
                        }}
                    >
                        {textOne}&nbsp;
                    </Typography>

                    <Typography
                        sx={{
                            ...theme.typography.dashboard.text,
                            fontWeight: 100,
                            color: "grey.400",
                        }}
                    >
                        {textTwo}
                    </Typography>
                </Stack>
            }
        />
    );
}