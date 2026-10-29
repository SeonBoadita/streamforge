import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

export const SIDE_NAV_ITEMS = [
    {
        items: [
            {
                name: 'Collapse',
                icon: KeyboardDoubleArrowRightOutlinedIcon,
                iconToggle: KeyboardDoubleArrowLeftOutlinedIcon,
            },
        ],
    },
    {
        items: [
            {
                name: 'Home',
                href: '/',
                icon: HomeOutlinedIcon,
            },
            {
                name: 'Live',
                href: '/live',
                icon: CircleIcon,
            },
            {
                name: 'Videos',
                href: '/videos',
                icon: PlayCircleIcon,
            },
            {
                name: 'Shorts',
                href: '/shorts',
                icon: BoltIcon,
            },
        ],
    },
    {
        items: [
            {
                name: 'Community',
                href: '/community',
                icon: GroupsOutlinedIcon,
            },
            {
                name: 'Leaderboard',
                href: '/leaderboard',
                icon: LeaderboardOutlinedIcon,
            },
        ],
    },
    {
        items: [
            {
                name: 'Profile',
                href: '/profile',
                icon: PersonOutlineOutlinedIcon,
            },
            {
                name: 'Settings',
                href: '/settings',
                icon: SettingsOutlinedIcon,
            },
        ],
    },
]