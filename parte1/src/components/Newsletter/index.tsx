import { ContainerNewsletter } from './styles';
import { Envelope } from 'phosphor-react';

export function Newsletter() {
    return (
        <ContainerNewsletter>
            <article>
                <header>
                    <h2>Newsletter</h2>
                    <span>Cadastre seu e-mail e receba <strong>novidades!</strong></span>
                </header>
                <label>
                    <Envelope size={18} />
                    <input placeholder='seu@email.com.br' />
                </label>
                <button>
                    Cadastrar
                </button>
            </article>
        </ContainerNewsletter>
    );
}