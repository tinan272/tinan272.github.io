"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Links from "../../../data/links.json";
import { Divider } from "@mui/material";

export default function DrawerList({ toggleDrawer }) {
    return (
        <Box sx={{ width: 300 }} onClick={toggleDrawer(false)}>
            <div className="flex flex-col px-6 py-10 gap-6 lg:text-3xl md:text-2xl text-xl">
                {Object.entries(Links.navbar).map(([title, href]) => (
                    <div key={title} className="flex flex-col gap-4 w-full">
                        <a href={href} className="hover:underline">
                            {title}
                        </a>
                        <Divider />
                    </div>
                ))}
            </div>
        </Box>
    );
}
