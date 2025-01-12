// Find the maximum and minimum element in an array


function findMinMaxInArray(arr){
    const l = arr.length
    let minIndex = 0;
    let maxIndex = 0;
    for(let i = 1; i<l; i++){
        if(arr[minIndex] > arr[i]) minIndex = i;
        if(arr[maxIndex] < arr[i]) maxIndex = i;
    }
    return {minIndex, maxIndex};
}
