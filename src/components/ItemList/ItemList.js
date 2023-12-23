import Item from '../Item/Item';
import './ItemList.css'


function ItemList({products, category}) {
    return (
    <div >
        <section className="hero">
            <div className="hero-body">
                <p className="title">
                   
                </p>
            </div>
        </section>

        <div className="products columns is-multiline is-centered" >
                    {products.map((item) => <Item key={item.id} {...item} /> )}
        </div>

    </div>)
}

export default ItemList