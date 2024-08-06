"use client"
import Image from 'next/image'
import skrepkaPic from '/public/skrepka.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
export default function nekitPage() {
  return (
    <main>
      <button className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl cursor-pointer bg-skrepka rounded-xl hover:rotate-180 m-5'
      onClick={function () {window.location.href = "/"}}>Назад</button>
      <div className='flex flex-col items-center min-h-screen justify-center font-main'>
        <title>Skrepka Bio</title>
        <div className='flex flex-row justify-around items-center font-main'>
          <Image src={skrepkaPic} alt="skrepka" title='АКА скрепка, скрепон, чурка' height={264} className='rounded-[36px] mr-5'/>
          <div className='block justify-center items-center h-auto w-auto p-3 bg-skrepka rounded-3xl text-center ml-5 font-oswald text-xl'>
            <h1 className='text-4xl font-bold'>thewindowskeprka</h1>
            <h2 className='text-2xl'>Участник узбии</h2>
            <div className='text-left font-oswald'>
              <li>День рождения — <b>22.04.2009</b></li>
              <li>Имя — <b>Александр</b></li>
              <li>День входа в узбию — <b>21.12.2021</b></li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
            </div>
          </div>
        </div>
        <div className='bg-skrepka rounded-3xl block h-52 w-[1000px] m-10 p-5 font-oswald text-2xl'>
        <p>
            [ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][вор алмазов][и железа]
            [ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО]
            [чурка][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][любит немцев][и знает их язык][ЗАСЕКРЕЧЕНО]
            [ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО][ЗАСЕКРЕЧЕНО]
        </p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam" onClick={function () {window.location.href = "https://steamcommunity.com/id/skrepka4yrka/"}}/>
          <Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" onClick={function () {window.location.href = "https://www.youtube.com/channel/UCmWH4KQz5Aec1p_E6-G3wjA"}}/>
          <Image src={telegramPic} height={160} className='rounded-[50px] cursor-pointer' alt="telegram" onClick={function () {alert("Он скрыл свой юз в тг :(")}}/>
        </footer>
      </div>
    </main>
  )
 
}
