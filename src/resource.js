import axios from "axios";
import { useQuery } from "react-query";


 export function getResource(){
   return axios.get(`https://autism-app.onrender.com/api/v1/resource/showAllWebsites?page=1`)
}
export function getResourcePagination(queryData){
  return axios.get(`https://autism-app.onrender.com/api/v1/resource/showAllWebsites?page=${queryData.queryKey[1]}`)
}

 export function useGetResource(key,fn){
   return useQuery(key,fn)
}