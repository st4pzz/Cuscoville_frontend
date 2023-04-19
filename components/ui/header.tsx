import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LogoCusco from '@/public/images/Logo.png'
import Image from 'next/image'

import {Paper} from '@mui/material'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              
              <Image className='bg-white rounded-md mt-2' width={140} height={140} src={LogoCusco} alt='logo'/>
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-yellow-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Infraestrutura
                </Link>
              </li>
              
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Localização
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Obras
                </Link>
              </li>
              {/* 1st level: hover */}
              
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
           
              <li>
                <Link href="/signup" className="btn-sm text-stone-600 bg-yellow-300 hover:bg-gray-100 ml-3">
                  Entre em Contato
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
