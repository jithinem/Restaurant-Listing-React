import { R_FAILURE,R_SUCCESS } from "../constants/restconstant";

export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch (action.type){
        case R_SUCCESS:
            return{
                restaurantList:action.payload
            }
            break;
        case R_FAILURE:
            return{
                restaurantList:action.error
            }
            break;
        default:
            return{
                station:action.state
            }
            break;
    }
}
