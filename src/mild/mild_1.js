/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */




export function sumToString(a, b) {
    var c = a+b

    var n = c.toString();
    var newa = a.toString();
    var newb = b.toString();
    var both  = newa.concat(newb);

    var final = newa + ' ' + "+" + " "+  newb + " " + "=" + " "  + n;

    return final;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    if(endNumber < startNumber){
        return 0;
    }
    var x = (endNumber - startNumber) + 1;
    var arr = new Array(x);


    for(let i =0; i<arr.length; i++){
        arr[i] = startNumber;
        startNumber++;

    }
    return arr;

}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    var min = numbers[0];
    var max = numbers[0];

    for(let i =0; i<numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
        if(max < numbers[i]){
            max = numbers[i];
        }
    }

    var obj = {};
    obj.max = parseInt(max);
    obj.min = parseInt(min);

    return obj;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var arr = [...new Set(array)];
    var counter;
    var obj = {};
    for(let i =0; i<arr.length; i++){
        counter = 0;
        for(let j =0; j<array.length;j++){
            if(arr[i] == array[j]){
                counter ++;
            }
        }
        let key = arr[i];
        obj[key]= counter;
    }

    return obj;


}
