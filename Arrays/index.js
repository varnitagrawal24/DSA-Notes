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
