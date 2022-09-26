import type { NextPage } from 'next'
import MenuCategories from '../components/MenuCategories/MenuCategories'
// import Modal from '../components/Modal/Modal'
import ManagedModal from '../components/UI/Modal/managet-modal'
import ProductsList from '../components/ProductsList/ProductsList'
import Alert from '../components/UI/Alert/Alert'
import Dropdown from '../components/UI/Dropdown/Dropdown'
import { useSelector } from 'react-redux'
import { selectOrders } from '../store/ducks/orders/selectors'


const Home = () => {
  console.log(useSelector(selectOrders))
  return (
    <div className='py-[24px]'>
      {/* <div className='w-[100%] h-[80px] flex items-center justify-between'>
        <h1 className='text-white text-[20px]'>Chose your pizza :)</h1> 
        <Dropdown title='Select item' items={['React', 'Vue', 'Angular']}/>
      </div> */}
      <ProductsList />
    </div>
  )
}

export default Home

