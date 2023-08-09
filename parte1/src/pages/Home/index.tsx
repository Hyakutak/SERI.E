import { FullBanner } from './components/FullBanner';
import FullBannerImage from '../../assets/images/banners/Banner1.svg';
import { GridBanner } from './components/GridBanner';
import { CentralBanner } from './components/CentralBanner';
import { Video } from './components/Video';
import { SlideProducts } from './components/SlideProducts';

export function Home() {
    return (
        <>
            <FullBanner image={FullBannerImage} title="Lorem ipsum dolor." link='/' />
            <GridBanner />
            <SlideProducts />
            <Video />
            <CentralBanner />
            <SlideProducts />
        </>
        
    )
}