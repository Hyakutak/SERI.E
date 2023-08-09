import { TopBar } from '../TopBar';
import { ContainerHeader, HeaderIcons, IconHamburger, SideBarNav } from './styles';
import Logo from '../../assets/images/logo/logo-seri.e.svg';
import { HeartStraight, User, Handbag, MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';

const NavCategories = [
    {
        id: '5',
        name: 'Shop',
        link: '/'
    },
    {
        id: '7',
        name: 'Lançamentos',
        link: '/'
    },
    {
        id: '9',
        name: 'Born in Chaos',
        link: '/'
    }
]

export function Header() {
    const [sticky, setSticky] = useState("");
    const [isActive, setActive] = useState(false);

    function toggleMode() {
        setActive(!isActive);
    }

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    useEffect(() => {
        return window.addEventListener("scroll", isSticky);
    }, []);

    const classHeader = sticky;

    const categories = NavCategories.map((categorie) => {
        return (
            <a href={categorie.link} key={categorie.id}>
                { categorie.name }
            </a>
        )
    })

    return (
        <>
            <TopBar />
            <ContainerHeader className={classHeader}>
                <section>
                    <img src={Logo} alt='Logo Seri.e' />
                    <IconHamburger className={isActive ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
                        <div className='hamburguer hamburguerIcon'></div>
                    </IconHamburger>
                    <SideBarNav className={isActive ? 'menu menuOpen' : 'menu menuClose'}>
                        <nav>
                            { categories }
                        </nav>
                    </SideBarNav>
                    <nav>
                        { categories }
                    </nav>
                    <HeaderIcons>
                        <div>
                            <input placeholder='Pesquise seu tapete' />
                            <MagnifyingGlass size={16} />
                        </div>
                        <a href='/wishlist'>
                            <HeartStraight size={16} />
                        </a>
                        <a href='/wishlist'>
                            <User size={16} />
                        </a>
                        <a href='/wishlist'>
                            <Handbag size={16} />
                            (99)
                        </a>
                    </HeaderIcons>
                </section>
            </ContainerHeader>
        </>
    )
}