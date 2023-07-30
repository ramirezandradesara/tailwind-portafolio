import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Image from "next/image";
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import lol from '../public/lol.png'
import money from '../public/money.jpg'
import booking from '../public/booking.png'
import book from '../public/book.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sara Ramírez Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {/* <section className=" min-h-screen" > */}
        <section  >
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>
              Sara R. A.
            </h1>
            <ul className='flex items-center'>
              <li>
                {!darkMode
                  ? <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-2xl'
                  />
                  : <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-2xl dark:text-white' />
                }
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Sara Ramírez
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-white'>
              Frontend developer and UX/UI designer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          {/* <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 m-20 overflow-hidden md:h-96 md:w-96 '>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div> */}
        </section>
        <section>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} style={{ display: 'inline-flex' }} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant and attractive designs following core design theory for you.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} style={{ display: 'inline-flex' }} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Performant code</h3>
              <p className='py-2'>
                Programming clean, scalable and performant code with the best technologies. 
              </p>
              <h4 className='py-4 text-teal-600'>Programming tools I use</h4>
              <p className='text-gray-800 py-1'>Next.js</p>
              <p className='text-gray-800 py-1'>Typescript</p>
              <p className='text-gray-800 py-1'>React.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} style={{ display: 'inline-flex' }} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Great experience</h3>
              <p className='py-2'>
                With several months of experience, working in companies and as freelancer.  
              </p>
              <h4 className='py-4 text-teal-600'>Work history</h4>
              <p className='text-gray-800 py-1'>Hirefy</p>
              <p className='text-gray-800 py-1'>Digital Money</p>
              <p className='text-gray-800 py-1'>Digital Booking</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              Porfolio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my jouney, I've worked for <span className='text-teal-500'>startups </span>
              and also done work as a <span className='text-teal-500'>freelancer</span>.
            </p>        
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={lol}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={money}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={booking}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={book}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive" />
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}