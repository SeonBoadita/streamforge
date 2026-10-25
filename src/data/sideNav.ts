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
                icon: HomeOutlinedIcon,
            },
            {
                name: 'Live',
                icon: CircleIcon,
            },
            {
                name: 'Videos',
                icon: PlayCircleIcon,
            },
            {
                name: 'Shorts',
                icon: BoltIcon,
            },
        ],
    },
    {
        items: [
            {
                name: 'Community',
                icon: GroupsOutlinedIcon,
            },
            {
                name: 'Leaderboard',
                icon: LeaderboardOutlinedIcon,
            },
        ],
    },
    {
        items: [
            {
                name: 'Profile',
                icon: PersonOutlineOutlinedIcon,
            },
            {
                name: 'Settings',
                icon: SettingsOutlinedIcon,
            },
        ],
    },
];