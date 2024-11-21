import React, { useState } from "react";
import styles from './FilterGroup.module.css'

import ProductList2 from "../Home/ProductList2";

import Card2 from "../../components/Home/Card";


function FilterGroup() {

    let marcas = [
        { name: 'Adidas', key: 'A' },
        { name: 'Nike', key: 'N' },
        { name: 'Puma', key: 'P' },
        { name: 'K-Swiss', key: 'K' },
        { name: 'Calenciaga', key: 'C' }]

    let categorias = [
        { nome: 'Esporte e Lazer' },
        { nome: 'Casual' },
        { nome: 'Utilitário' },
        { nome: 'Corrida' }]

    let genero = [
        { valor: 'Masculino' },
        { valor: 'Feminino' },
        { valor: 'Unissex' }]

    let condicao = [
        { estado: 'Novo' },
        { estado: 'Usado' }]



    const [marcado, SetMarcado] = useState({
        element: false,
    });




    function Verificado(props) {

        const { name, checked } = props.target


        SetMarcado({
            element: name === "adidas" ? checked : marcado.element
        })

        console.log(name);


    }



    return (
        <>
            <div className= {`container-fluid ${styles.filtroGeral}`}>
                <div className= {`row d-flex flex-row col-12 ${styles.filtroPosition}`}>
                    {/* <hr /> */}
                    <div className={`col col-2 mt-5 ${styles.caixaFiltro}`}>
                        <h1 className={styles.tituloh1}>Filtrar por</h1>
                        <hr />
                        <article className= {styles.listasFiltro}>
                            <h3 className={styles.tituloh3} >Marcas</h3>
                            <section className="marcas">
                                <input type="checkbox" name="adidas" id="adidas" checked={marcado.adidas} onChange={Verificado} />
                                <label htmlFor="adidas">{marcas[0].name}</label>
                                <br />
                                <input type="checkbox" name="nike" id="nike" checked={marcado.nike} onChange={Verificado} />
                                <label htmlFor="nike">{marcas[1].name}</label>
                                <br />
                                <input type="checkbox" name="puma" id="puma" checked={marcado.puma} onChange={Verificado} />
                                <label htmlFor="puma">{marcas[2].name}</label>
                                <br />
                                <input type="checkbox" name="kswiss" id="kswiss" checked={marcado.kswiss} onChange={Verificado} />
                                <label htmlFor="kswiss">{marcas[3].name}</label>
                                <br />
                                <input type="checkbox" name="calenciaga" id="calenciaga" checked={marcado.calenciaga} onChange={Verificado} />
                                <label htmlFor="calenciaga">{marcas[4].name}</label>
                            </section>
                            <h3 className={styles.tituloh3} >Categorias</h3>
                            <section className="categoria">
                                <input type="checkbox" name="esporte" id="esporte" checked={marcado.esporte} onChange={Verificado} />
                                <label htmlFor="esporte">{categorias[0].nome}</label>
                                <br />
                                <input type="checkbox" name="casual" id="casual" checked={marcado.casual} onChange={Verificado} />
                                <label htmlFor="casual">{categorias[1].nome}</label>
                                <br />
                                <input type="checkbox" name="utilitario" id="utilitario" checked={marcado.utilitario} onChange={Verificado} />
                                <label htmlFor="utilitario">{categorias[2].nome}</label>
                                <br />
                                <input type="checkbox" name="corrida" id="corrida" checked={marcado.corrida} onChange={Verificado} />
                                <label htmlFor="corrida">{categorias[3].nome}</label>
                            </section>
                            <h3 className={styles.tituloh3} >Gênero</h3>
                            <section className="genero">
                                <input type="checkbox" name="masculino" id="masculino" checked={marcado.masculino} onChange={Verificado} />
                                <label htmlFor="">{genero[0].valor}</label>
                                <br />
                                <input type="checkbox" name="feminino" id="feminino" checked={marcado.feminino} onChange={Verificado} />
                                <label htmlFor="">{genero[1].valor}</label>
                                <br />
                                <input type="checkbox" name="unissex" id="unissex" checked={marcado.unissex} onChange={Verificado} />
                                <label htmlFor="">{genero[2].valor}</label>
                            </section>
                            <section className="condicao">
                                <h3 className={styles.tituloh3} >Estado</h3>
                                <input type="radio" name="novo" id="novo" checked={marcado.novo} onChange={Verificado} />
                                <label htmlFor="novo">{condicao[0].estado}</label>
                                <br />
                                <input type="radio" name="usado" id="usado" checked={marcado.usado} onChange={Verificado} />
                                <label htmlFor="usado">{condicao[1].estado}</label>
                            </section>
                        </article>

                    </div>
                    <div className={`col col-8  mt-5 mb-5 ${styles.cardPosition}`}>
                   
                         <ProductList2/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterGroup;