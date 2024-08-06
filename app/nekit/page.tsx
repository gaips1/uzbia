"use client"
import Image from 'next/image'
import nekitPic from '/public/nekit.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
import Link from 'next/link'
export default function nekitPage() {
  return (
    <main>
      <Link href="/" className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl p-2 cursor-pointer bg-neutral-700 rounded-xl hover:bg-neutral-500 m-5'
      >Назад</Link>
      <div className='flex flex-col items-center min-h-screen justify-center font-main'>
        <title>Nekit Bio</title>
        <div className='flex flex-row justify-around items-center font-main'>
          <Image src={nekitPic} alt="nekit" title='АКА некит, никитка, педофил' height={264} className='rounded-[36px] mr-5'/>
          <div className='block justify-center items-center h-auto w-auto p-3 bg-neutral-700 rounded-3xl text-center ml-5 font-oswald text-xl'>
            <h1 className='text-4xl font-bold'>Nekit</h1>
            <h2 className='text-2xl'>Участник узбии</h2>
            <div className='text-left font-oswald'>
              <li>День рождения — <b>09.07.2005</b></li>
              <li>Имя — <b>Никита</b></li>
              <li>День входа в узбию — <b>30.08.2023</b></li>
              <li>Дед инсайд</li>
              <li>Хардкор геймер</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
            </div>
          </div>
        </div>
        <div className='bg-neutral-700 rounded-3xl block h-52 w-[1000px] m-10 p-3 font-oswald text-[30px]'>
        <p>
            Был приглашён <Link href="/drom" className='underline'>Дромом</Link> как замена <Link href="/dexon" className='underline'>Дехона</Link> в момент его временного выхода из узбии. Прошёл селесту без урона (наверное). Дотер. 1000-7 гуль. Самый старший в узбии. Мистер 1488 пинга.
            Про в апексе, любит игры с крутым мувментом. Постоянно отшивает <Link href="/gaips" className='underline'>Гаипса</Link>.
            Обожает критиковать всё подряд. Кушает пельмени со сгущёнкой.
        </p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Link href="https://steamcommunity.com/id/nekitplay155" target='_blank' rel='noopener noreferrer'><Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam"/></Link>
          <Link href="https://www.youtube.com/@nekitplay155" target='_blank' rel='noopener noreferrer'><Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" /></Link>
          <Link href="https://t.me/nekitplay155" target='_blank' rel='noopener noreferrer'><Image src={telegramPic} height={160} className='cursor-pointer rounded-[50px]' alt="telegram" /></Link>
        </footer>
      </div>
    </main>
  )
 
}
