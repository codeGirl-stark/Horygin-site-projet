/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="font-Montserrat">
         
      <p className='bg-blue-700 border-solid border-1 p-6 text-white text-base font-black text-center'> En plus de coder, un développeur peut intervenir dans la phase de conception, participer à 
        l'élaboration des algorithmes, prendre du recul sur les attenttes de l'utilisateur final, 
        rédiger la documentation.</p>

      <div className="relative">
        <div className="z-0">
          <Image src="/lameuf.png" alt="Une programmeuse" width="4047" height="1557" />
        </div>

        <div 
        className="absolute bottom-0 lg:bottom-5 left-20 w-3/4 md:w-1/2 lg:w-1/3 h-full lg:h-4/5 border-1
          bg-blue-800 pb-10 z-10 transform translate-y-1/2 md:translate-y-1/4 lg:translate-y-1/4">
          <h1 
          className="
          font-bold text-white text-6xl lg:text-7xl lg:flex lg:flex-col ml-10 mt-5 mb-0 sm:m-20 sm:mt-10 sm:mb-5
          lg:mx-10 lg:mt-10 lg:mb-5 h-30">
            RAPIDE & <span>FIABLE</span>
          </h1>

          <button 
          className="btn btn-outline normal-case text-xl font-bold text-white border-white 
              border-1  sm:border-2 px-10 rounded-full hover:bg-blue-600 hover:border-white ml-20">
            Plus d'info
          </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        </div>
      </div>

      <section className='hero bg-blue-100'>

        <div className='hero-content flex-col lg:flex-row '>
          <div className='w-full lg:w-3/4 pl-5 lg:pl-0'>
            <h2 className="font-bold text-blue-800 text-4xl md:text-5xl pt-40 lg:pt-20 ">
              Des solutions complètes pour une présence en ligne réussie
            </h2>
            <p className='text-2xl md:text-3xl text-gray-500 mt-10'>
              Bénéficiez d'une assistance gratuite 24h/24 et 7j/7
            </p>
            <div className="mt-10 flex flex-row">
              <Image src="/checklist.png" alt="checklist" width="40" height="10"></Image>
              <p className="text-2xl md:text-3xl text-blue-700 font-bold">Hautement évolutif</p>
            </div>
            <div className="mt-10 flex flex-row">
              <Image src="/checklist.png" alt="checklist" width="40" height="10"></Image>
              <p className="text-2xl md:text-3xl text-blue-700 font-bold">Performance maximum</p>
            </div>
            <div className="mt-10 flex flex-row">
              <Image src="/checklist.png" alt="checklist" width="40" height="10"></Image>
              <p className="text-2xl md:text-3xl text-blue-700 font-bold">Souveraineté totale des données</p>
            </div>
          </div>
          
          <Image src="/flex.png" alt="data image" width="300" height="500" className='hidden lg:block  w-full lg:w-1/2 lg:mt-20'></Image>
        </div>
      </section>

      <section
      className="hero min-h-screen bg-top relative" style={{backgroundImage: 'url(/fond1.png)'}}>
        <div className="hero-overlay bg-gradient-to-r from-blue-600 to-blue-700 opacity-60 absolute inset-0"></div>
        <div 
          className="border-4 border-blue-500 text-center w-11/12 h-auto mt-[11rem] p-[3rem] 
          rounded-3xl relative Z-10 bg-clip-content-box text-neutral">

          <h3 className="text-6xl font-bold text-white">
            Inclus avec chaque hébergement web
          </h3>
          <p className="text-2xl text-center my-[2rem] mr-[3rem] text-white px-[8rem]">
            Horygin est le partenaire idéal pour les particuliers, passionnés et entreprises. La performance
            de nos serveurs vous permet de disposer  d'une vitesse maximale pour vos projets web ! 
            L'hébergement web Horygin présente de nombreux avantages (<Link href="#"
            className='text-red-700 underline underline-offset-1'>
              détails
            </Link>).
          </p>

          <div className='flex w-full md:justify-around flex-col md:flex-row mt-[5rem]'>
              <textarea placeholder="Premier texte" cols={30} rows={30}></textarea>
              <textarea placeholder="Deuxième texte" cols={30} rows={30}></textarea>
              <textarea placeholder="Troisième texte" cols={30} rows={30}></textarea>
          </div>
        </div>
      </section>

    </main>
  )
}
