export default function(state ,action){

    if(state === undefined){
      return[]
    }

    switch (action.type) {
    case 'SET_BOXES':
      return action.payload;
    default:
    return state;
  }
}
