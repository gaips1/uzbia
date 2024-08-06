"use client"
import Image from 'next/image'
import nekitPic from '/public/nekit.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
export default function nekitPage() {
  return (
    <main>
      <button className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl cursor-pointer bg-neutral-700 rounded-xl hover:bg-neutral-500 m-5'
      onClick={function () {window.location.href = "/"}}>Назад</button>
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
            Был приглашён <a href="/drom" className='underline'>Дромом</a> как замена <a href="/dexon" className='underline'>Дехона</a> в момент его временного выхода из узбии. Прошёл селесту без урона (наверное). Дотер. 1000-7 гуль. Самый старший в узбии. Мистер 1488 пинга.
            Про в апексе, любит игры с крутым мувментом. Постоянно отшивает <a href="/gaips" className='underline'>Гаипса</a>.
            Обожает критиковать всё подряд. Кушает пельмени со сгущёнкой.
        </p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam" onClick={function () {window.location.href = "https://steamcommunity.com/id/nekitplay155"}}/>
          <Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" onClick={function () {window.location.href = "https://www.youtube.com/@nekitplay155"}}/>
          <Image src={telegramPic} height={160} className='rounded-[50px] cursor-pointer' alt="telegram" onClick={function () {window.location.href = "https://t.me/nekitplay155"}}/>
        </footer>
      </div>
    </main>
  )
 
}
