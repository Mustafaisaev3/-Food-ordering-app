import type { NextPage } from 'next'
import { createContext, useContext } from 'react'
import MenuCategories from '../components/MenuCategories/MenuCategories'
// import Modal from '../components/Modal/Modal'
import ProductsList from '../components/ProductsList/ProductsList'


const Home = () => {

  const context = createContext({name: 'Alex'})

  const uiContext = useContext(context)

  console.log(uiContext)

  return (
    <ProductsList></ProductsList>
  )
}

export default Home

