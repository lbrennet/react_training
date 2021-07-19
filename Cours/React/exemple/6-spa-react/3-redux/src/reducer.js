import * as ACTIONS from "./actions_types.js";
var stateInit = {
  time : { min :2, sec : 0},
  time2 : { min :2, sec : 0}
}
function decrTime({min, sec}){
          sec=sec -1;
          if(sec<0){
            min=min-1;
            if (min<0){
                min = 0;
                sec = 0;
              }
            else {
              sec =59;
              }
            }
          return{min ,sec};
        }
function incrTime({min, sec}){
          sec=sec +1;
          if(sec>59){
            min=min+1;
			sec = 0;
            }
          return{min ,sec};
        }
export default function reducer(state = stateInit, action){
  var newState;
  if (action.type==ACTIONS.DECR_TIME) {
    var time2 = decrTime(state.time2);
    newState={ ...state, time2};
  } else if (action.type==ACTIONS.INCR_TIME) {
    var time = incrTime(state.time);
    newState={ ...state, time};
  }
  else newState=state
  return newState;
}
