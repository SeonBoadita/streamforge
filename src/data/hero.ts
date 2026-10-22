export const HERO_DATA = [
    {
        id: 'trending',
        image: '/images/dashboard/heroImage1.png',

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
    },

    {
        id: 'videos',
        image: '/images/dashboard/heroImage2.png',

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
    },

    {
        id: 'live-streams',
        image: '/images/dashboard/heroImage3.png',

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
    },

    {
        id: 'shorts',
        image: '/images/dashboard/heroImage4.png',

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
    },
] as const;