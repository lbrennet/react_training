import * as ACTIONS from "./actions_types.js";

// declaration de l'actions
export function decr_time() {
  return {
    type : ACTIONS.DECR_TIME
  }
}
export function incr_time() {
  return {
    type : ACTIONS.INCR_TIME
  }
}
