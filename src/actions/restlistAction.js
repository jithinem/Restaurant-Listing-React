import axios from "axios";
import { R_SUCCESS,R_FAILURE } from "../constants/restconstant";

//logic-to fetch data from an api
export const RestListAction=()=>async(dispatch)=>{
    try{
        const result=await axios.get('./restaurants.json');
        console.log(result.data.restaurants);
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants
        })    
    }
    catch(error){
        dispatch({
            type:R_FAILURE,
            error:error
        })
    }
}