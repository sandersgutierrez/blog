'use strict'

import Image from 'next/image'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Image
                    src="/blog/logotipo.svg"
                    alt="Logotipo sandersgutierrez.github.io"
                    width={36}
                    height={36}
                    priority
                />
                <h2>Sanders</h2>
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <a href="/blog">Inicio</a>
                    </li>
                    <li>
                        <a href="/blog#about">Sobre Mí</a>
                    </li>
                    <li>
                        <a href="/blog#services">Servicios</a>
                    </li>
                    <li>
                        <a href="/blog#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
