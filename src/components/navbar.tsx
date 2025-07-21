"use client"
import React from 'react'
import { Menu,MenuItem,HoveredLink } from './animations/navbar-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useState } from 'react'


function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 f")}>
    <Menu setActive={setActive}>
        <Link href={"/"} >
        <MenuItem setActive={setActive} active={active} item="Home">

        </MenuItem>
        </Link>
        <Link href={"/skills"}>
        <MenuItem setActive={setActive} active={active} item="Skills">
        
        
        


        </MenuItem>
        </Link>
        

       
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Me">

        </MenuItem>
        </Link>
       

        
    </Menu>

  </div>
  )
}

export default Navbar