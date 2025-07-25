"use client";
import Stack from "@mui/material/Stack";
import SouthIcon from "@mui/icons-material/South";
import Link from "next/link";
export default function Statement({ statement }) {
    return (
        <div>
            <Stack spacing={4}>
                <Stack
                    direction="row"
                    spacing={5}
                    display="flex"
                    alignItems="center"
                >
                    <div className="lg:text-2xl/20 md:text-lg/15 sm:text-sm/10">
                        Hello,
                    </div>
                    <div
                        style={{
                            flexGrow: 1,
                            height: 1.5,
                            backgroundColor: "black",
                        }}
                    />
                </Stack>
                <div className="lg:text-4xl/20 md:text-2xl/15 text-xl/10">
                    {statement}
                </div>
                <div>
                    <Link href="./#projects">
                        <SouthIcon
                            sx={{
                                fontSize: {
                                    xs: 30,
                                    sm: 40,
                                    md: 50,
                                    lg: 60,
                                },
                                mx: "auto",
                            }}
                        />
                    </Link>
                </div>
            </Stack>
        </div>
    );
}
