import { styled } from 'styled-components';
import BackgroundBanner from '../../../../assets/images/banners/banner-video.svg';
import { device } from '../../../../utils/device';

export const ContainerVideo = styled.article`
    background-image: url(${BackgroundBanner});
    background-color: ${(props) => props.theme['background-black']};
    padding-top: 4.56rem;
    padding-bottom: 6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.94rem;

    > h3 {
        color: ${(props) => props.theme['white']};
        font-size: 1.75rem;
        font-weight: 900;
        letter-spacing: 0.14rem;
        text-transform: uppercase;
    }
`;

export const SectionVideo = styled.section`
    position: relative;
    width: 39.375rem;
    margin: 0 auto;

    ${device.mobileL} {
        overflow: hidden;
    }

    ${device.mobile} {
        width: 90%;
    }

    > header {
        position: absolute;
        top: 1rem;
        left: 1.88rem;
        display: flex;
        align-items: center;
        gap: 1.81rem;

        > img {
            border-radius: 1.5rem;
            background: ${(props) => props.theme['background-black']};
            padding: .87rem .94rem;
        }

        > span {
            color: ${(props) => props.theme['white']};
            font-family: 'Roboto';
            font-size: 1.375rem;
            font-weight: 700;
        }
    }
`;

export const PlayVideo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;