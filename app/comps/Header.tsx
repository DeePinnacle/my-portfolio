"use client"
import Burger from "./Burger";
import Logo from "./logo";
import Navbar from "./Navbar";
import { useState } from 'react';
const Header = () => {

    // usestate 
    const [ toggle, setToggle ] = useState(false)

    // handling click effect
    const handleDropdown = () => {
        setToggle(!toggle);
    } 
    return ( 
        <header>
            {/* logo/burger */}
            <div className="w-full p-5 bg-zinc-800 flex flex-row align-middle justify-between">
                <Logo />
                <Burger handleDropdown = {handleDropdown}/>
            </div>
            <div className="flex justify-between">
                <div className="hidden">
                    <Logo />
                </div>
                <div className="flex justify-end w-full">
                    <div className={`hideNavbar ${ toggle ? 'showNavbar' : 'hideNavbar' } w-9/12`}>
                        <Navbar />
                    </div>
                </div>
            </div>
            {/* Logo and link  */}
            
        </header>
     );
}
 
export default Header;