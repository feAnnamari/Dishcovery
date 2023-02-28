import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <p className='text-red-500 text-bold text-4xl'>hello</p>
  
    </main>
  )
}
