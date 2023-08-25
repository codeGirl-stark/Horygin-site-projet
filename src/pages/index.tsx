/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Hebergement } from '@/components/Hebergement'

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

        <div className="absolute bottom-0 lg:bottom-5 left-20 w-3/4 md:w-1/2 lg:w-[35%] h-full lg:h-4/5 border-1
          bg-blue-800 z-10 transform translate-y-1/2 md:translate-y-1/4 lg:translate-y-1/4">
          <h1 
          className="
          font-bold text-white text-6xl lg:text-7xl lg:flex lg:flex-col ml-10 mt-5 mb-0 sm:m-20 sm:mt-10 sm:mb-5
          lg:mx-10 lg:mt-10 lg:mb-5 h-30">
            RAPIDE & <span>FIABLE</span>
          </h1>

          <button 
          className="btn btn-outline normal-case text-xl font-bold text-white border-white 
              border-2  sm:border-2 px-10 rounded-full hover:bg-blue-600 hover:border-white ml-20">
            Plus d'info
          </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        </div>
      </div>

      <section className='hero bg-blue-100'>

        <div className='hero-content flex-col-reverse lg:flex-row '>

          <div className='w-full p-0 m-0 lg:w-3/4 pl-5 lg:pl-0'>
            <h2 className="font-bold text-center lg:text-left text-blue-800 text-4xl md:text-5xl lg:pt-20 ">
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
          
          <Image src="/flex.png" alt="data image" width="300" height="500" className='w-1/2 pt-[6rem] lg:pt-[1rem] lg:w-1/2 lg:mt-20'></Image>
        </div>
      </section>

      <section className="hero min-h-screen bg-center md:bg-top" 
      style={{backgroundImage: 'url(/fond1.png)'}}>
        <div className="hero-overlay bg-gradient-to-r from-blue-500 to-blue-700 opacity-60"></div>
        
        <div 
          className="border-[6px] border-blue-600 text-center w-full md:w-[89%] h-auto md:mt-[12rem] p-[3rem] pb-[5rem]
          bg-blue-200 opacity-70 rounded-[2rem] relative md:mb-[4rem]">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-10">
            Inclus avec chaque hébergement web
          </h1>
          <p className="text-xl md:text-2xl w-full md:text-center my-[2rem] md:mr-[3rem] text-white lg:px-[8rem]">
            Horygin est le partenaire idéal pour les particuliers, passionnés et entreprises. La performance
            de nos serveurs vous permet de disposer  d'une vitesse maximale pour vos projets web ! 
            L'hébergement web Horygin présente de nombreux avantages (<Link href="#"
            className='text-red-700 underline underline-offset-1'>
              détails
            </Link>).
          </p>

          <div className='flex w-full lg:justify-around flex-col lg:flex-row lg:mt-[4rem] lg:ml-3'>
            <Hebergement image="/world.png" title="Nom de domaine offert" description1="Votre nom de domaine est votre identitésur la Toile. Votre nom de domaine est OFFERT. Vous 
            avez le choix parmi les extensions les plus populaires: .fr .com .net .org .eu..." description2="Horygin est un registrar de domaines accrédité: Icann,Afnic,DNS.BNE,DNS.LU, Nominet, Eurid, Verisign..." />

            <Hebergement image="/write.png" title="Certificat SSL gratuit" description1="Protégez votre site web et gagnez la confiance de vos clients grâce au certificat SSL gratuit Let's Encrypt (htpps).
            Ce certificat rassure vos visiteurs, protège les informations sensibles des utilisateurs sur votre site web et améliore votre référencement SEO." />

            <Hebergement image="/mail.png" title="Adresses mail professionnelles" description1="Protégez votre site web et gagnez la confiance de vos clients grâce au certificat SSL gratuit Let's Encrypt (htpps).
            Ce certificat rassure vos visiteurs, protège les informations sensibles des utilisateurs sur votre site web et améliore votre référencement SEO." />
          </div>
        </div>
      </section>
 
      <section className="hero min-h-screen bg-blue-700 border-t-[5px] border-t-blue-500" 
      style={{backgroundImage: 'url(/concept.png)'}}>

        <div className="flex w-full justify-between mt-[5rem]">

          <div className="">
            <Image className="hidden lg:inline lg:ml-[60%] lg:mb-[3rem]" src="/icon1.png" alt="icone1" width={160} height={100}/>

            <div className="ml-[29%] relative">
              <div className="bg-blue-800 border-1 w-[31rem] h-[38rem] rounded-b-lg shadow-2xl 
              shadow-black z-0"> </div>

              <div className="bg-white z-10 absolute top-0 transform rounded-b-[4rem] w-[31rem] h-[10rem]"> </div>
            </div>
          </div>
          
          <div className="">
            <Image className="hidden lg:inline lg:ml-[25%] lg:mb-[3rem]" src="/icon2.png" alt="icone1" width={160} height={100}/>

            <div className="mr-[8rem] relative">
              <div className="bg-white border-1 w-[31rem] h-[38rem] rounded-b-lg shadow-2xl 
              shadow-black z-0"> </div>

              <div className="bg-blue-800 z-10 absolute top-0 transform rounded-b-[4rem] w-[31rem] h-[10rem]"> </div>
            </div>
          </div>   
        </div>
      </section>

    </main>
  )
}
