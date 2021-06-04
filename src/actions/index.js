const url = "https://jsonplaceholder.typicode.com/photos";
export function setBoxes(){
  const promise = fetch(`${url}`)
  .then(response => response.json());
  return {
    type: 'SET_BOXES',
    payload: promise
  };

}
