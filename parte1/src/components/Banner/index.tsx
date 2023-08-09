import { ImageBanner } from './styles';

interface BannerProps {
    image: string,
    title?: string
}

export function Banner({ image, title }: BannerProps) {
    return (
        <ImageBanner src={image} alt={title} />
    );
}