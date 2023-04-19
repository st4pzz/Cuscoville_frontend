export const metadata = {
  title: 'Cuscoville',
  description: 'Page description',
}

import Image from 'next/image'

import obra1 from '@/public/images/Logo/obra1.jpg'
import obra2 from '@/public/images/Logo/obra2.jpg'
import obra3 from '@/public/images/Logo/obra3.jpg'
import obra4 from '@/public/images/Logo/obra4.jpg'

export default function Contact() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">Obras já iniciadas</h1>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Se você está em busca de um loteamento que já esteja com as obras em andamento, Cuscoville é a escolha perfeita! Com toda a infraestrutura já pronta, como asfalto, rede elétrica, rede de esgoto, iluminação pública e muito mais, os lotes em Cuscoville já estão prontos para construir.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-50">
                <Image src={obra1} alt="Team mosaic 02" width={400} height={400} className="w-full"></Image>

              </div>
              <div className="w-50">
                <Image src={obra2} alt="Team mosaic 01" width={400} height={400}  className="w-full"></Image>
              </div>
              <div className="w-50">
                <Image src={obra3} alt="Team mosaic 02" width={400} height={400}  className="w-full"></Image>
              </div>
              <div className="w-50">
                <Image src={obra4} alt="Team mosaic 01" width={400} height={400}  className="w-full"></Image>
              </div>
            </div>

          </div>


        </div>



      </section>

      
    </>
  )
}