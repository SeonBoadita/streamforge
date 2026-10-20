"use client";

import { Box, IconButton, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { CommonMenu } from "@/components/layout/components/nav";

export default function Profile() {
    const valueFromStore = "Seon";
    const urlFromStore = null;

    const profileAlphabet = valueFromStore.charAt(0);

    const isAlphabet = /^[A-Za-z]$/.test(profileAlphabet);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={(e) => handleProfileClick(e)}>
                <Stack
                    sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        width: 35,
                        height: 35,
                        border: "1px solid",
                        borderColor: "primary.main",
                        fontSize: 15,
                        overflow: "hidden",
                    }}
                >
                    {urlFromStore ? (
                        <Box
                            component="img"
                            src={urlFromStore}
                            alt="Profile"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    ) : isAlphabet ? (
                        profileAlphabet
                    ) : (
                        <AccountCircleIcon />
                    )}
                </Stack>
            </IconButton>

            <CommonMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
                width="200px"
                menuName="profile"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                items={[
                    {
                        label: "Profile",
                        icon: <AccountCircleIcon />,
                        onClick: () => console.log("Profile"),
                    },
                    {
                        label: "Settings",
                        icon: <SettingsIcon />,
                        onClick: () => console.log("Settings"),
                    },
                    {
                        label: "Logout",
                        icon: <LogoutIcon />,
                        onClick: () => console.log("Logout"),
                        type: "danger",
                    },
                ]}
            />
        </>
    );
}