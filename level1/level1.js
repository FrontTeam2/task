/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
*/

var newArr=[];
function division(array, n) {
    for(let i=0;i<array.length;i=i+n){
        newArr.push(array.slice(i, i+n));
    }
    return newArr;
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(division(arr, 3));

// arr = [1,2,3,4,5]
// divition(arr, 2); === [ [1,2], [3,4], [5] ]
