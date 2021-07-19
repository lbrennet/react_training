import * as ACTIONS from "./actions_types.js";

// declaration de l'actions
export function decr_time({min, sec}){
  return {
    type : ACTIONS.DECR_TIME,
    time : {min, sec}
  };
}