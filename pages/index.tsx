import { Inter } from '@next/font/google'
import Header from '../components/header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}
