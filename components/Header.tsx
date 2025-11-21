

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";


const Header = () => {

    return (
        <header className="sticky top-1 header">
            <div className="container header-wrapper">
                <Link href="/"><Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/> </Link>

                {/*desktop*/}
                <nav className="hidden sm:block">
                    <NavItems></NavItems>
                </nav>

                {/*mobile*/}
                <UserDropdown></UserDropdown>
            </div>
        </header>
    )
}
export default Header
