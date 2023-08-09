import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FlotingWhatsapp } from '../../components/FloatingWhatsapp';

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
            <Footer />
            <FlotingWhatsapp />
        </LayoutContainer>
    );
}