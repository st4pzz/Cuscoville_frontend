import React from 'react'
import Link from 'next/link'
import Logo from '@/public/images/logo-sem-texto.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image className="mx-auto" width={50} height={50} src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="text-gray-400">Cuscoville é um loteamento localizado na charmosa cidade de Analândia, interior de São Paulo. É um lugar encantador, que se situa no meio da natureza, cercado por belas paisagens e ar puro, oferecendo aos seus moradores uma vida mais tranquila e saudável.</div>
            </div>

           

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; LoteamentoCuscoville.com. Todos os direitos reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
