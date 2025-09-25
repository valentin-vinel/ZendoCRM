"use client"

import Header from "@/app/shared/Header"
import Navbar from "@/app/shared/Navbar"

export default function Agenda() {
    return (
        <div className="flex">
                <Navbar />
                <div className="flex flex-col w-full h-screen bg-zinc-900">
                    <Header />
                </div>
        </div>
    )
}