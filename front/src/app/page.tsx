"use-client";
import Image from 'next/image';
import value1img from "../../public/dossier-ouvert.png";
import value2img from "../../public/temps-restant.png";
import value3img from "../../public/productivite.png";
import screendashboard from "../../public/screen-dashboard.png";
import avis1img from "../../public/client-pic/john.png";
import avis2img from "../../public/client-pic/sophie.png";
import avis3img from "../../public/client-pic/maxime.png";
import avis4img from "../../public/client-pic/lea.png";
// import { useState } from "react";
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = ["Solution", "Tarif", " Contact"]

  const values = [
    { 
      icon: value1img,
      title: "Centralisez vos relations",
      description: "Tous vos prospects, clients et contrats dans un seul espace clair. Fini les tableurs dispersés."
    },
    { 
      icon: value2img,
      title: "Gagnez du temps",
      description: "Un pipeline visuel et des rappels intelligents pour rester concentré sur ce qui compte : vos clients."
    },
    { 
      icon: value3img,
      title: "Boostez vos ventes",
      description: "Suivez vos opportunités et transformez plus de prospects en clients, sans complexité inutile."
    },
  ]

  const avis = [
    {
      name: "John D.",
      img: avis1img,
      score : 5,
      content: "Grâce à ce CRM, je gagne 2 heures par jour dans mon suivi client. Simple et efficace, exactement ce qu’il me fallait."
    },
    {
      name: "Sophie R.",
      img: avis2img,
      score : 5,
      content: "Enfin un outil qui ne me noie pas sous les options. Tout est clair et je peux suivre mes prospects sans prise de tête."
    },
    {
      name: "Maxime N.",
      img: avis3img,
      score : 5,
      content: "J’ai testé plusieurs CRM, mais ils étaient tous trop lourds pour une petite équipe comme la nôtre. Ici, on a exactement ce qu’il faut..."
    },
    {
      name: "Léa L.",
      img: avis4img,
      score : 5,
      content: "Avant, je jonglais entre des tableurs et des post-it… maintenant tout est centralisé. Ce CRM est simple, fluide..."
    },
  ]

  return (
    
    <div className="h-full w-full bg-background overflow-hidden">
      <header className="bg-primary">
        <nav className="flex items-center max-w-7xl m-auto justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="text-xl text-white font-bold">Zendo</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              // onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              <a key={index} href="#" className="text-sm/6 text-white hover:font-bold">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
            <a href="#" className="bg-white rounded-xl px-4 text-primary hover:font-bold">Demo</a>
            <a href="#" className="font-semibold text-white">
              Essayer <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="p-8 text-center my-12 md:max-w-2xl mx-auto">
        <h2 className="font-bold text-title text-4xl mb-4">Boostez vos résultats en organisant vos relations.</h2>
        <p className="text-primary mb-8">Centralisez vos contacts, vos rendez-vous et vos opportunités dans un CRM simple et efficace. Plus de suivi, plus de ventes, moins de stress.</p>
        <button className="btn-gradient text-white">Commencer gratuitement</button>
      </section>

      <section className="flex flex-wrap gap-12 lg:max-w-6xl m-auto mb-16">
        {values.map((val, index) => (
          <div
            key={index}
            className="flex flex-col m-auto items-center text-center w-80 p-6 rounded-2xl shadow-lg"
          >
            <Image
              src={val.icon}
              alt={val.title}
              width={75}
              height={75}
              className="w-[60] h-[60]] mb-4 bg-primary p-4 rounded-md"
            />
            <h3 className="text-xl text-primary font-bold mb-2">{val.title}</h3>
            <p className="text-primary">{val.description}</p>
          </div>
        ))}
      </section>

      <section className='flex flex-col justify-center items-center px-6 mb-16 md:max-w-4xl lg:max-w-7xl mx-auto lg:flex-row lg:gap-10'>
        <div className='mb-8'>
          <h3 className="text-xl text-primary font-bold mb-2">Un CRM clair et visuel, pensé pour votre quotidien.</h3>
          <p className="text-primary">Découvrez un tableau de bord simple et efficace : vos contacts, vos opportunités et vos tâches sont toujours accessibles en un coup d’œil. Avec une vue pipeline intuitive et un agenda intégré, vous suivez vos prospects du premier appel jusqu’à la signature, sans jamais perdre le fil.</p>
        </div>
        <Image 
          src={screendashboard}
          width={800}
          height={800}
          alt='Screen dashboard'
          className='rounded-xl border-1 w-full m-auto md:w-[550]'
        />
      </section>

      <section className='px-6 md:max-w-7xl md:mx-auto md:flex-row'>
        <h3 className="text-xl text-primary font-bold mb-4">Ils nous font déjà confiance...</h3>
        <div className='flex flex-wrap mb-16'>
          {avis.map((element, index) => (
            <article key={index} className='mb-8 p-4 rounded-xl bg-secondary max-w-[260] h-[250] m-auto'>
              <div className='flex gap-2 mb-4'>
                <Image 
                  src={element.img}
                  alt={"Photo de " + element.name}
                  width={300}
                  height={300}
                  className='rounded h-[50] w-[50]'
                />
                <div>
                  <h4 className='text-title font-bold'>{element.name}</h4>
                  <div className="flex space-x-1 text-yellow-500 text-xl">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < element.score ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-primary'>{element.content}</p>
            </article>
          ))}
        </div>
      </section>
      <button className="block m-auto btn-gradient text-white mb-16">Essayer Zendo</button>

      <footer className="bg-primary p-6">
        <div className='md:max-w-6xl md:flex md:justify-around md:items-center m-auto'>
          <div className='mb-16 px-12 md:px-0 md:mb-6'>
            <h1 className="text-xl text-white font-bold w-[260] border-b-1 lg:w-[400]">Zendo</h1>

          </div>
          <nav className='text-white flex flex-col gap-8 items-center md:flex-row'>
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}