/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'


export const Footer: React.FC = () =>{
    return <section className="bg-blue-100 pt-5">
        <div className='flex flex-col lg:flex-row justify-evenly text-xl text-center lg:text-start'>
            <div className='pb-0 lg:pb-10 p-10'>
                <h3 className="font-bold mb-3">Entreprise</h3>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>À propos de</Link> horygin</p>
                <p className='mb-3'>Horygin<Link href="#" className='underline underline-offset-1'> Group</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Newsroom</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Programme</Link> Horygin</p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Réseau</Link> Horygin</p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Programme de recommandation</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Programme d'affiliation</Link></p>
            </div>

            <div className='pb-0 lg:pb-10 p-10 font-bold '>
                <h3 className="mb-3">Communauté</h3>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Startup Guide</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Digital Guid</Link></p>
            </div>

            <div className='pb-0 lg:pb-10 p-10'>
                <h3 className="font-bold mb-3">Assistance</h3>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Contact</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Support</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Centre d'Assistance</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Espace client</Link></p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Vérifier l'authenticité d'un email</Link> Horygin</p>
                <p className='mb-3'><Link href="#" className='underline underline-offset-1'>Page de statut</Link></p>
            </div>
        </div>

        <div className="border-2 border-white mt-5 lg:mt-0 w-[40%] mx-[30%]"></div>

        <p className="text-xl leading-8 mt-10 lg:mt-20 mb-3 text-center">Inscrivez vous et nous vous enverrons les meilleures offres</p>

        <div className="flex">
            <input type="text" placeholder="Votre adresse E-mail" className="input input-md border-black border-2 rounded-none w-full max-w-sm text-xl ml-[5%] md:ml-[15%] lg:ml-[33%]" />
            <button className="btn bg-blue-800 hover:bg-blue-800 ml-2 mr-[5%] lg:mr-0 border-x-0 border-[5px] border-dashed border-white normal-case w-[10rem] rounded-none text-white">Abonnez - vous</button>
        </div>

        <div className="flex justify-center mt-10">
            <Image className="mx-5" src="/link.png" alt="linkedIn" width={30} height={30} />
            <Image className="mx-5" src="/face.png" alt="facebook" width={30} height={30} />
            <Image className="mx-5" src="/insta.png" alt="instagram" width={30} height={30} />
        </div>

        <p className='bg-blue-700 border-solid border-1 p-3 text-white text-base font-black text-center mt-5'> Il vous reste des questions? Consultez notre
        <Link href="#"> FAQ</Link> ou appelez-nous au 000 00 00 00 00</p>

        <Image className="mx-[20%] md:mx-[30%] lg:mx-[40%] pt-10" src="/logo2.png" alt="le logo" width={300} height={200} />
  </section>
}