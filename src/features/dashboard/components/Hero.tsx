"use client";

import { CommonButton } from "@/components/common";
import CommonBadge from "@/components/common/CommonBadge";
import { Box, Stack } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BoltIcon from "@mui/icons-material/Bolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useRef } from "react";
import { theme } from "@/themes/themes";
import CommonCarouselDots from "@/components/common/CommonCarouselDots";
import { HERO_DATA } from "@/data";

type BadgeIconKey = 'trending' | 'videos' | 'live' | 'shorts';

export default function Hero() {

    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    const badgeIcons: Record<BadgeIconKey, typeof LocalFireDepartmentIcon> = {
        trending: LocalFireDepartmentIcon,
        videos: PlayCircleIcon,
        live: LiveTvIcon,
        shorts: BoltIcon,
    };

    const BadgeIcon = badgeIcons[HERO_DATA[currentIndex].badge.icon];
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);
    
    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const handelHeroScroll = (e: WheelEvent) => {
            if (isScrolling.current) return;
            isScrolling.current = true;

            const delta = e.deltaY;
            if (delta > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_DATA.length);
            } else {
                setCurrentIndex(
                    (prevIndex) => (prevIndex - 1 + HERO_DATA.length) % HERO_DATA.length,
                );
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 500);
        };

        slider.addEventListener("wheel", handelHeroScroll);
        return () => {
            slider.removeEventListener("wheel", handelHeroScroll);
        };
    }, []);
    return (
        <>
            <Box
                ref={sliderRef}
                sx={{
                    backgroundImage: "url(" + HERO_DATA[currentIndex].image + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundColor: "primary.contrastText",
                    color: "white",
                    padding: {
                        lg: "2rem 4rem",
                        md: "2rem 4rem",
                        sm: "2rem",
                        xs: "1.25rem",
                    },
                    textAlign: "center",
                    width: "100vw",
                }}
            >
                <Stack
                    sx={{
                        flexDirection: {
                            lg: "row",
                            md: "row",
                            sm: "row",
                            xs: "column",
                        },
                        gap: 3,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack
                        sx={{
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 1.5,
                            flex: {
                                lg: 1,
                                md: 2,
                                sm: 2,
                                xs: 1,
                            },
                        }}
                    >
                        <Box>
                            <CommonBadge
                                icon={
                                    <BadgeIcon
                                        sx={{
                                            ...theme.typography.dashboard.title,
                                            color: [HERO_DATA[currentIndex].badge.iconColor],
                                        }}
                                    />
                                }
                                textOne={HERO_DATA[currentIndex].badge.textOne}
                                textTwo={HERO_DATA[currentIndex].badge.textTwo}
                            />
                        </Box>
                        <Box
                            sx={{
                                ...theme.typography.dashboard.heroTitle,
                                textAlign: "left",
                                fontWeight: 700,
                                lineHeight: 1.15,
                                width: {
                                    lg: "80%",
                                    md: "60%",
                                    sm: "90%",
                                    xs: "90%",
                                },
                            }}
                        >
                            {HERO_DATA[currentIndex].title.normalStart}{" "}
                            <span
                                style={{
                                    color: "#8FAE25",
                                }}
                            >
                                {HERO_DATA[currentIndex].title.highlighted}
                            </span>{" "}
                            {HERO_DATA[currentIndex].title.normalEnd}
                        </Box>
                        <Box
                            sx={{
                                ...theme.typography.dashboard.text,
                                textAlign: "left",
                                width: {
                                    lg: "100%",
                                    md: "70%",
                                    sm: "80%",
                                    xs: "60%",
                                },
                            }}
                        >
                            {HERO_DATA[currentIndex].description}
                        </Box>
                        <Box>
                            <CommonButton
                                endIcon={<ChevronRightIcon />}
                                endIconEnabled={true}
                                text={HERO_DATA[currentIndex].cta.text}
                            />
                        </Box>
                    </Stack>

                    <Stack
                        sx={{
                            flex: {
                                lg: 2,
                                md: 1,
                                sm: 1,
                                xs: 0,
                            },
                            alignItems: "flex-end",
                            justifyContent: "center",
                            gap: 1.4,
                            flexDirection: {
                                lg: "column",
                                md: "column",
                                sm: "column",
                                xs: "row",
                            },
                        }}
                    >
                        <CommonCarouselDots
                            currentActiveIndex={currentIndex}
                            count={5}
                            isHorizontal={{
                                lg: false,
                                md: false,
                                sm: false,
                                xs: true,
                            }}
                        />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
