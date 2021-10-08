import { maxAndMin } from "../mild/mild_1.js";
import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    console.log(sum);
    var sum = 0;

    for(let i =0; i<array.length;i++){
        sum = sum + array[i];
    }

    return sum;

}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    if(array.length%2 == 0 ){
        var half = array.length/2;
        var median = (array[half] + array[half=1]) /2;
    }
    if(array.length%2 !=0){
        var half = (array.length +1)/2;
        var median = (array[half]);
    }
    return median;

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    import {maxAndMin} from "./mild_1.js"

    var obj = maxAndMin(array);
    var min = obj.min;
    var max = obj.max;
    var median = getMedian(array);
    var sum = getSum(array);
    var mean = sum / array.length;
    var variance = math.variance(array);
    var std = math.standard_deviation(array);
    var finobj = {};

    finobj["min"] = min;
    finobj["median"] = median;
    finobj["max"] = max;
    finobj["variance"] = variance;
    finobj["mean"] = mean;
    finobj["length"] = array.length;
    finobj["sum"] = sum;
    finobj["standard_deviation"] = std;

    return finobj;

}

