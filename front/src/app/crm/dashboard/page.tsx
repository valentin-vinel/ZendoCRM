"use client"

import Header from "@/app/shared/Header"
import Navbar from "@/app/shared/Navbar"

export default function Dashboard() {
    return (
        <>
            <div className="flex">
                <Navbar />
                <div className="flex flex-col w-full h-screen bg-zinc-900">
                    <Header />
                    <div className="main p-6 mx-auto grid grid-cols-3 gap-4">
                        <div className="text-white flex gap-14 col-span-3">
                            <div className="w-[230px] p-4 rounded-xl bg-black ">
                                <p className="flex justify-between">
                                    <span>Prospects</span>
                                    <span className="font-bold">14</span>
                                </p>
                            </div>
                            <div className="w-[230px] p-4 rounded-xl bg-black">
                                <p className="flex justify-between">
                                    <span>Clients</span>
                                    <span className="font-bold">26</span>
                                </p>
                            </div>
                            <div className="w-[230px] p-4 rounded-xl bg-black">
                                <p className="flex justify-between">
                                    <span>Opportunités</span> 
                                    <span className="font-bold">7</span>
                                </p>
                            </div>
                            <div className="w-[230px] p-4 rounded-xl bg-black">
                                <p className="flex justify-between">
                                    <span>CA</span> 
                                    <span className="font-bold">€ 2753</span>
                                </p>
                            </div>
                        </div>

                        <article className=" text-white bg-black h-[400px] rounded-xl p-4">
                            <h2 className="font-bold">Agenda du jour</h2>
                            <div className="py-4">
                                <p><span className="text-gray-600">9:30 </span>- Prospection</p>
                            </div>
                            <div className="py-4">
                                <p><span className="text-gray-600">11:30 </span>- RDV</p>
                                <p className="ml-12 text-gray-400">John Doe</p>
                            </div>
                            <div className="py-4">
                                <p><span className="text-gray-600">14:30 </span>- Réunion</p>
                                <p className="ml-12 text-gray-400">x100</p>
                            </div>
                        </article>
                        <article className="w-full text-white bg-black h-[400px] rounded-xl p-4 col-span-2">
                            <h2 className="font-bold">Affaires en cours</h2>
                        </article>
                        <article className="w-full text-white bg-black h-[300px] rounded-xl p-4 col-span-3">
                            <h2 className="font-bold">Contacts récents</h2>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}