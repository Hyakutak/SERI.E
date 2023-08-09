import { convertNumerToPrice } from '../../utils/formatPriceMoney';
import { SoldOut, ContainerCard } from './style';

interface IProduct {
    name: string,
    image: string,
    price: number,
    pricePromotion?: number,
    stock: number
}

export function ProductCard({ name, image, pricePromotion, price, stock }: IProduct) {

    const formatPrice = convertNumerToPrice(price);
    const formatPricePromotion = pricePromotion && convertNumerToPrice(pricePromotion);

    return (
        <ContainerCard>
            <header>
                <img src={image} alt={name} />
                { stock <= 0 && <SoldOut /> }
            </header>
            <footer>
                <h2>{ name }</h2>
                { pricePromotion && <span>{ formatPricePromotion }</span> }
                <h4>{ formatPrice }</h4>
            </footer>
        </ContainerCard>
    );
}