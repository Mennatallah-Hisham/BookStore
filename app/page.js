import Image from 'next/image'
import { Inter } from 'next/font/google'

import Cart from './Icons/Cart'
import Wishlist from './Icons/Wishlist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    
        <div>
          <Cart/>
          <Wishlist/>
        </div>
      

     
   
    </main>
  )
}
