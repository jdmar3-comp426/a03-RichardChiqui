import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 *
 */

var cityavg = 0;
var highway = 0;
var arr = new Array(mpg_data.length);

var ishybrid = 0;
for( let i =0; i<mpg_data.length; i++){
      cityavg = cityavg + mpg_data[i].city_mpg;
      highway = highway+ mpg_data[i].highway_mpg;
      arr[i] = mpg_data[i].year;
      if(mpg_data[i].hybrid == true){
          ishybrid ++;
      }
}
cityavg = cityavg / mpg_data.length;
highway = highway / mpg_data.length;

export const allCarStats = {
    avgMpg:{
        'city':cityavg,
        'highway':  highway
    }  ,
    allYearStats: getStatistics(arr),
    ratioHybrids: (ishybrid / mpg_data.length),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
var arr = [];
var final = [];

for(let i =0; i< mpg_data.length;i++){
    if(mpg_data[i].hybrid == true){
        if(arr.includes(mpg_data[i].make) == false){
            arr[i] = mpg_data[i].make;
    }
    }

}

var arrobj = [];

for(let i =0; i<arr.length;i++){
    for(let j =0; j<mpg_data.length;j++){
        if(arr[i] == mpg_data[j].make){
            final.push(mpg_data[i].id);

        }
    }

    arrobj[i] = new Object();
    arrobj.make = arr[i];
    arrobj.hybrids = [];
    arrobj.hybrids.push(final);
    final = [];

}

var year = [];
for(let i =0; i< mpg_data.length;i++){
        if(year.includes(mpg_data[i].year) == false){
            year[i] = mpg_data[i].year;
    }


}
var cityhybrid = 0;
var highwayhybird = 0;
var counterhybrid = 0;
var citynot = 0;
var highwaynot = 0;
var counternot = 0;
var finobj = new Object();

for(let i =0; i<year.length-1;i++){
    for(let j =0; j<mpg_data.length;j++){
        if(year[i] == mpg_data[j].year){
            if(mpg_data[i].hybrid == true){
                cityhybrid = cityhybrid + mpg_data[i].city_mpg;
                highwayhybird = highwayhybird + mpg_data[i].highway_mpg;
                counterhybrid ++;

            }
            if(mpg_data[i].hybrid == false){
                citynot = citynot + mpg_data[i].city_mpg;
                highwaynot = highwaynot + mpg_data[i].highway_mpg;
                counternot ++;

            }



        }
    }
    cityhybrid = cityhybrid / counterhybrid;
    highwayhybird = highwayhybird / counterhybrid;
    citynot = citynot / counternot;
    highwaynot = highwaynot / counternot;

    var holder = year[i];


    finobj.year[i] = {
        hybrid : {
            city: cityhybrid,
            highway:highwayhybird
        },
        notHybrid : {
            city: citynot,
            highway: highwaynot

        }
    }
}
export const moreStats = {
    makerHybrids: arrobj,
    avgMpgByYearAndHybrid: finobj
};
