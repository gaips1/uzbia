"use client"
import Image from 'next/image'
import dromPic from '/public/drom.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
import Link from 'next/link'
export default function dromPage() {
  return (
    <main>
      <Link href="/" className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl p-2 cursor-pointer bg-green-400 rounded-xl hover:bg-green-700 m-5'
      >Назад</Link>
      <div className='flex flex-col items-center min-h-screen justify-center font-main'>
        <title>Drom Bio</title>
        <div className='flex flex-row justify-around items-center font-main'>
          <Image src={dromPic} alt="drom" title='АКА drom, дром, дромиус, легенда' height={264} className='rounded-[36px] mr-5'/>
          <div className='block justify-center items-center h-auto w-auto p-3 bg-green-400 rounded-3xl text-center ml-5 font-oswald text-xl'>
            <h1 className='text-4xl font-bold'>DromiusII</h1>
            <h2 className='text-2xl'>Лидер узбии</h2>
            <div className='text-left font-oswald'>
              <li>День рождения — <b>01.08.2007</b></li>
              <li>Имя — <b>Никита</b></li>
              <li>День входа в узбию — <b>21.12.2021</b></li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
              <li>[ЗАСЕКРЕЧЕНО]</li>
            </div>
          </div>
        </div>
        <div className='bg-green-400 rounded-3xl block h-52 w-[1000px] m-10 p-[10px] pl-5 font-oswald text-[21px]'>
          <p>Группа «Узбия» была создана ровно 21 декабря 2021 года в 19:07. В начале своего пути, в 2021–2022 годах, участники группы часто позволяли себе оскорбления и неадекватное поведение. Однако сейчас в «Узбии» царит мир и гармония.
          Основатель группы, Дром, очень гордится тем, что создал такое замечательное сообщество. На момент 21 мая 2024 года Дром учится в колледже и получает отличные оценки. Он родился первого августа 2007 года в Санкт-Петербурге.
          Кроме того, у Дрома есть навыки моделирования и анимации в программе Blender, а также умение высасывать навыки у своих друзей.</p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Link href="https://steamcommunity.com/id/dexonbot/" target='_blank' rel='noopener noreferrer'><Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam"/></Link>
          <Link href="https://www.youtube.com/channel/UCkihKmlWLJyOGpk4G43hnfA" target='_blank' rel='noopener noreferrer'><Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" /></Link>
          <Link href="https://t.me/drom6906" target='_blank' rel='noopener noreferrer'><Image src={telegramPic} height={160} className='mr-48 cursor-pointer rounded-[50px]' alt="telegram" /></Link>
        </footer>
      </div>
    </main>
  )
 
}
