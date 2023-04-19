'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import loteCusco from '@/public/images/lote.jpg'

export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
	  if ( tabs.current && tabs.current.parentElement ) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])      

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-12 md:py-20 border-t border-gray-800">

    {/* Section header */}

    {/* Section content */}

    {/* Tabs items */}
    <div className="transition-all">
      <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

        {/* Item 1 */}
        <Transition
          show={tab === 1}
          className="w-full"
          enter="transition ease-in-out duration-500 transform order-first"
          enterFrom="opacity-0 scale-98"
          enterTo="opacity-100 scale-100"
          leave="transition ease-out duration-300 transform absolute"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-98"
          beforeEnter={() => heightFix()}
        >
          <article className="relative max-w-md mx-auto md:max-w-none flex flex-col md:flex-row">
            <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
              <Image className="w-full h-full object-cover" src={loteCusco} width={516} height={387} alt="Tabs 01" />
            </figure>
            <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:w-1/2">
              <h4 className="h4 mb-2">Lotes a partir de 420m²</h4>
              <p className="text-lg text-gray-400">Cuscoville é um loteamento que foi planejado para oferecer uma vida em meio à natureza com todo o conforto e infraestrutura que você precisa. E uma das características mais atrativas são os lotes, que têm a partir de 420 metros quadrados, um tamanho ideal para a construção de uma casa espaçosa e aconchegante para toda a família.</p>
            </div>
          </article>
        </Transition>

      </div>
    </div>

  </div>
</div>

      
    </section>
  )
}
