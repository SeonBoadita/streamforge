import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import CommonSearchBar from '../common/CommonSearchBar'
import { CommonButton } from '../common'
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { isCreator, isAdmin } from '@/constants';
import { BellIcon, Logo, Profile } from './components/nav';

export default function NavBar() {
    return (
        <>
            <AppBar
                position="static"
                color="primary"
                elevation={5}
                sx={{
                    height: 60,
                    width: '100%',
                    color: 'primary.main',
                    backgroundColor: 'primary.contrastText',
                }}
            >
                <Toolbar>
                    <Stack
                        direction="row"
                        spacing={10}
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Logo />

                        <Box
                            sx={{
                                flex: 2,
                                display: {
                                    sm: "flex",
                                    xs: "none",
                                }
                            }}
                        >
                            <CommonSearchBar />
                        </Box>

                        <Stack
                            direction="row"
                            spacing={2}>
                            
                            <IconButton
                                sx={{
                                    display: {
                                        sm: "none",
                                        xs: "flex",
                                    }
                                }}>
                                <SearchIcon
                                    sx={{
                                        fontSize: 25,
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                sx={{
                                    display: {
                                        md: "none",
                                        xs: "flex",
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
                                }
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
        </>
    )
}

