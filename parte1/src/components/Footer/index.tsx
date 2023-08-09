import { ContainerFooter, SubFooter, NavFooter, ContainerSocial } from './styles';
import LogoSerie from '../../assets/images/logo/logo-serie-footer.svg';
import LogoSerieSubFooter from '../../assets/images/logo/logo-seri.e-subfooter.svg';
import LogoTray from '../../assets/images/logo/logo-fbits-branco.svg';
import { Newsletter } from '../Newsletter';
import { InstagramLogo, FacebookLogo } from 'phosphor-react';

export function Footer() {
    return (
        <ContainerFooter>
            <Newsletter />
            <article>
                <img src={LogoSerie} alt='Logo Serie' />
                <NavFooter>
                    <h4>Precisa de ajuda?</h4>
                    <ul>
                        <li>
                            <a href='/'>Sobre</a>
                        </li>
                        <li>
                            <a href='/'>Politicas da Loja</a>
                        </li>
                        <li>
                            <a href='/'>Politicas de Privacidade</a>
                        </li>
                        <li>
                            <a href='/'>Contato</a>
                        </li>
                    </ul>
                </NavFooter>
                <ContainerSocial>
                    <h4>redes sociais</h4>
                    <div>
                        <InstagramLogo size={24} />
                        <FacebookLogo size={24} weight="fill"  />
                    </div>
                </ContainerSocial>
            </article>
            <SubFooter>
                    <section>
                        <aside>
                            <img src={LogoTray} alt='Logo Tray Corp' />
                            <img src={LogoSerieSubFooter} alt='Logo Seri.e' />
                        </aside>
                        <h3>@2023 Todos os direitos reservados</h3>
                    </section>
                </SubFooter>
        </ContainerFooter>
    );
}