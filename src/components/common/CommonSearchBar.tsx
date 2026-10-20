import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

export default function CommonSearchBar() {
    return (
        <TextField
            fullWidth
            placeholder="Search streams, creators, videos..."
            variant="outlined"
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    event.currentTarget.blur();
                }
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "200px",
                    padding: "0px 10px",
                    height: "35px",
                    border: "1px solid",
                    borderColor: "primary.main",
                    fontSize: 14     
                },
            }}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon
                            sx={{
                                fontSize: 25,
                            }}
                            />
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}