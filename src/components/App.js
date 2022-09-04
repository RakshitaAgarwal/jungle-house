import {useState} from 'react'

import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

import '../styles/Layout.css'
// import QuestionForm from './QuestionForm'


function App(){
  const [cart, updateCart] = useState({})
  return(
    <div>
      <Banner />
      <div className='jh-layout'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} update={updateCart}/>
      </div>
      <Footer />
    </div>
  )
}

export default App;
