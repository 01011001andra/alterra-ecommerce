import { useDispatch } from "react-redux"
import { addToCart } from "../../store/slices/cartSlice"

const ButtonAddToCart = ({text, product = {}}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(product)) 
  }

  return (
    <button type='button' className='btn btn-primary w-100' onClick={handleClick}>{text}</button>
  )
}

export default ButtonAddToCart