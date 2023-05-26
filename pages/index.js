import { Hero } from '@/components/Hero'
import Image from 'next/image'
import { FlexLayout } from '@/components/FlexLayout'
import { Layout } from '@/components/Layout'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'



export default function Home() {
  return (
    <div>
      <title>Prakash&Rajguru-chartered account</title>
      <Hero heading='New-age firm of substance' message='professionalism, knowledge, trust & independence define us'/>
     <FlexLayout/>
     <Layout/>
     <Contact/>
     <Footer/>
    </div>
  )
}
