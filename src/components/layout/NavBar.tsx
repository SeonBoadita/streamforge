
"use client";
import { alpha, AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { CommonButton, CommonSearchBar } from '@/components/common'
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { isCreator, isAdmin, NAVBAR_HEIGHT } from '@/constants';
import { BellIcon, Logo, MobileMenu, Profile } from './components/nav';

export default function NavBar() {


    const [showSearchBar, setShowSearchBar] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const mobileMenuTriggerRef = React.useRef<HTMLButtonElement>(null);

    const handleSearchClick = () => {
        setShowSearchBar(true);
    }

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const searchBarRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchBarRef.current &&
                !searchBarRef.current.contains(event.target as Node)
            ) {
                setShowSearchBar(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" || event.key === "Enter") {
                setShowSearchBar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <AppBar
                position="fixed"
                color="primary"
                elevation={0}
                sx={{
                    zIndex: 1000,
                    height: NAVBAR_HEIGHT,
                    width: '100%',
                    color: 'primary.main',
                    backgroundColor: 'primary.contrastText',
                    overflow: 'hidden',
                    borderBottom: '1px solid',
                    borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                }}
            >
                <Toolbar
                sx={{
                    px: {
                        xs: 2,
                        sm: 2,
                        md: 1,
                        lg: 1,
                    },
                }}
                >
                    <Stack
                        direction="row"
                        spacing={{
                            sm: 10,
                            xs: 3
                        }}
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Logo />
                        </Box>

                        <Box
                            sx={{
                                flex: 2,
                                display: {
                                    xs: "flex",
                                },
                                opacity: {
                                    xs: showSearchBar ? 1 : 0,
                                    sm: 1,
                                },
                                transform: {
                                    xs: showSearchBar ? "translateX(0)" : "translateX(20px)",
                                    sm: "translateX(0)",
                                },
                                transition: "opacity 250ms ease, transform 250ms ease",
                                pointerEvents: {
                                    xs: showSearchBar ? "auto" : "none",
                                    sm: "auto",
                                },

                            }}
                            ref={searchBarRef}
                        >
                            <CommonSearchBar />
                        </Box>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none",
                                },
                                opacity: {
                                    xs: showSearchBar ? 0 : 1,
                                    sm: 1,
                                    md: 0,
                                },
                                maxWidth: {
                                    xs: showSearchBar ? 0 : "100%",
                                    sm: "100%",
                                    md: 0,
                                },
                                transform: {
                                    xs: showSearchBar ? "translateX(20px)" : "translateX(0)",
                                    sm: "translateX(0)",
                                },
                                transition: "transform 250ms ease",
                                pointerEvents: {
                                    xs: showSearchBar ? "none" : "auto",
                                    sm: "auto",
                                    md: "none",
                                },
                            }}
                        >
                            <IconButton
                                onClick={handleSearchClick}
                                sx={{
                                    display: {
                                        sm: "none",
                                        xs: "flex",
                                    }
                                }}>
                                <SearchIcon
                                    sx={{
                                        fontSize: 30,
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                ref={mobileMenuTriggerRef}
                                onClick={handleMobileMenuToggle}
                                sx={{
                                    display: {
                                        xs: "flex",
                                        sm: "flex",
                                        md: "none",
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: {
                                    md: "flex",
                                    xs: "none",
                                },
                                fontSize: 30,
                            }}
                        >
                            {
                                isCreator && (
                                    <CommonButton
                                        text={"Create"}
                                        startIconEnabled={true}
                                        startIcon={<AddIcon />}
                                    />
                                )
                            }
                            <Box>
                                <BellIcon
                                    count={10}
                                />
                            </Box>
                            <Box>
                                <Profile />
                            </Box>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Box>
                <MobileMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    menuTriggerRef={mobileMenuTriggerRef}
                />
            </Box>
        </>
    )
}
