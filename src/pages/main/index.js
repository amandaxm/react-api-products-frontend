import React , {Component} from 'react';
import api from '../../service/api';

export default class Main extends Component{
    state ={
        products:[],
    }
    componentDidMount(){//assim que o componente for mostrado em tela
        this.loadProducts();

    }
    loadProducts= async()=>{
        const response = await api.get('/products');
        //console.log(response.data.docs);
        this.setState({products: response.data.docs});
    };
    render(){
    return (
        <div className="product-list">
            {this.state.products.map(product=>(
                <article key={product._id}> {product.title}  </article>
            )
    
            )}

        </div>
    )
    }


}