import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
    const categories = ["camIseTas", "CalÇas", "bonéS", "HeaDphones", "Tênis"];

    let categoriesTratament = categories.map((category) => {
        let letra = category.split('').at(0).toUpperCase();
        let palavra = category.toLowerCase().slice(1);
        return letra + palavra
    })

    return (
        <>
            <footer className={styles.footerGeral }>
                <div className={styles.container} >
                    <div className={styles.lorem}>
                        <Logo color="#ffffff" />

                        <p className={styles.texto}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>

                        <div className={styles.social}>
                            <a className={styles.linkFooter} href="https://www.facebook.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer"><img src="src/assets/facelogo.svg" alt="Facebook Logo" /></a>
                            <a className={styles.linkFooter} href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer"><img className={styles.insta} src="src/assets/instalogo.svg" alt="Instagram Logo" /></a>
                            <a className={styles.linkFooter} href="https://x.com/eaicollegers" target="_blank" rel="noopener noreferrer"><img src="src/assets/xlogo.svg" alt="X (Twitter) Logo" /></a>
                        </div>
                    </div>

                    <div className={styles.secaoInfo}>
                        <span className={styles.cabecalho}>Informação</span>
                        <ul>
                            <li> <a className={styles.linkFooter} href="#"> Sobre Drip Store</a></li>
                            <li> <a className={styles.linkFooter} href="">Segurança</a></li>
                            <li> <a className={styles.linkFooter} href="">Wishlist</a></li>
                            <li> <a className={styles.linkFooter} href="">Blog</a></li>
                            <li> <a className={styles.linkFooter} href="">Trabalhe conosco</a></li>
                            <li> <a className={styles.linkFooter} href="">Meus pedidos</a></li>
                        </ul>
                    </div>

                    <div className={styles.secaoCategorias}>
                        <span className={styles.cabecalho}>Categorias</span>
                        <ul>
                            {categoriesTratament.map((category, index) => (
                                <li key={index}>
                                    <a className={styles.linkFooter} href="#">{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.secaoContato}>
                        <span className={styles.cabecalho}>Contato</span>
                        <ul>
                            <li className={styles.endereco}> <a className={styles.linkFooter} href="https://www.google.com/maps/place/Av.+Santos+Dumont,+1510+-+1+andar+-+Aldeota,+Fortaleza+-+CE,+60150-161/@-3.7326727,-38.5129821,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7485edb300001:0x6782b2efe8bc747b!8m2!3d-3.7326781!4d-38.5104072!16s%2Fg%2F11smbsmkvz?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</a></li>
                            <li><a className={styles.linkFooter} href="">(85) 3051-3411</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copy}>
                    <p> &copy; 2022 Digital College</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
