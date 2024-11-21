import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import ProductList from "./ProductList";


function FilterGroup() {

    let marcas = [
        { name: 'Adidas', key: 'A' },
        { name: 'Nike', key: 'N' },
        { name: 'Puma', key: 'P' },
        { name: 'K-Swiss', key: 'K' },
        { name: 'Calenciaga', key: 'C' }]

    let categorias = [
        {nome:'Esporte e Lazer'},
        {nome:'Casual'},
        {nome:'Utilitário'},
        {nome:'Corrida'}]

    let genero = [
        {valor:'Masculino'},
        {valor:'Feminino'},
        {valor:'Unissex'}]

    let condicao = [
        {estado:'Novo'},
        {estado:'Usado'}]

    

     const [marcado,SetMarcado] = useState({
        element: false,
    });

     

    
    function Verificado(props) {
        
        const {name, checked} = props.target
        

        SetMarcado({
            element:name === "adidas" ? checked : marcado.element
        })

        console.log(name);
        
        
    }

    
    
    return ( 
        <>
        <div className="container">
            <div className="row d-flex flex-row col-12">
                <hr />
                <div className="col col-2 mt-5">
                    <h1>Filtrar por</h1>
                    <hr />
                    <article>
                        <h5>Marcas</h5>
                        <section className="marcas">
                            <input type="checkbox" name="adidas" id="adidas" checked={marcado.adidas} onChange={Verificado} />{marcas[0].name}
                            <br />
                            <input type="checkbox" name="nike" id="nike" checked={marcado.nike} onChange={Verificado} />{marcas[1].name}
                            <br />
                            <input type="checkbox" name="puma" id="puma" checked={marcado.puma} onChange={Verificado} />{marcas[2].name}
                            <br />
                            <input type="checkbox" name="kswiss" id="kswiss" checked={marcado.kswiss} onChange={Verificado} />{marcas[3].name}
                            <br />
                            <input type="checkbox" name="calenciaga" id="calenciaga" checked={marcado.calenciaga} onChange={Verificado} />{marcas[4].name}
                        </section>
                        <h5>Categorias</h5>
                        <section className="categoria">
                            <input type="checkbox" name="esporte" id="esporte" checked={marcado.esporte} onChange={Verificado} />{categorias[0].nome}
                            <br />
                            <input type="checkbox" name="casual" id="casual" checked={marcado.casual} onChange={Verificado} />{categorias[1].nome}
                            <br />
                            <input type="checkbox" name="utilitario" id="utilitario" checked={marcado.utilitario} onChange={Verificado}/>{categorias[2].nome}
                            <br />
                            <input type="checkbox" name="corrida" id="corrida" checked={marcado.corrida} onChange={Verificado} />{categorias[3].nome}
                        </section>
                        <hr />
                        <h5>Gênero</h5>
                        <section className="genero">
                            <input type="checkbox" name="masculino" id="masculino" checked={marcado.masculino} onChange={Verificado} />{genero[0].valor}
                            <br />
                            <input type="checkbox" name="feminino" id="feminino" checked={marcado.feminino} onChange={Verificado} />{genero[1].valor}
                            <br />
                            <input type="checkbox" name="unissex" id="unissex" checked={marcado.unissex} onChange={Verificado} />{genero[2].valor}
                        </section>
                        <hr />
                        <section className="condicao">
                        <h5>Estado</h5>
                            <input type="radio" name="novo" id="novo" checked={marcado.novo} onChange={Verificado} />{condicao[0].estado}
                            <br />
                            <input type="radio" name="usado" id="usado" checked={marcado.usado} onChange={Verificado} />{condicao[1].estado}
                        </section>
                    </article>
                    <div className="col col-2 mt-5">
                    <label for="cargo">Cargo de tecnologia:</label>
                    <select name="cargo" id="cargos">
                        <option value="">-- Selecione --</option>
                        <option value="pessoa desenvolvedora">Pessoa Desenvolvedora</option>
                        <option value="programador web">Programador web</option>
                        <option value="arquiteto de redes">Arquiteto de redes</option>
                    </select>
                    </div>
                    <div className="col col-10 mt-4">
                        <ProductList/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default FilterGroup;