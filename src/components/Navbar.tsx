'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem }
    from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; // a tags hame

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (

        <div
            className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}

        >
            <Menu setActive={setActive} >
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* test */}
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All courses</HoveredLink>
                        <HoveredLink href="/courses">AAAA</HoveredLink>
                        <HoveredLink href="/courses">BBBB</HoveredLink>
                        <HoveredLink href="/courses">CCCCCc</HoveredLink>
                        <HoveredLink href="/courses">DDDd</HoveredLink>
                        <HoveredLink href="/courses">EEEEe</HoveredLink>
                    </div>

                </MenuItem>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}

export default Navbar