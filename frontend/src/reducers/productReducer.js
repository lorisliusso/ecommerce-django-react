import {PRODUCT_LIST_REQUEST,
       PRODUCT_LIST_SUCCESS,
       PRODUCT_LIST_FAIL,
       PRODUCT_DETAILS_REQUEST,
       PRODUCT_DETAILS_SUCCESS,
       PRODUCT_DETAILS_FAIL} 

from '../constants/productConstants'



const initialState_1 = {
   products:[],
}


export const productListReducer= (state= initialState_1, action)=>{

    switch(action.type){

        case PRODUCT_LIST_REQUEST:
            return {...state,
                loading:true, 
            }

            case PRODUCT_LIST_SUCCESS:
                return {...state,
                    loading:false, 
                    products: action.payload
                }

            case PRODUCT_LIST_FAIL:
                return {...state,
                    loading:false,
                     error: action.payload
                    }

            default:
            return state

    }
}


const initialState_2= {
    product: {
        reviews:[]
    }
}

export const productDetailsReducer= (state= initialState_2, action)=>{

        switch(action.type){
    
            case PRODUCT_DETAILS_REQUEST:
                return {...state,
                    loading:true, 
                }
    
                case PRODUCT_DETAILS_SUCCESS:
                    return {...state,
                        loading:false, 
                        product: action.payload
                    }
    
                case PRODUCT_DETAILS_FAIL:
                    return {...state,
                        loading:false,
                         error: action.payload
                        }
    
                default:
                return state
    
        }
    
    }