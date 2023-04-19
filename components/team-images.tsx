import Image from 'next/image'

import obra1 from '@/public/images/Logo/obra1.jpg'
import obra2 from '@/public/images/Logo/obra2.jpg'
import obra3 from '@/public/images/Logo/obra3.jpg'
import obra4 from '@/public/images/Logo/obra4.jpg'

export default function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="absolute h-auto" style={{ top: '45%', width: '41.67%', maxWidth: '320px' }} data-aos="fade-right">
              <Image src={obra1} width="320" height="240" alt="Team mosaic 02" />
            </figure>
            <figure className="relative mx-auto h-auto" style={{ width: '78.13%', maxWidth: '600px' }} data-aos="fade-down" data-aos-delay="100">
              <Image src={obra2} width="600" height="338" alt="Team mosaic 01" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '8.5%', right: '0', width: '32.55%', maxWidth: '250px' }} data-aos="fade-left" data-aos-delay="200">
              <Image src={obra3} width="250" height="188" alt="Team mosaic 03" />
            </figure>
            <figure className="absolute h-auto" style={{ bottom: '0', right: '20%', width: '25.52%', maxWidth: '196px' }} data-aos="fade-up" data-aos-delay="300">
              <Image src={obra4} width="196" height="196" alt="Team mosaic 04" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
