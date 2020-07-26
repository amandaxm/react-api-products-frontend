import React , {Component} from 'react';
import api from '../../service/api';
import './styles.css';
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
        const {products} = this.state;
    return (
        <div className="product-list">
            {products.map(product=>(
                <article key={product._id}> 
                    <strong>{product.title} </strong>
                    <p>{product.description} </p>
                    <a href="">{product.url}</a>
                 </article>
            )
    
            )}

        </div>
    )
    }


}