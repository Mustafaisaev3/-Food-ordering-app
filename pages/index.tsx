import type { NextPage } from 'next'
import MenuCategories from '../components/MenuCategories/MenuCategories'
// import Modal from '../components/Modal/Modal'
import ProductsList from '../components/ProductsList/ProductsList'


const Home = () => {

  return (
    <div className='py-[24px]'>
      <ProductsList />
    </div>
  )
}

export default Home

