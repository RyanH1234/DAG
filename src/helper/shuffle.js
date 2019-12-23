export function shuffle(array) {
  const array_cpy = [...array];
  const array_length = array.length - 1;

  for(let i = array_length; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array_cpy[i]
    array_cpy[i] = array_cpy[j]
    array_cpy[j] = temp
  }

  return array_cpy;
}