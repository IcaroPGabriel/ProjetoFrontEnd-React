import React, { useState } from "react";
import ProductList from "../../components/Home/ProductList";
import Card from "../../components/Home/Card";


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
            <div className="container-fluid">
                <div className="row d-flex flex-row col-12">
                    <hr />
                    <div className="col col-2 mt-5">
                        <h3>Filtrar por</h3>
                        <hr />
                        <article>
                            <h6>Marcas</h6>
                            <section className="marcas">
                                <input type="checkbox" name="adidas" id="adidas" checked={marcado.adidas} onChange={Verificado} />
                                {marcas[0].name}
                                <br />
                                <input type="checkbox" name="nike" id="nike" checked={marcado.nike} onChange={Verificado} />
                                {marcas[1].name}
                                <br />
                                <input type="checkbox" name="puma" id="puma" checked={marcado.puma} onChange={Verificado} />
                                {marcas[2].name}
                                <br />
                                <input type="checkbox" name="kswiss" id="kswiss" checked={marcado.kswiss} onChange={Verificado} />
                                {marcas[3].name}
                                <br />
                                <input type="checkbox" name="calenciaga" id="calenciaga" checked={marcado.calenciaga} onChange={Verificado} />
                                {marcas[4].name}
                            </section>
                            <hr />
                            <h6>Categorias</h6>
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
                            <hr />
                            <h6>Gênero</h6>
                            <section className="genero">
                                <input type="checkbox" name="masculino" id="masculino" checked={marcado.masculino} onChange={Verificado} />
                                {genero[0].valor}
                                <br />
                                <input type="checkbox" name="feminino" id="feminino" checked={marcado.feminino} onChange={Verificado} />
                                {genero[1].valor}
                                <br />
                                <input type="checkbox" name="unissex" id="unissex" checked={marcado.unissex} onChange={Verificado} />
                                {genero[2].valor}
                            </section>
                            <hr />
                            <section className="condicao">
                                <h6>Estado</h6>
                                <input type="radio" name="novo" id="novo" checked={marcado.novo} onChange={Verificado} />
                                {condicao[0].estado}
                                <br />
                                <input type="radio" name="usado" id="usado" checked={marcado.usado} onChange={Verificado} />
                                {condicao[1].estado}
                            </section>
                            <hr />
                        </article>

                    </div>
                    <div className="col col-9 mt-5 mb-5">
                        <ProductList />
                        <ProductList />

                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterGroup;