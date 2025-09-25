import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black text-white w-[200px] h-screen flex flex-col">
            <Link href="/crm/dashboard" className="p-6 text-center font-bold text-xl h-[80px] bg-black">Zendo</Link>
            <Link href="/crm/dashboard" className="p-5 hover:bg-white hover:text-black hover:font-bold">Dashboard</Link>
            <Link href="/crm/contacts" className="p-5 hover:bg-white hover:text-black hover:font-bold">Contacts</Link>
            <Link href="/crm/opportunites" className="p-5 hover:bg-white hover:text-black hover:font-bold">Opportunités</Link>
            <Link href="/crm/agenda" className="p-5 hover:bg-white hover:text-black hover:font-bold">Agenda</Link>
            <Link href="/crm/parametres" className="p-5 hover:bg-white hover:text-black hover:font-bold mt-auto mb-6">Parametres</Link>
        </nav>
    )
}