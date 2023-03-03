'use strict'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Services from '@/components/Services'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Head from 'next/head'

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Inicio</title>
                <meta name="description" content="Mi blog web personal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                <link rel="icon" href="/blog/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Landing />
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
