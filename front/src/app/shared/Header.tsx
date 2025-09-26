import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-[80px] flex items-center p-4 bg-black">
            <form className=" w-full h-[80px] flex items-center p-4">
                <input type="text" className="bg-white h-[24px] rounded-full w-[300px] px-3"/>
                <button type="submit" className="text-white px-4 hover:cursor-pointer hover:font-bold">Rechercher</button>
            </form>
            <Link href="/profil" className="h-[80px] flex items-center p-4">
                <Image src="/connexion.png" alt="Logo profil" width={32} height={32}></Image>
            </Link>
            <Link href="/" className="h-[80px] flex items-center p-4 pr-8">
                <Image src="/se-deconnecter.png" alt="Logo deconnexion" width={32} height={32}></Image>
            </Link>
        </div>
    )
}