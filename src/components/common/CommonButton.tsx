import Button from "@mui/material/Button";
import Link from "next/link";

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
    border?: string | null;
    borderRadius?: string | null;
    href?: string | null;
}

export default function ButtonUsage({ text = null, href = null, borderRadius = null, width = "100%", enabledHeight = false, padding = null, height = null, startIcon = null, endIcon = null, startIconEnabled = false, endIconEnabled = false }: ButtonUsageProps): React.ReactNode {
    return (
        <Link href={href || "#"}>

            <Button
                variant="contained"
                color="primary"
                startIcon={startIconEnabled ? startIcon : null}
                endIcon={endIconEnabled ? endIcon : null}
                sx={{
                    padding: padding || "0px 20px",
                    height: enabledHeight ? height : "35px",
                    borderRadius: borderRadius || "200px",
                    width: width,
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "primary.main",
                    },
                    "&:active": {
                        transform: "scale(0.98)",
                    },
                }}
            >
                {text}
            </Button>
        </Link>

    );
}