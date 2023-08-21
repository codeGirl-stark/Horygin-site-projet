import Image from "next/image"; 
import Link from "next/link";//pour tout appel de fonction on doit importer

export const Header: React.FC = () => {
    return <header className="navbar bg-white shadow border-solid border-5">
        <div className="navbar-start my-0">
            <Link href="/">
                <Image src="/logo.png" alt="le logo" width={220} height={100} />
            </Link>
        </div>

        <div className="navbar-end  text-blue-800 font-medium">
            <button
            aria-label="toggle button"
            aria-expanded="false"
            id="menu-btn"
            className=" mr-20 pointer xl:hidden">
                <Image src="/menu.png" alt="" width="15" height={15}></Image>
            </button>
            
            <ul id="toggled-menu"
            className="text-lg border-solid border-2 p-10 absolute top-3 right-12 
            -translate-y-full -z-10 items-center xl:border-none
            xl:transform-none xl:z-10 xl:menu xl:menu-horizontal xl:text-xl">
                <li>
                    <Link href="#">
                        <Image className="hidden xl:inline" src="/personne.png" alt="personnes" width={20} height={20} />
                        <span>A propos</span>
                        
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <Image className="hidden xl:inline" src="/contact.png" alt="call" width={20} height={20} />
                        <span>Contact</span>
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <Image className="hidden xl:inline" src="/individu.png" alt="individu" width={25} height={25} />
                        <span>Connexion</span>
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <Image className="hidden xl:inline" src="/inscription.png" alt="iinscription" width={15} height={15} />
                        <span>Inscription</span>
                    </Link>
                </li>
            </ul>
        </div>

    </header>
}