import Head from 'next/head'
import { Inter } from 'next/font/google'
// import ManualHeader from '@/components/ManualHeader'
import Header from "../components/Headers" 
import LotteryEntrance from "../components/LotteryEntrance"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Contract Lottery/Raffle</title>
        <meta name="description" content="Our smart Contract Lottery/Raffle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <LotteryEntrance/>
    </div>
  )
}
