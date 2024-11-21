import Collections from "../../components/Home/Collections";
import Section from "../../components/Home/Section";
import Carrosel from '../../components/Home/Carrosel';
import Section2 from '../../components/Home/Section2';
import ProductList from "../../components/Home/ProductList";
import AirJordan from "../../components/Home/AirJordan";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function HomePage() {
    return (
        <>
            <Header />
            <Carrosel />

            {/* <br /><br /><br /><br /> <br /> */}
            <Section title="Coleções em destaque" link={{ "text": "saiba mais2", "href": "www.google.com" }}>
                <Collections />
            </Section>

            <Section2>
                <ProductList />
            </Section2>

            <AirJordan />
            <Footer />


        </>
    )
} export default HomePage;