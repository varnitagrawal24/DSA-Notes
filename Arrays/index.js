// largest element in array

const largestElementInArrayV1 = (arrayItem = []) => {
    let result = -Infinity
    arrayItem.forEach((item) => {
        if(item > result) result = item;
    })
    return result;
}

const largestElementInArrayV2 = (arrayItem = []) => {
    return Math.max.apply(null, arrayItem);
}

const arr = [3,5,1,7,9,4,6,3];
// console.time('v1')
// const ansV1 = largestElementInArrayV1(arr);
// console.timeEnd('v1')
// console.time('v2')
// const ansV2 = largestElementInArrayV2(arr);
// console.timeEnd('v2')
// console.log('largest element in array', ansV1, ansV2);


// second largest element in array

const secondLargestEleInArr = (arrayItem = []) => {
    const result = arrayItem.reduce((acc, item) => {
        if(item > acc.first){
            acc.second = acc.first;
            acc.first = item
        } else if (item > acc.second && item !== acc.first){
            acc.second = item
        }
        return acc;
    }, { first: -Infinity, second: -Infinity })

    return result.second;
}

// check if array is sorted or not (for asc)

const checkArraySorted = (arrayItem = []) => {
    const len = arrayItem.length

    if(len < 2) return true

    for(let i = 0; i < len - 1; i++){
        if(arrayItem[i] > arrayItem[i+1]) return false
    }
    return true;
}

// reverse an array
const reverseArray = (arrayItem = []) => {
    let first = 0;
    let last = arrayItem.length - 1;
    while(first < last) {
        const a = arrayItem[first];
        arrayItem[first] = arrayItem[last]
        arrayItem[last] = a;
        first++;
        last--;
    }
    return arrayItem
}

// remove duplicate from array

const removeDuplicateFromArray = (arrayItem = []) => {
    let i = 0
    let result = []
    while(i<arrayItem.length){
        if(arrayItem[i] !== arrayItem[i+1]) result.push(arrayItem[i])
        i++
    }
    return result
}

// all zero at last of array

const moveZeroToLast = (item = []) => {
    let c = 0;
    const n = item.length

    for(let i = 0; i< n; i++){
        if(item[i] !== 0){
            item[c] = item[i];
            c++;
        }
    }
    while(c<n){
        item[c] = 0
        c++
    }
    return item
}

console.log(moveZeroToLast([0,2, 0, 5]));
