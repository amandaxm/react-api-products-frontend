import React, { Component } from 'react';
import api from '../../service/api';
import './styles.css';
export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };
    componentDidMount() {//assim que o componente for mostrado em tela
        this.loadProducts();

    }
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        //console.log(response.data.docs);
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page });
    };

    nextPage = () => {
        const { page, productInfo } = this.state;//nuscar a pagina atual e product info
        //verificar se a pagina atual já e a ultima pagina
        if (page == productInfo.pages) {
            return;

        } else {
            const pageNumber = page + 1;//pegar proxima pagina
            this.loadProducts(pageNumber);

        }
    };

    prevPage = () => {
        const { page } = this.state;//nuscar a pagina atual e product info
        //verificar se a pagina atual já e a ultima pagina
        if (page == 1) {
            return;
        } else {

            const pageNumber = page - 1;//pegar proxima pagina

            this.loadProducts(pageNumber);
        }
    };
    render() {
        const { products, page, productInfo } = this.state;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title} </strong>
                        <p>{product.description} </p>
                        <a href="">Acessar</a>
                    </article>
                )
                )}
                <div className="actions">
                    <button disable={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disable={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }


}