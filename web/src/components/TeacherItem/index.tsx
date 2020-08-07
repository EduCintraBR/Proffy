import React from 'react';

import './styles.css'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

const TeachersItem = () => {
    return (
        <article className="teacher-item">
            <header>
            <img src="https://avatars3.githubusercontent.com/u/40708089?v=4" alt="Eduardo Cintra"/>
            <div>
                <strong>Eduardo Cintra</strong>
                <span>Informática</span>
            </div>
            </header>

            <p>
            Entusiasta das melhores tecnologias da informática.
            <br/><br/>
            Apaixonado por explodir mentes com conhecimento na area de TI e por mudar a concepção das pessoas leigas acerca da tecnologia.
            </p>

            <footer>
            <p>
                Preço/Hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={WhatsAppIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeachersItem