import { BOTTOM_NAV_HEIGHT } from '@/constants/constants'
import { Stack } from '@mui/material'
import { BottomNavItems } from './components/bottomNav'

export default function BottomNav() {
    return (
        <>
            <Stack
                sx={{
                    width: '100%',
                    height: BOTTOM_NAV_HEIGHT,
                    bottom: 0,
                    position: 'fixed',
                    backgroundColor: 'background.default',
                    zIndex: 1,
                    color: 'text.primary',
                    display: {
                        xs: "flex",
                        sm: "flex",
                        md: "none",
                        lg: "none",
                    },
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 3,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <BottomNavItems />
            </Stack>
        </>
    )
}
