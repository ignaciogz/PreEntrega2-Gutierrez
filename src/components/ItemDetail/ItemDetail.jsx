import Card from 'react-bootstrap/Card';
import { CartPlus, ArrowLeftCircleFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
  const descriptionContent = item.description.split(". ");

  return (
    <section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
		}}>
      <Container className="container-lg">
        <Card className="App-item-horizontal-card">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <button className="App-item-horizontal-back-btn">
                <ArrowLeftCircleFill size={32}/>
              </button>
              <Card.Img className="img-fluid rounded-start" src={item.img} alt={`Foto de ${item.title}}`} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-end mb-2">
                  <Card.Title>{item.title}</Card.Title>
                  <small>Stock: <span>{item.stock}</span></small>
                </div>
                
                <div>{item.category.toUpperCase()}</div>
                <div className="App-item-horizontal-card-price">
                  {item.price}
                  <span>Abone en 3 a 6 cuotas sin interés</span>
                </div>

                <div className="App-item-horizontal-card-description">
                  {
                    descriptionContent.map((element, index) => 
                      <p key={`description-p-${index}`}>
                        {index < descriptionContent.length - 1 ? `${element}.` : `${element}`}
                      </p>
                    )
                  }
                </div>
                
                <div className="d-flex">
                  <ItemCount stock={Number(item.stock)}/>
                  <button className="App-item-horizontal-add-btn d-flex justify-content-center">
                    <CartPlus size={24}/>
                    <span>Añadir al carrito</span>
                  </button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
	
export default ItemDetail;