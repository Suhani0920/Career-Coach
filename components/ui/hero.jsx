 import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Image from 'next/image'
 
 const HeroSection = () => {
   return (
     <section className="w-full pt-36 md:pt-48 pb-10 ">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="gradient-title">
                    
                     Your AI Career Coach for
                     <br/>
                     Professional Success
                </h1>
                <p>
                    Unlock Your Potential. Define Your Path.
                    Personalized AI Insights for Student Career Success.
                </p>
            </div>

          <div>
            <Link href="/dashboard">
            <Button sign="lg" className="px-8">Get Started</Button>
            </Link>

             <Link href="/dashboard">
            <Button sign="lg" className="px-8" variant="outline">Get Started</Button>
            </Link>
            </div>  

            <div>
                <div>
                    <Image
                     /*src={"/banner.jpeg"} 
                     width={1280}
                     height={720}
                     alt="Banner"
                     className="rounded-lg shadow-2xl border mx-auto"
                     priority
                     */  />
                </div>
            </div>
        </div>
     </section>
   )
 }
 
 export default HeroSection