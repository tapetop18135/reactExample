import React , {Component} from 'react'

class Product extends Component {
    
    onClikcBut = (vir_id,vir_name,index) => {
        return(
            (e) => {
                // console.log({id:vir_id, name:vir_name, amount:(this.props.products[index].amount - 1), buy:(this.props.products[index].buy + 1)})
                this.props.addProduct(vir_id)
            }
        )
    }
    render(){
        return(
            <div>
                <h2>Product</h2>
                <div>
                    {this.props.products.map((product,index) => {
                        return (
                        <div key={index}>
                            <div key={index}>{product.name} - {product.amount}</div> 
                            <input type="button" value="addProduct" onClick={this.onClikcBut(product.id , product.name , index)} />
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}


export default Product