import { children, createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helper/helper";

const initialState = {
    selectedItem: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const reducer = (state, action) => {
// console.log(action);
switch (action.type) {
    case "ADD_ITEM":
        if(!state.selectedItem.find((item) => item.id === action.payload.id)){
            state.selectedItem.push({...action.payload, quantity: 1})
        }
        return {
            ...state,
            ...sumProducts(state.selectedItem),
            checkout: false,
        }
    case "REMOVE_ITEM":
        const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            selectedItem:[...newSelectedItem],
            ...sumProducts(newSelectedItem)
        }
    case "INCREASE":
        const increaseIndex = state.selectedItem.findIndex(item => item.id === action.payload.id)
        state.selectedItem[increaseIndex].quantity++;
        return {
            ...state,
            ...sumProducts(state.selectedItem)
        }
    case "DECREASE":
        const decreaseIndex = state.selectedItem.findIndex(item => item.id === action.payload.id)
        state.selectedItem[decreaseIndex].quantity--;
        return {
            ...state,
            ...sumProducts(state.selectedItem)
        }
        case "CHECKOUT":
            return {
                selectedItem:[],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
    default:
        throw new Error("Invalid Acdtion! ")
}

}

const CartContext = createContext()

function CardProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{state: state, dispatch: dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
    const { state, dispatch} = useContext(CartContext);
    return [state, dispatch]
    
}

export default CardProvider
export { useCart }