import { Box, Menu, MenuItem, Stack } from "@mui/material";
import type { PopoverOrigin } from "@mui/material/Popover";
import { CommonButton } from "@/components/common";

type MenuItemType = {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
};

type CommonMenuProps = {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    items: MenuItemType[];
    width?: string;
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
    menuName?: string;
};

export default function CommonMenu({
    anchorEl,
    open,
    onClose,
    items,
    width,
    anchorOrigin,
    transformOrigin,
    menuName,
}: CommonMenuProps) {
    const nameFromRedux = "Seon";
    const emailFromRedux = "seonboadita@gmail.com";

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            sx={{
                "& .MuiMenu-list": {
                    px: 1,
                    margin: "10px 0px 0px 0px",
                    paddingTop: 0,
                },
                "& .MuiPaper-root": {
                    borderRadius: 1,
                    width: width,
                    position: "relative",
                    overflow: "visible",

                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: -6,
                        right: 20,
                        width: 12,
                        height: 12,
                        bgcolor: "background.paper",
                        transform: "rotate(45deg)",
                        zIndex: 0,
                    },
                },
            }}
        >
            <Stack
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    p: 1,
                    position: "relative",
                    minWidth: 0,

                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "1px",
                        bgcolor: "primary.main",
                    },
                }}
            >
                {
                    menuName === "notification" && (
                        <>
                        <Stack
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            width: "100%",
                        }}
                        >
                            <Box
                            component="span"
                            sx={{
                                fontSize: 14,
                                fontWeight: 600,
                                whiteSpace: "nowrap"
                            }}
                            >Notification (10)</Box>
                            <Box
                            component="span"
                            sx={{
                                fontSize: 12,
                                fontWeight: 200,
                                whiteSpace: "nowrap",
                            }}
                            >Mark all read</Box>
                        </Stack>
                        </>
                    )
                }
                {menuName === "profile" && (
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
                )}
            </Stack>

            {/* Menu items */}
            {items.map((item) => (
                <MenuItem
                    key={item.label}
                    onClick={item.onClick}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: 14,

                        "&:hover": {
                            color: "primary.main",
                        },
                    }}
                >
                    {item.icon && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: 12,
                                mr: 0.5,
                            }}
                        >
                            {item.icon}
                        </Box>
                    )}

                    {item.label}
                </MenuItem>
            ))}

            {menuName === "notifications" && <CommonButton
            width="100%"
            text="View all notifications"
            />}
        </Menu>
    );
}