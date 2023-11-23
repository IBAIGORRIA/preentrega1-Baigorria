import Item from '../Item/Item';
import './ItemList.css'
import background from '../../imgs/BCKG.jpg'

function ItemList({products}) {
    return (
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', width:'100%'}}>
        <section className="hero">
            <div className="hero-body">
                <p className="title">
                    Nuestro Catálogo
                </p>
            </div>
        </section>

        <div className="products columns is-multiline is-centered" >
                    {products.map((item) => <Item key={item.id} {...item} /> )}
        </div>

    </div>)
}

export default ItemList