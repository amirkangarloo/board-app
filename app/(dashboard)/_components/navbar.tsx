"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return ( 
        <nav className="flex items-center gap-x-4 p-5 bg-slate-500">
            <div className="hidden lg:flex lg:flex-1 bg-slate-100">
                search
            </div>
            <UserButton />
        </nav>
     );
}
 
export default Navbar;