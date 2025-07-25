"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ title, subheader, image, href }) {
    return (
        <Link href={href}>
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 345,
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                    boxShadow: 3,
                }}
            >
                <CardHeader
                    title={
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontFamily: "var(--font-cormorant)",
                            }}
                        >
                            {title}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            sx={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            {subheader}
                        </Typography>
                    }
                />
                <Image src={image} width={500} height={500} alt="work image" />
            </Card>
        </Link>
    );
}
