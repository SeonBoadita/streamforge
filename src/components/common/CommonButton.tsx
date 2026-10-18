import Button from "@mui/material/Button";

export default function ButtonUsage({ text, width="100%", startIcon = null, endIcon = null, startIconEnabled = false, endIconEnabled = false }: { text: string, width?: string, startIcon?: React.ReactNode, endIcon?: React.ReactNode, startIconEnabled?: boolean, endIconEnabled?: boolean }): React.ReactNode {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={startIconEnabled ? startIcon : null}
            endIcon={endIconEnabled ? endIcon : null}
            sx={{
                borderRadius: "200px",
                padding: "0px 20px",
                height: "35px",
                width: width,
                textTransform: "none",
                "&hover": {
                    backgroundColor: "primary.main",
                },
            }}
        >
            {text}
        </Button>
    );
}