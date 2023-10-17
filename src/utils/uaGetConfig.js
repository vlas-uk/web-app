import "isomorphic-fetch"
import {ERROR} from "../constants/uaError";
export default async function uaGetConfig (){
     try {
         const config = await fetch(process.env.REACT_APP_CONFIG)

         const resalt = await config.json()

         return resalt

     } catch (e) {
         console.error (e)
         throw new Error(ERROR.CONFIG)
     }
}