export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}
import {Paper} from '@mui/material'
import Link from 'next/link'
export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto mb-10 px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h3">Entre em Contato com os nossos vendedores e venha conhecer o Cuscoville !!</h1>
          </div>
          {/* Page header */}
          

          {/* Form */}
          <div className="max-w-sm mx-auto">
            
            
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nome Completo <span className="text-red-600">*</span></label>
                  <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="Nome Completo" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Email <span className="text-red-600">*</span></label>
                  <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Número de celular <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="(DDD) Celular" required />
                </div>
              </div>
              
              
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-yellow-300 bg-blue-800 hover:bg-purple-700 w-full">Enviar</button>
                </div>
              </div>
            </form>
            
          </div>

        </div>
      </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-5">Plantão de Vendas</h1>
            
            <h1 className="h4  text-yellow-300 " >(19) 99992-5015</h1>
            
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-10">Nossas redes sociais</h1>
            <ul className="flex justify-center gap-10 mb-4 md:order-1 md:ml-4 md:mb-0">
              
              <li className="ml-4">
                <Link href="https://www.facebook.com/cuscovilleloteamento/?locale=pt_BR" className="flex justify-center items-center text-yellow-300 bg-blue-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>

              <li className="ml-4">
                <Link href="https://www.instagram.com/cuscoville/" className="flex justify-center items-center text-yellow-300 bg-blue-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram" target="_blank">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              
            </ul>
          </div>
    </section>
  )
}
