import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
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
                name: 'Games',
                icon: SportsEsportsOutlinedIcon,
            },
            {
                name: 'Live',
                icon: LiveTvOutlinedIcon,
            },
            {
                name: 'Tournaments',
                icon: EmojiEventsOutlinedIcon,
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