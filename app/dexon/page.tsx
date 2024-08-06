"use client"
import Image from 'next/image'
import dexonPic from '/public/dexon.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
export default function dexonPage() {
  return (
    <main>
      <button className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl cursor-pointer bg-red-600 rounded-xl hover:bg-red-800 m-5'
      onClick={function () {window.location.href = "/"}}>Назад</button>
      <div className='flex flex-col items-center min-h-screen justify-center font-main'>
        <title>Dexon Bio</title>
        <div className='flex flex-row justify-around items-center font-main'>
          <Image src={dexonPic} alt="dexon" title='АКА дехон, дексон, бот, нуб, пендехон' height={264} className='rounded-[36px] mr-5'/>
          <div className='block justify-center items-center h-auto w-auto p-3 bg-red-600 rounded-3xl text-center ml-5 font-oswald text-xl'>
            <h1 className='text-4xl font-bold'>Dexon</h1>
            <h2 className='text-2xl'>Участник узбии</h2>
            <div className='text-left font-oswald'>
              <li>День рождения — <b>27.01.2007</b></li>
              <li>Имя — <b>Руслан</b></li>
              <li>День входа в узбию — <b>21.12.2021</b></li>
              <li>Музыкант</li>
              <li>Пк за миллион</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
            </div>
          </div>
        </div>
        <div className='bg-red-600 rounded-3xl block h-52 w-[1000px] m-10 p-7 font-oswald text-3xl'>
          <p>
            Зашёл в узбию одновременно с <a href="/drom" className='underline'>Дромом</a>.
            Пишет крутые песенки (к сожалению без вокала). Был назван фурри из-за того что играл в фурри плейс в роблоксе.
            Обладатель пк за миллион, в который входит ссд на 2ТБ, ртх 4090 и гипермощный процессор (intel core I99999-K).
            Делает музыку по 10 лет. Ржачно бомбит.
            </p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam" onClick={function () {window.location.href = "https://steamcommunity.com/profiles/76561199039237595"}}/>
          <Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" onClick={function () {window.location.href = "https://www.youtube.com/@dexon9046"}}/>
          <Image src={telegramPic} height={160} className='rounded-[50px] cursor-pointer' alt="telegram" onClick={function () {window.location.href = "https://t.me/Dexoneer"}}/>
        </footer>
      </div>
    </main>
  )
 
}
