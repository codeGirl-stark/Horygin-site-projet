/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Hebergement } from '@/components/Hebergement'
import { Know } from '@/components/Know'
import { Avis } from '@/components/Avis'

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
          font-[1000] text-white text-6xl lg:text-7xl lg:flex lg:flex-col ml-10 mt-5 mb-0 sm:m-20 sm:mt-10 sm:mb-5
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
            <h2 className="font-[900] text-center lg:text-left text-blue-700 text-4xl md:text-5xl lg:pt-20 ">
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

      <section className="hero min-h-screen bg-center lg:bg-left-top" 
      style={{backgroundImage: 'url(/fond1.png)'}}>
        <div className="hero-overlay bg-gradient-to-r from-blue-500 to-blue-700 opacity-60"></div>
        
        <div className="hero border-[6px] border-blue-600 w-full md:w-[89%] text-center h-auto md:mt-[15rem]
           rounded-[2rem] relative md:mb-[8rem]">

          <div className="hero-overlay bg-blue-200 opacity-70 rounded-[2rem]"></div>
          
          <div className="hero-content flex flex-col pb-[3rem]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:mt-10 font-[1000] text-white relative z-10">
              Inclus avec chaque hébergement web
            </h1>
            <p className="text-xl md:text-2xl w-full md:text-center text-white lg:px-[6rem]">
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

        </div>
      </section>
 
      <section className="hero min-h-screen bg-center lg:bg-top bg-blue-700 border-t-[5px] border-t-blue-500" 
      style={{backgroundImage: 'url(/concept.png)'}}>

        <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:mt-[5rem] lg:mb-[5%] xl:mb-[5rem]">

          <div className="lg:ml-[0%] xl:ml-[9%]">
            <Image className="hidden lg:inline lg:ml-[30%] lg:mb-[3rem]" src="/icon1.png" alt="icone1" width={160} height={100}/>

            <div className="mt-[10%] lg:mt-0 mx-[5%] lg:mr-0 lg:ml-0 relative">
              <div className="bg-blue-800 border-1 w-full lg:w-[31rem] h-[20rem] lg:h-[40rem] xl:h-[51rem] rounded-b-2xl lg:rounded-b-lg shadow-2xl 
              shadow-black z-0"> </div>

              <div className="bg-white z-10 absolute top-0 transform rounded-b-[4rem] w-full lg:w-[31rem] h-[6rem] lg:h-[10rem]"> </div>
            </div>
          </div>
          
          <div className="lg:mr-[10%] lg:ml-[1%] xl:mr-[6%]">
            <Image className="hidden lg:inline lg:ml-[32%] lg:mb-[3rem]" src="/icon2.png" alt="icone1" width={160} height={100}/>

            <div className="mb-[5rem] lg:mb-0 mt-[5%] lg:mt-0 mx-[5%] lg:ml-0 relative">
              <div className="bg-white border-1 w-full lg:w-[31rem] h-[20rem] lg:h-[40rem] xl:h-[51rem] rounded-b-2xl lg:rounded-b-lg shadow-2xl 
              shadow-black z-0"> </div>

              <div className="bg-blue-800 z-10 absolute top-0 transform rounded-b-[4rem] w-full lg:w-[31rem] h-[6rem] lg:h-[10rem]"> </div>
            </div>
          </div>   
        </div>
      </section>

      <section>
        <h1 className="text-blue-600 text-5xl lg:text-6xl font-[1000] text-center mt-[10%] mb-[5%] xl:mx-[20%]">
          En savoir plus sur l'hébergement web mutualisé
        </h1>
        
        <div className=" flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <Know title="Qu'est-ce qu'un hébergement web?" description="Tous les sites que vous visitez sont accessibles grâce à un nom de domaine et un hébergement web. Le nom de domaine est l'adresse internet du 
            site ou URL(ex: www.lws.fr). l'hébergement web est simplement l'espace de stockage contenant l'ensemble des fichiers de votre site Web."></Know>

            <Know title="Nous sommes toujours à vos côtés" description="Tous nos packs contiennent au moins 1 nom de domaine OFFERT (enregistrement ou transfert) pour toute souscription à un de nos contrats. Vous disposez 
            ainsi d'un pack complet vous permettant de gérer à la fois vos noms de domaine et votre hébergement."></Know>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-center">
            <Know title="Passez à l'hébergement illimité" description="Tous nos packs vous offrent le trafic illimité pour que vous puissiez vous concentrer sur vos projets en toute sérénité. Enfin pour un hébergement 
            Web totalement débridé, le pack LWS Performance répond à toutes vos exigences.Les bases de données MySQL 5, les comptes emails ou encore les accès FTP sont egalement illimités!"></Know>

            <Know title="Un hébergement hautement sécurisé" description="Avec la redondance des disques durs, vous êtes à l'abri d'éventuelles pertes de domaines ou d'une indisponibilité de votre site. Chaque site web 
            est hébergé sur des serveurs avec plusieurs disques durs redondés. Nous vous guarantissons ainsi le bon fonctionnement de votre site, même en cas d'incident technique !"></Know>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-overlay bg-blue-300 opacity-30"></div>
        <div>
          <h1 className="text-[6rem] lg:text-[9rem] text-center font-[1000] text-blue-500 opacity-20 pt-[5%] mb-5">AVIS</h1>
          
          <div className="flex flex-col lg:flex-row lg:justify-evenly">
            <Avis image="/avis.png" title="Très bon service client, je recommande" description="Chaque fois que j'ai rencontré un problème avec une commande ou autre, le service client était disponible très rapidement , accueillant, 
            et surtout a su répondre à mes besoins en un rien de temps. Bravo IONOS, surtout ne changez pas. C'est ce qui fait que je suis venu chez vous et que j'y resterai !" author="Florian Gros - 24 dec. 2022"></Avis>

            <Avis image="/avis.png" title="J'ai eu l'occasion d'avoir le service..." description="J'ai eu l'occasion d'avoir le service clientèle au téléphone suite à des problèmes rencontrés. Juste incroyable, il n'y a pas d'autre mot.
            Je n'ai jamais vu des personnes aussi gentils, patients, qualifiés qui accompagnent de A à Z. Dommage que l'on pusse mettre seulement 5 étoiles ! 😊" author="Victor Pentscheff - 22 dec. 2022"></Avis>

            <Avis image="/avis.png" title="L'hébergeur web et de ventes de noms de..." description="L'hébergeur web et de ventes de noms de domaines le moins chère du marché ! Je suis trop content de mettre pas fait douiller comparé à 
            ces voleurs d'OVH" author="Jordan NAXOS - 20 dec. 2022"></Avis>
          </div>

          <p className="text-black text-lg text-center lg:text-start font-semibold mt-[4rem] lg:ml-[4rem] mb-[25%] lg:mb-[15%]">Plus d'info concernant le  
            <Link href="#" className='underline underline-offset-1'> fonctionnement des avis sur</Link> Horygin </p>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-blue-900 from-10% via-blue-500 via-40% to-blue-800 to-90%">
        
        <Image className="absolute bottom-[65%] lg:bottom-[58%] w-[40%] sm:w-[25%] left-[15%] lg:left-[10%]" src="/img.png" alt="programmeurs" width={400} height={400} />
        
        <div className="flex justify-around pt-[13%] pb-10">
          <div className='text-white font-bold ml-5'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl '>Besoin de plus d'informations ?</h1>
            <br />
            <p className='text-xl sm:text-2xl lg:text-3xl'>Contactez - Nous</p>
            <br />
            <div className='flex text-xl lg:text-2xl'>
              <Image className="mr-3" src="/contact.png" alt="contact" width={35} height={35} />
              <p className='bg-blue-600 rounded-full px-2'>000 00 00 00 00</p>
            </div>
          </div>

          <Image className='w-[20%]' src="/img2.png" alt="logo" width={350} height={300} />
        </div>
      </section>

    </main>
  )
}
