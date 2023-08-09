import { ContainerVideo, SectionVideo, PlayVideo } from "./styles";
import LogoChannel from '../../../../assets/images/Video/logo-video.svg';
import PrevVideo from '../../../../assets/images/Video/prev-video.svg';
import Play from '../../../../assets/images/Video/play-video.svg';

export function Video() {
    return (
        <ContainerVideo>
            <h3>#Youtube</h3>
            <SectionVideo>
                <header>
                    <img src={LogoChannel} alt="Logo Canal" />
                    <span>São Paulo, 12 de Abril de 2021.</span>
                </header>
                <img src={PrevVideo} alt="Previa do video" />
                <PlayVideo src={Play} alt="Play video" />
            </SectionVideo>
        </ContainerVideo>
    );
}