import { Banner } from '../../../../components/Banner';
import BannerImage2 from '../../../../assets/images/banners/Banner2.svg';
import BannerImage3 from '../../../../assets/images/banners/Banner3.webp';
import { ArrowRight } from 'phosphor-react';
import { ContainerGridBanner } from './styles';

const ArrayBanner = [
    {
        id: 1,
        image: BannerImage2,
        title: 'Lorem ipsum dolor.',
        link: '/'
    },
    {
        id: 2,
        image: BannerImage3,
        title: 'Lorem ipsum dolor.',
        link: '/'
    }
]

export function GridBanner() {

    const cardBanners = ArrayBanner.map((banner) => {
        return (
            <section key={banner.id}>
                <Banner title={banner.title} image={banner.image} />
                <footer>
                    <h4>{ banner.title }</h4>
                    <a href={banner.link}>
                        ACESSAR JÁ
                        <ArrowRight size={16} weight="duotone" />
                    </a>
                </footer>
            </section>
        );
    });

    return (
        <ContainerGridBanner>
            { cardBanners }
        </ContainerGridBanner>
    );
}