import Card from '../components/Card'
import {products} from '../data'

function Home() {
  return (
    <div className='home'>
        <div className="cardList">

        {products.map(product=>(<Card product={product}/>))}
        </div>
    </div>
  )
}

export default Home