import Button from "@mui/material/Button";

interface ButtonUsageProps {
    text?: string | null;
    width?: string;
    height?: string | null;
    enabledHeight?: boolean;
    startIcon?: React.ReactNode | null;
    endIcon?: React.ReactNode | null;
    startIconEnabled?: boolean;
    endIconEnabled?: boolean;
    padding?: string | null;
}

export default function ButtonUsage({ text = null, width="100%", enabledHeight = false, padding = null, height = null, startIcon = null, endIcon = null, startIconEnabled = false, endIconEnabled = false }: ButtonUsageProps): React.ReactNode {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={startIconEnabled ? startIcon : null}
            endIcon={endIconEnabled ? endIcon : null}
            sx={{
                borderRadius: "200px",
                padding: padding || "0px 20px",
                height: enabledHeight ? height : "35px",
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