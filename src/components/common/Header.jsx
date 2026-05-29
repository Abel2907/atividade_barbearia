"use client"
import { useState } from "react";
import ListLink from "./ListLink";
export default function Header(){
    const [open, setOpen] = useState(false)
    return(
        <header>
            <nav className="bg-black flex w-full h-25 justify-between">
                <div className="flex  items-center m-3 gap-2">
                    <span><img src="/" alt="logo-img"/></span>
                    <span><h1 className="text-amber-600 font-bold text-2xl ">top-barbearia</h1></span> 
                </div>

                <ListLink className={'hidden md:flex items-end'}></ListLink>

                <div className="md:hidden flex items-center">
                    <button onClick={()=>{setOpen(!open)}} ><i className={`${open? "bi bi-x-lg": "bi bi-list"} m-3 text-3xl text-amber-700`}></i></button>
                </div>
            </nav>

                <ListLink 
                className={`md:hidden flex flex-col absolute w-full bg-black transition-all ease-in-out
                ${open? "opacity-100 duration-initial  translate-y-0 pointer-events-auto visible"
                :"opacity-0 translate-y-4 pointer-events-none invisible"}`} >
                </ListLink>

        </header>
    );
};