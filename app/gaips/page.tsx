"use client"
import Image from 'next/image'
import gaipsPic from '/public/gaips.png'
import youtubePic from '/public/youtube.png'
import steamPic from '/public/steam.png'
import telegramPic from '/public/telegram.png'
import Link from 'next/link'
export default function gaipsPage() {
  return (
    <main>
      <Link href="/" className='fixed overflow-hidden items-center h-14 w-28 font-main text-4xl p-2 cursor-pointer bg-blue-400 rounded-xl hover:bg-blue-600 m-5'
      >Назад</Link>
      <div className='flex flex-col items-center min-h-screen justify-center font-main'>
        <title>Gaips Bio</title>
        <div className='flex flex-row justify-around items-center font-main'>
          <Image src={gaipsPic} alt="gaips" title='АКА гипс, гаипс, гайпс, гайка' height={264} className='rounded-[36px] mr-5'/>
          <div className='block justify-center items-center h-auto w-auto p-3 bg-blue-400 rounded-3xl text-center ml-5 font-oswald text-xl'>
            <h1 className='text-4xl font-bold'>gaips</h1>
            <h2 className='text-2xl'>Участник узбии</h2>
            <div className='text-left font-oswald'>
              <li>День рождения — <b>04.09.2009</b></li>
              <li>Имя — <b>Артём</b></li>
              <li>День входа в узбию — <b>31.08.2023</b></li>
              <li>Сделал этот сайт :)</li>
              <li>Делает игры на годоте</li>
              <li>Пишет ботов на питоне</li>
            </div>
          </div>
        </div>
        <div className='bg-blue-400 rounded-3xl block h-52 w-[1000px] m-10 p-5 font-oswald text-2xl'>
          <p><b>31.08.2023 в 10:01</b> был случайно приглашён <a href="/dexon" className='underline'>Дехоном</a>, а после удалён <a href="/drom" className='underline'>Дромом</a>.
            Следующая попытка входа была совершена <b>06.11.2023 в 18:49</b>, но он также был удалён через пару минут.
            Последняя, и финальная попытка была совершена <b>13.04.2024 в 12:18</b>. В этом ему помог его бот <u title="Нейросетевая Экспертная Компьютерная Интеллектуальная Технология">Некит</u>.
            Взломал <a href="/skrepka" className='underline'>Скрепку</a>, спамя через его аккаунт. Любит <a href="/nekit" className='underline'>Некита</a>, но тот его отшивает :( .
            Скопировал и оцифровал почти каждого участника УЗБИИ и перенёс их в специальные оболочки <u title="Нейросетевая Экспертная Компьютерная Интеллектуальная Технология">Некита</u>.</p>
        </div>
        <footer className='flex flex-row justify-evenly items-center'>
          <Link href="https://steamcommunity.com/id/gaips/" target='_blank' rel='noopener noreferrer'><Image src={steamPic} height={200} className='mr-48 cursor-pointer ' alt="steam"/></Link>
          <Link href="https://www.youtube.com/channel/UCIXLcJwQqJt3g_cqcczkgZw" target='_blank' rel='noopener noreferrer'><Image src={youtubePic} height={200} className='mr-48 cursor-pointer' alt="youtube" /></Link>
          <Link href="https://t.me/gaips" target='_blank' rel='noopener noreferrer'><Image src={telegramPic} height={160} className='cursor-pointer rounded-[50px]' alt="telegram" /></Link>
        </footer>
      </div>
    </main>
  )
 
}
