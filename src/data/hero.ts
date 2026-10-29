export const HERO_DATA = [
    {
        id: 'trending',
        image: '/images/dashboard/heroImage01.png',

        badge: {
            icon: 'trending',
            iconColor: 'warning.dark',
            textOne: 'TRENDING',
            textTwo: 'NOW',
        },

        title: {
            normalStart: "Explore What's",
            highlighted: 'Trending',
            normalEnd: 'Right Now',
        },

        description:
            'Discover the hottest content, trending categories, and creators everyone is watching right now.',

        cta: {
            text: 'Explore Trending',
        },
        href: '/trending',
    },

    {
        id: 'videos',
        image: '/images/dashboard/heroImage02.png',

        badge: {
            icon: 'videos',
            iconColor: 'success.main',
            textOne: 'VIDEOS',
            textTwo: 'NOW',
        },

        title: {
            normalStart: 'Watch',
            highlighted: 'Amazing Videos',
            normalEnd: 'Right Away',
        },

        description:
            'Watch engaging videos from creators across categories and discover something new every day.',

        cta: {
            text: 'Explore Videos',
        },
        href: '/videos',
    },

    {
        id: 'live-streams',
        image: '/images/dashboard/heroImage03.png',

        badge: {
            icon: 'live',
            iconColor: 'error.dark',
            textOne: 'LIVE',
            textTwo: 'NOW',
        },

        title: {
            normalStart: 'Join the',
            highlighted: 'Live Stream',
            normalEnd: 'Experience',
        },

        description:
            'Tune into live streams, interact with creators, and be part of the action as it happens.',

        cta: {
            text: 'Watch Live',
        },
        href: '/live',
    },

    {
        id: 'shorts',
        image: '/images/dashboard/heroImage04.png',

        badge: {
            icon: 'shorts',
            iconColor: 'info.main',
            textOne: 'SHORTS',
            textTwo: 'NOW',
        },

        title: {
            normalStart: 'Quick',
            highlighted: 'Shorts',
            normalEnd: 'Endless Entertainment',
        },

        description:
            'Discover quick, entertaining shorts from creators and keep scrolling through content you love.',

        cta: {
            text: 'Explore Shorts',
        },
        href: '/shorts',
    },
] as const;