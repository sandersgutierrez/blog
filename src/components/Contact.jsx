'use strict'

export default function Contact() {
    return (
        <section id="contact">
            <h1>Contáctame</h1>
            <form method="post">
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label for="message">Mensaje:</label>
                    <textarea type="text" id="message" name="message"></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </section>
    )
}
