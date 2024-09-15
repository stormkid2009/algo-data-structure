
function recursive(n){
    console.log(`rescursive start at number : ${n} `);
    if(n > 1){
        n-= 1;
        return recursive(n);
    }
}



recursive(5)