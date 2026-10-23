"use client";

import { Box, Stack } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavProfile from "./NavProfile";
import { RefObject, useEffect, useRef } from "react";
import { typography } from "@/themes/typography";
import { NAVBAR_HEIGHT } from "@/constants";

interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    menuTriggerRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    menuTriggerRef
}: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !menuTriggerRef.current?.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen, menuTriggerRef, setIsMobileMenuOpen]);

    return (
        <>
            {isMobileMenuOpen && (
                <Stack
                ref={menuRef}
                    spacing={1}
                    sx={{
                        alignItems: "stretch",
                        justifyContent: "center",
                        backgroundColor: "primary.contrastText",
                        color: "text.primary",
                        position: "absolute",
                        ...typography.nav.item,
                        top: `${NAVBAR_HEIGHT + 10}px`,
                        right: "20px",
                        borderRadius: "8px",
                        width: "260px",
                        padding: "10px",
                        zIndex: 2,

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "-6px",
                            right: "15px",
                            width: "12px",
                            height: "12px",
                            rotate: "45deg",
                            backgroundColor: "primary.contrastText",
                            zIndex: 1,
                        }
                    }}
                >
                    {/* Profile */}
                    <Stack
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            p: 1,
                            position: "relative",
                            minWidth: 0,
                            width: "100%",
                            boxSizing: "border-box",

                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                height: "1px",
                                width: "100%",
                                backgroundColor: "primary.main",
                            },
                        }}
                    >
                        <NavProfile />

                        <ArrowForwardIosIcon
                            sx={{
                                fontSize: 14,
                                color: "text.secondary",
                            }}
                        />
                    </Stack>

                    {/* Notifications */}
                    <Stack
                        direction="row"
                        sx={{
                            p: 1,
                            width: "100%",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            alignItems: "center",
                            justifyContent: "space-between",

                            "&:hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <NotificationsNoneOutlinedIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />

                            <Box>
                                Notifications
                            </Box>
                        </Stack>

                        <ArrowForwardIosIcon
                            sx={{
                                fontSize: 14,
                                color: "text.secondary",
                            }}
                        />
                    </Stack>

                    {/* Settings */}
                    <Stack
                        direction="row"

                        sx={{
                            p: 1,
                            width: "100%",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "&:hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <SettingsOutlinedIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />

                            <Box>
                                Settings
                            </Box>
                        </Stack>

                        <ArrowForwardIosIcon
                            sx={{
                                fontSize: 14,
                                color: "text.secondary",
                            }}
                        />
                    </Stack>

                    {/* Logout */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            boxSizing: "border-box",
                            p: 1,
                            color: "error.main",
                            cursor: "pointer",

                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "1px",
                                backgroundColor: "error.main",
                                transform: "scaleY(0.25)",
                                transformOrigin: "top",
                            },

                            "&:hover": {
                                color: "error.dark",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <LogoutOutlinedIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />

                            <Box>
                                Logout
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            )}
        </>
    );
}