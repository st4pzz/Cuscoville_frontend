import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import PostItem from '@/components/post-item'
import Analandia from '@/public/images/Logo/analandia.jpg'
import Cuscozeiro from '@/public/images/Logo/cuscozeiro.jpg'
import Camelo from '@/public/images/Logo/camelo.jpeg'
import Natureza from '@/public/images/Logo/natureza.jpg'

export const metadata = {
  title: 'Cuscoville',
  description: 'Page description',
}

import Newsletter from '@/components/newsletter'

export default function Blog() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })  

  const featuredPost = allPosts[0]
  const posts = allPosts.slice(1)

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">Conheça a cidade de Analândia!</h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <div className="relative block group" data-aos="fade-right" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  {featuredPost.image &&
                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={Analandia} width="540" height="303" alt={featuredPost.title} />
                    </figure>
                  }
                </div>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      Analândia é uma pequena cidade localizada na região central do estado de São Paulo, Brasil. Com uma população de cerca de 6.000 habitantes, é conhecida por sua tranquilidade e sua rica natureza.
                    </h3>
                  </header>
                  
                  
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">

              {/*  Section title */}
              <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Pontos turísticos</h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        
        
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={Cuscozeiro} width={352} height={198} alt="Cuscozeiro" />
            </figure> 
        
      
        
        <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
          Morro do Cuscozeiro
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">O Morro do Cuscozeiro é um dos pontos mais icônicos da cidade de Analândia, situado a menos de 1 km do loteamento Cuscoville. Com cerca de 850 metros de altitude, é um dos pontos mais altos da região e oferece uma vista privilegiada da cidade e da natureza ao seu redor.</p>
      
    </article>  
              <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        
        
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={Camelo} width={352} height={198} alt="Cuscozeiro" />
            </figure> 
        
      
        
        <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
          Morro do Camelo
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">Descubra as belezas do Morro do Camelo, um dos tesouros naturais da cidade de Analândia, localizado a menos de 1 km do loteamento Cuscoville. Com sua forma curiosa que lembra um camelo deitado, o morro é uma atração imperdível para os amantes da natureza e da aventura.</p>
      
    </article>  
              <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        
        
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={Natureza} width={352} height={198} alt="Cuscozeiro" />
            </figure> 
        
      
        
        <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
          Muita natureza !!
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">A cidade de Analândia é conhecida por suas paisagens naturais exuberantes e preservadas, o que torna o lugar perfeito para quem busca tranquilidade e conforto em meio à natureza. Com muitos parques, trilhas ecológicas e cachoeiras, a cidade é um convite para quem quer se desconectar do mundo urbano e se conectar com a natureza.</p>
      
    </article>  
              </div>

            </div>

            

          </div>
        </div>
      </section>  
      
    </>
  )
}