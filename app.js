function extractValue(array, key){
    // let newArray =[] why we dont need this?

    
    return array.reduce(function(accum, nextName){
        return accum.push(nextName[key])
    }, [])
}

function vowelCount(str){
    // const charFreq = {};
    const vowel = "aeiou"

    return str.split('').reduce(function(accum, nextVal){
        let lowercase = nextVal.toLowerCase()
         if(vowel.indexOf(lowercase) !== -1){
          accum[lowercase] ?  accum[lowercase] ++ : accum[lowercase] = 1;  
         }
         return accum;
    },{});
}

function addKeyAndValue(array, key, position){
    return array.reduce(function(accum, next, index){
        accum[index] [key] = position
    },array)
}
// array, what is it starting from and what is it adding too?

function ifEven(val){
    return val % 2 === 0;
}


// function isEven(val){
//   return val % 2 === 0;
// }
// const arr = [1,2,3,4,5,6,7,8];
// partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
// need help with this one

function partition(array, callBack){
    return array.reduce(function(accum, nextNum){

    })
}