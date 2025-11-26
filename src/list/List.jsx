import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/Cartslice'

const List = () => {
    const product = [
        {
            id:1,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/513ugd16C6L._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:2,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/41o2uWllXtL._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:3,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/71e1SSUhZeL._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:4,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51XzYbGG76L._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:5,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51hf-Hst0aS._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:6,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51hf-Hst0aS._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        
    ]

    const product1 = [
        {
            id:1,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/513ugd16C6L._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:2,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/41o2uWllXtL._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:3,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/71e1SSUhZeL._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:4,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51XzYbGG76L._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:5,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51hf-Hst0aS._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        {
            id:6,
            title:"Boat BassHeads",
            img:"https://m.media-amazon.com/images/I/51hf-Hst0aS._SX522_.jpg",
            price:300,
            des:"The perfect way to add some style and stand",
            quantity:1
        },
        
    ]

    const cartProduct = useSelector((state)=>state.cart.cartItem)

    const dispatch = useDispatch()

    const addCart = (item)=>{
        dispatch(addToCart(item))
    }


  return (
    <div>
      {product.map((data)=>(
        <div key={data.id}>
            <img src={data.img} alt='imgg' width={100}/>
            <h1>{data.title}</h1>
            <h3>₹{data.price}</h3>
            <p>{data.des}</p>
        </div>
      ))}

      <div className='container'>
        <div className='row'>
            {
                product1.map((item)=>(
                    <div className='col-lg-4' key={item.id}>
                        <img src={item.img} alt='imgg' width={100} />
                        <h1>{item.title}</h1>
                        <h3>₹{item.price}</h3>
                        <p>{item.des}</p>
                        {
                            cartProduct.find((items)=>items.id === item.id) ? 
                            <button disabled>Added to cart</button>:
                            <button onClick={()=>addCart(item)}>Add to cart</button>
                        }
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default List