// This code is inspired by Nikita Tiwari. 

const multiply = (num, array, size) => {

    let carry = 0;

    for(let i = 0; i < size; i +=1){
        let prod = array[i] * num + carry;

        console.log({prod});

        array[i] = prod % 10;

        carry = Math.floor(prod/10);
    }

    console.log({array, carry, size})

    while(carry){
        array[size] = carry % 10;
        carry = Math.floor(carry / 10);
        size += 1;
    }

    return size;
}

const factorial = (num) => {
    /*
        @param{Number} num The number we want to calculate the factorial for.
        @return {Number} answer The result of the factorial.
    */
    const store = [];
    let answer = '';

    store[0] = 1;
    let len = 1;

    for(let x = 2; x <= num; x+=1){
        len = multiply(x, store, len);
    }


    for(let x = len - 1; x >= 0; x--){
      answer += `${store[x]}`
    }

    return answer;
}


module.exports = factorial;
