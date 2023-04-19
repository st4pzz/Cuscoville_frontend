import Image from 'next/image'

import ParqueCusco from '@/public/images/parque.jpg'
import PortariaCusco from '@/public/images/Logo/portaria.jpg'
import AsfaltoCusco from '@/public/images/Logo/asfalto.jpg'
import PiscinaCusco from '@/public/images/Logo/piscina.jpg'
import EletricaCusco from '@/public/images/Logo/eletrica.jpg'
import EsgotoCusco from '@/public/images/Logo/esgoto.jpg'

export default function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            
            <p className="text-xl text-gray-400">O Loteamento Cuscoville é o lugar ideal para aqueles que buscam um estilo de vida cercado pela natureza, sem abrir mão do conforto e da segurança que uma infraestrutura completa pode proporcionar. Com uma ampla rede de saneamento básico, energia elétrica, iluminação pública, ruas pavimentadas e arborizadas, o loteamento oferece tudo o que você precisa para viver com qualidade de vida.

Além disso, Cuscoville possui áreas de lazer e convivência, como praças arborizadas, playgrounds e quadras esportivas, que proporcionam momentos de diversão e descontração para toda a família.</p>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={ParqueCusco} width={352} height={198} alt="News 10" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Área de lazer</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                
                <p className="text-lg text-gray-400 grow">A área de lazer de Cuscoville é o local perfeito para quem busca momentos de diversão e descontração em um ambiente tranquilo e cercado pela natureza. Com opções para todas as idades, a área de lazer do loteamento conta com uma grande piscina, onde você pode se refrescar e relaxar durante os dias de calor..</p>
                
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={PortariaCusco} width={352} height={198} alt="News 11" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Portaria</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                
                <p className="text-lg text-gray-400 grow">A segurança é uma das principais preocupações de quem busca um lugar para morar ou investir. E é por isso que Cuscoville conta com uma portaria com segurança 24 horas, garantindo a tranquilidade e a proteção dos seus moradores.
</p>
                
              </div>
            </article>

            {/* 3rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={AsfaltoCusco} width={352} height={198} alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Pavimentação</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                
                <p className="text-lg text-gray-400 grow">O conforto e a comodidade de um lugar para morar passam também pelas condições das suas vias de acesso. E é por isso que Cuscoville se destaca por ser 100% asfaltado, oferecendo mais segurança e facilidade de locomoção para seus moradores.</p>
                
              </div>
            </article>
            {/* 4rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute w-full h-full object-center object-cover transform hover:scale-105 transition duration-700 ease-out" src={PiscinaCusco} width={352} height={198} alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Piscina</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <p className="text-lg text-gray-400 grow">Para quem busca conforto e lazer, a piscina é uma opção perfeita, ainda mais em um lugar cercado pela natureza como Cuscoville. E o melhor: o loteamento oferece duas piscinas, uma para adultos e outra para crianças, garantindo a diversão e a segurança de toda a família.</p>
              </div>
            </article>
            {/* 5rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute w-full h-full object-center object-cover transform hover:scale-105 transition duration-700 ease-out" src={EletricaCusco} width={352} height={198} alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Rede Elétrica</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                
                <p className="text-lg text-gray-400 grow">Cuscoville é um loteamento que preza pela qualidade de vida e conforto dos seus moradores, e para isso, oferece uma infraestrutura completa e moderna. Um dos destaques é a rede elétrica 100% instalada e pronta para consumo, o que significa que todos os lotes já contam com energia elétrica.</p>
                
              </div>
            </article>
            {/* 6rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute w-full h-full object-center object-cover transform hover:scale-105 transition duration-700 ease-out" src={EsgotoCusco} width={352} height={198} alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Rede de Esgoto</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                
                <p className="text-lg text-gray-400 grow">Com uma rede de esgoto eficiente e bem estruturada, os moradores do Cuscoville contam com um serviço essencial de saneamento básico, que proporciona um ambiente mais saudável e seguro para todos. Além disso, a rede de esgoto 100% instalada garante praticidade e conforto no dia a dia dos moradores, sem preocupações com fossas e tratamentos individuais.</p>
                
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}
