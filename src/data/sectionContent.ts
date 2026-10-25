import CircleIcon from '@mui/icons-material/Circle';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupsIcon from '@mui/icons-material/Groups';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export const CONTENT_SECTION_DATA = [
    {
        id: 'live',
        title: 'Live Now',
        description: 'Top live streams happening right now',
        icon: CircleIcon,
        iconColor: 'error.dark',
    },
    {
        id: 'shorts',
        title: 'Shorts',
        description: 'Quick clips from top creators',
        icon: BoltIcon,
        iconColor: 'info.main',
    },
    {
        id: 'creators',
        title: 'Featured Creators',
        description: 'Discover amazing streamers and content creators',
        icon: GroupsIcon,
        iconColor: 'warning.main',
    },
    {
        id: 'videos',
        title: 'Popular Videos',
        description: 'Trending, recommended, and more for you',
        icon: PlayCircleFilledIcon,
        iconColor: 'success.main',
    },
];