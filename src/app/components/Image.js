"use client";
import Box from "@mui/material/Box";

export default function Image() {
    return (
        <Box>
            <img
                src="/portfolio_image.JPG"
                alt="portfolio-image"
                className="shadow-md w-[1000px] h-auto"
            />
        </Box>
    );
}
