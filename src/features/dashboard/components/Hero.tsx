"use client";

import { AnimatePresence, motion } from "motion/react";
import { CommonBadge, CommonButton, CommonCarouselDots } from "@/components/common";
import { Box, Stack } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CircleIcon from "@mui/icons-material/Circle";
import BoltIcon from "@mui/icons-material/Bolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useRef } from "react";
import { theme } from "@/themes/themes";
import { HERO_DATA } from "@/data";

type BadgeIconKey = 'trending' | 'videos' | 'live' | 'shorts';

export default function Hero() {

    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    const badgeIcons: Record<BadgeIconKey, typeof LocalFireDepartmentIcon> = {
        trending: LocalFireDepartmentIcon,
        videos: PlayCircleIcon,
        live: CircleIcon,
        shorts: BoltIcon,
    };

    const BadgeIcon = badgeIcons[HERO_DATA[currentIndex].badge.icon];
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef<number | null>(null);
    const isScrolling = useRef(false);
    
    useEffect(()=>{
        const autoSlider = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_DATA.length);
        }, 5000);
        return () => clearTimeout(autoSlider);
    }, [currentIndex]);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        // Desktop scroll functionality
        const handelHeroScroll = (e: WheelEvent) => {
            e.preventDefault();
            
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

        // Phone swipe functionality
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (touchStartX.current === null) return;

            const touchEndX = e.changedTouches[0].clientX;
            const swipeDistance = touchEndX - touchStartX.current;

            if (Math.abs(swipeDistance) < 50) {
                touchStartX.current = null;
                return;
            }

            if (isScrolling.current) return;

            isScrolling.current = true;

            if (swipeDistance < 0) {
                // Swipe left → next
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % HERO_DATA.length
                );
            } else {
                // Swipe right → previous
                setCurrentIndex(
                    (prevIndex) =>
                        (prevIndex - 1 + HERO_DATA.length) %
                        HERO_DATA.length
                );
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 0);

            touchStartX.current = null;
        };
        slider.addEventListener("wheel", handelHeroScroll);
        slider.addEventListener("touchstart", handleTouchStart);
        slider.addEventListener("touchend", handleTouchEnd);
        return () => {
            slider.removeEventListener("wheel", handelHeroScroll);
            slider.removeEventListener("touchstart", handleTouchStart);
            slider.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);
    return (
        <>
            <Box
                ref={sliderRef}
                sx={{
                    backgroundImage: {
                        xs: `
                        linear-gradient(
                            90deg,
                            rgba(0, 0, 0, 0.95) 0%,
                            rgba(0, 0, 0, 0.75) 45%,
                            rgba(0, 0, 0, 0.15) 100%
                        ),
                        url(${HERO_DATA[currentIndex].image})
                    `,
                        sm: `url(${HERO_DATA[currentIndex].image})`,
                    },
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: {
                        sm: "70% center",
                        xs: "80% center",
                    }, backgroundColor: "background.hero",
                    color: "white",
                    padding: {
                        lg: "2rem 2rem",
                        md: "2rem 2rem",
                        sm: "2rem",
                        xs: "1.25rem",
                    },
                    textAlign: "center",
                    width: "100%",
                    touchAction: "pan-y",
                    zIndex: 1,
                }}
            >
                <AnimatePresence mode="wait">
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
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{
                                duration: .6,
                                ease: "easeOut",
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
                                            lg: "80%",
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
                        </motion.div>
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
                                count={HERO_DATA.length}
                                isHorizontal={{
                                    lg: false,
                                    md: false,
                                    sm: false,
                                    xs: true,
                                }}
                            />
                        </Stack>
                    </Stack>
                </AnimatePresence>
            </Box>
        </>
    );
}
