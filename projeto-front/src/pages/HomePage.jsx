import Collections from "../componentes/Collections";
import Section from "../componentes/Section";
import Carrosel from '../componentes/Carrosel';
import Section2 from '../componentes/Section2';
import ProductList from "../componentes/ProductList";
import AirJordan from "../componentes/AirJordan";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



function HomePage(){
    return(
        <>
        <Header/>
      <Carrosel/>
        
      <br /><br /><br /><br /> <br />
        <Section title="Coleções em destaque" link={{"text":"saiba mais2", "href":"www.google.com"}}>
            <Collections/>
        </Section>

        <Section2>
            <ProductList/>


        </Section2>

        <AirJordan/>
        <Footer />

      
        </>
    )
} export default HomePage;