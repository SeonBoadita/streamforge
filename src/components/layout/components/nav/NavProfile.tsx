import { Box, Stack } from '@mui/material'
import React from 'react'

export default function NavProfile() {

    const nameFromRedux = "Seon";
    const emailFromRedux = "seonboadit@gmail.com"
    return (
        <>
            <Stack
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: 35,
                    height: 35,
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                    color: "primary.main",
                    fontSize: 15,
                }}
            >
                S
            </Stack>

            <Box
                sx={{
                    minWidth: 0,
                    flex: 1,
                    ml: 1,
                }}
            >
                <Stack
                    sx={{
                        alignItems: "flex-start",
                        justifyContent: "center",
                        minWidth: 0,
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {nameFromRedux}
                    </Box>

                    <Box
                        component="span"
                        sx={{
                            fontSize: 12,
                            color: "text.secondary",
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {emailFromRedux}
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
