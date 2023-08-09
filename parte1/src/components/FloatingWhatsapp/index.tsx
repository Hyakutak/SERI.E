import Ball from '../../assets/images/floating-whatsapp/whatsapp-ball.svg';
import { ContainerFloatingWhatsapp } from './styles';
import { WhatsappLogo } from 'phosphor-react';

export function FlotingWhatsapp() {
    return (
        <ContainerFloatingWhatsapp href="/">
            <img src={Ball} alt='Icone Whatsapp' />
            <section>
                <WhatsappLogo size={24} weight="light" />
                <span>Fale conosco!</span>
            </section>
        </ContainerFloatingWhatsapp>
    );
}