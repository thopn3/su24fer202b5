// Tham số rest
function Sum(...numbers){
    let total = 0;
    for (const e of numbers) {
        total += e;
    }
    return total;
}

// Gọi hàm
console.log(`Sum1 = ${Sum(10, 20, 30)}`);
console.log(`Sum2 = ${Sum(5, 10)}`);
console.log(`Sum3 = ${Sum(10, 20, 30, 40, 50)}`);

// Truyền 1 mảng làm đối số cho hàm có tham số rest
let arr = [1,2,3,4,5];
// Sử dụng toán tử spread (rải) để rải các phần tử của 'arr' và làm các đối số trong hàm
console.log(`Sum4 = ${Sum(...arr)}`);

// Làm rõ toán tử Spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const arr4 = [...arr1, 10, 20, ...arr3, ...arr2];
console.log(arr4);
