// Reverse the array

function reverseArray(arr, start, end){
    while(start < end){
        const t = arr[end]
        arr[end] = arr[start]
        arr[start] = t
        start ++;
        end--;
    }
 }
var rotate = function(nums, k) {
    const l = nums.length
    const m = l - (k%l);
        reverseArray(nums, 0, m-1)
        reverseArray(nums, m, l-1)
        reverseArray(nums, 0, l-1)
};