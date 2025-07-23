import * as actions from './actionTypes'
export const initState={
       movies:[],
       tvseries:[]
}
const reducer =(state=initState,action)=>{
       switch(action.type){
              case actions.GET_MOVIES:
                     return { ...state, movies:action.payload}
              case actions.GET_TVSERIES:
                     return { ...state, tvseries:action.payload}
                     default :
                     return state       
       }
}
export default reducer