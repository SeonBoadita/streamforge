import { FormControl, MenuItem, Select } from '@mui/material'

const languages = [
    { value: 'en-US', label: 'English (US)' },
    { value: 'en-GB', label: 'English (UK)' },
    { value: 'pt-BR', label: 'Português (BR)' },
    { value: 'es-ES', label: 'Español' },
]

export default function FooterBottomLanguage() {
    return (
        <FormControl variant="standard">
            <Select
                defaultValue="en-US"
                variant="standard"
                disableUnderline
                sx={(theme) => ({
                    fontSize: theme.typography.footer.overline.fontSize,
                })}
                MenuProps={{
                    slotProps: {
                        paper: {
                            sx: (theme) => ({
                                backgroundColor: 'background.paper',

                                '& .MuiMenuItem-root': {
                                    fontSize:
                                        theme.typography.footer.overline.fontSize,
                                },

                                '& .MuiMenuItem-root.Mui-selected': {
                                    backgroundColor: `${theme.palette.primary.main}26`,
                                },

                                '& .MuiMenuItem-root.Mui-selected:hover': {
                                    backgroundColor: `${theme.palette.primary.main}33`,
                                },
                            }),
                        },
                    },
                }}
            >
                {languages.map((language) => (
                    <MenuItem key={language.value} value={language.value}>
                        {language.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}