// Code your solutions in this file
function writeCards(array,word){
    const newarray=[];
    for(let i=0; i<array.length;i++){
    newarray.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`)
    }
    return newarray;
}

function countDown(Number){
    let i = 0;
    while (i <= Number) {
        console.log(i);
        i++; 
      }
}