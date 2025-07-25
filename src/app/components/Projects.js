"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import WorkCard from "./WorkCard";

export default function Projects({ project, type }) {
    return (
        <div className="flex flex-col text-2xl">
            <div className="w-full flex flex-col">
                <p className="my-4">{type}</p>
                <Stack
                    spacing={{ xs: 4, sm: 4, md: 4 }}
                    direction={{ xs: "column", sm: "row" }}
                >
                    {project &&
                        project.map((item, idx) => (
                            <div key={idx}>
                                <WorkCard
                                    title={item.title}
                                    subheader={item.subheader}
                                    image={item.image}
                                    href={item.href}
                                />
                            </div>
                        ))}
                </Stack>
            </div>
        </div>
    );
}
