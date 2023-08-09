import { Banner } from '../../../../components/Banner';
import { ContainerFullBanner } from './styles';
import { ArrowRight } from 'phosphor-react';

interface PropsBanner {
    image: string,
    title: string,
    link: string,
}

export function FullBanner({ image, title, link }: PropsBanner) {
    return (
        <ContainerFullBanner>
            <Banner image={image} title={title} />
            <footer>
                <h4>{ title }</h4>
                <a href={link}>
                    ACESSAR JÁ
                    <ArrowRight size={16} weight="duotone" />
                </a>
            </footer>
        </ContainerFullBanner>
    );
}