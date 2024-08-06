"use client"
import Image from 'next/image'
import gaipsPic from '/public/gaips.png'
import dromPic from '/public/drom.png'
import nekitPic from '/public/nekit.png'
import skrepkaPic from '/public/skrepka.png'
import dexonPic from '/public/dexon.png'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="fixed overflow-hidden items-center">
        <h1 className="animate-text text-blue-500 font-main text-5xl whitespace-nowrap p-5 select-none
                      ">Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии!
                      Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии!</h1>
      </div> 
      <div className='items-center justify-center flex p-36'>
        <Link href="/gaips" className=" bg-blue-400 hover:scale-90 transition ease-in-out duration-500 rounded-3xl
        items-center justify-evenly flex-col flex h-64 w-72 cursor-pointer">
          <Image src={gaipsPic} alt="GAIPS" className="top-4 left-20 rounded-full"></Image>
          <p title="АКА гаипс, гайпс, гипс" className='text-4xl text-center blut text-blue-600 font-main'>GAIPS</p>
          
        </Link>

        <Link href="/drom" className=" bg-green-400 hover:scale-90 transition ease-in-out duration-500 rounded-3xl
        items-center justify-evenly flex-col flex h-64 w-72 cursor-pointer ml-52">
          <Image src={dromPic} alt="DROM" className="top-4 left-20 rounded-full"></Image>
          <p title="АКА дром, дромиус, легенда" className='text-4xl text-center blut text-green-700 font-main'>DROM</p>
          
        </Link>

        <Link href="/dexon" className=" bg-red-600 hover:scale-90 transition ease-in-out duration-500 rounded-3xl
        items-center justify-evenly flex-col flex h-64 w-72 cursor-pointer ml-52 ">
          <Image src={dexonPic} alt="DEXON" className="top-4 left-20 rounded-full"></Image>
          <p title="АКА дехон, дексон, нуб, бо" className='text-4xl text-center blut text-red-900 font-main'>DEXON</p>
        </Link>
      </div>

      <div className='items-center justify-center flex'>
        <Link href="/nekit" className=" bg-neutral-700 hover:scale-90 transition ease-in-out duration-500 rounded-3xl
        items-center justify-evenly flex-col flex h-64 w-72 cursor-pointer">
          <Image src={nekitPic} alt="NEKIT" className="top-4 left-20 rounded-full"></Image>
          <p title="АКА некит, никитка, педофил" className='text-4xl text-center blut text-neutral-500 font-main'>NEKIT</p>
        </Link>

        <Link href="/skrepka" className=" bg-skrepka hover:scale-90 transition ease-in-out duration-500 rounded-3xl
        items-center justify-evenly flex-col flex h-64 w-72 cursor-pointer ml-52">
          <Image src={skrepkaPic} alt="SKREPKA" className="top-4 left-20 rounded-full"></Image>
          <p title="АКА скрепка, скрепон, чурка" className='text-4xl text-center blut text-skrepka font-main'>SKREPKA</p>
        </Link>
      </div>

      <div className="fixed overflow-hidden items-center justify-end">
        <h1 className="animate-text2 text-blue-500 font-main text-5xl whitespace-nowrap p-12 select-none
                      ">Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии!
                      Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии! Слава узбии!</h1>
      </div> 
    </main>
  );
}
