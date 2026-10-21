import { Box, Menu, MenuItem, Stack } from "@mui/material";
import type { PopoverOrigin } from "@mui/material/Popover";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CommonButton } from "@/components/common";
import { alpha } from "@mui/material/styles";
import NavProfile from "./NavProfile";
import { typography } from "@/themes/typography";

type MenuItemType = {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    description?: string | null;
    type?: "default" | "danger";
};

type CommonMenuProps = {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    items: MenuItemType[];
    width?: string;
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
    menuName: "notifications" | "profile";
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
                    menuName === "notifications" && (
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
                                        ...typography.nav.itemStrong,
                                        whiteSpace: "nowrap"
                                    }}
                                >Notification (10)</Box>
                                <Box
                                    component="span"
                                    sx={{
                                        ...typography.nav.menuAction,
                                        whiteSpace: "nowrap",
                                        color: "primary.main",
                                        cursor: "pointer",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        }
                                    }}
                                >Mark all read</Box>
                            </Stack>
                        </>
                    )
                }
                {menuName === "profile" && (
                    <NavProfile />
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
                        ...typography.nav.item,
                        "&:hover": {
                            color: "primary.main",
                        },
                        ...(item.type === "danger" && {
                            color: "error.main",
                            position: "relative",
                            "&:hover": {
                                color: "error.dark",
                                backgroundColor: (theme) =>
                                    alpha(theme.palette.error.main, 0.08),
                            },
                            "&::before": {
                                content: "''",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "1px",
                                backgroundColor: "error.main",
                                transform: "scaleY(0.25)",
                                transformOrigin: "top",
                            }
                        })
                    }}
                >
                    {item.icon && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "0.75rem",
                                mr: 0.5,
                            }}
                        >
                            <Box>
                                {item.icon}
                            </Box>
                        </Box>
                    )}
                    <Stack>
                        <Box>
                            {item.label}
                        </Box>
                        {
                            item.description && (
                                <Box
                                    sx={{
                                        ...typography.nav.meta,
                                        color: "text.secondary",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {item.description}
                                </Box>
                            )
                        }
                    </Stack>
                </MenuItem>
            ))}

            {menuName === "notifications" && <CommonButton
                width="100%"
                text="View all notifications"
                endIcon={<ArrowRightIcon />}
                endIconEnabled={true}
            />}
        </Menu>
    );
}