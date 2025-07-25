"use client";

import Stack from "@mui/material/Stack";
import Link from "next/link";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerList from "./DrawerList";
import Drawer from "@mui/material/Drawer";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <Stack direction="column" gap={4}>
            <Stack
                direction="row"
                className="sm:flex-row"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "sticky",
                }}
            >
                <p className="lg:text-3xl md:text-xl text-lg">
                    <Link
                        href="/"
                        className="font-bold hover:underline text-inherit"
                    >
                        Tina Nguyen
                    </Link>
                </p>
                <IconButton
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="hamburger menu"
                >
                    <MenuIcon
                        sx={{
                            fontSize: {
                                xs: 24,
                                sm: 28,
                                md: 32,
                                lg: 36,
                            },
                            color: "black",
                        }}
                    />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <DrawerList toggleDrawer={toggleDrawer} />
                </Drawer>
            </Stack>
        </Stack>
    );
}

Navbar.propTypes = {
    linkDict: PropTypes.object.isRequired,
};
