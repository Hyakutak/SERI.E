import BannerCentral from '../../../../assets/images/banners/banner-central.svg';
import { ContainerBannerCentral } from './styles';

export function CentralBanner() {
    return (
        <ContainerBannerCentral> 
            <h4>Coleção</h4>
            <img src={BannerCentral} alt='Banner Central' />
        </ContainerBannerCentral>
    );
}