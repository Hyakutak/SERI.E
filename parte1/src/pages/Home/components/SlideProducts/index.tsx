import { useEffect, useState } from 'react';
import { ProductCard } from '../../../../components/ProductCard';
import { ContainerSlide } from './styles';
import api from '../../../../lib/axios';
import { Routes } from '../../../../utils/routes.enum';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CaretRight, CaretLeft } from 'phosphor-react';

interface IProduct {
    id: number,
    name: string,
    image: string,
    price: number,
    pricePromotion: number,
    stock: number
}

export function SlideProducts() {
    const [Products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        api
         .get(Routes.JSON_URL)
         .then((response) => setProducts(response.data.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    const ListProducts = Products.map((product) => <ProductCard key={product.id} {...product} />);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CaretRight size={24} />,
        prevArrow: <CaretLeft size={24} />,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    
    return (
        <ContainerSlide>
            <header>
                <h2>Destaques</h2>
            </header>
            <Slider {...settings}>
                { ListProducts }
            </Slider>
        </ContainerSlide>
    );
}