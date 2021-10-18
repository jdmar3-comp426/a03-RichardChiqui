/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
   var type;
   var obj  = {};
   if(typeof(variable) == 'string'){
      type = 'string';
   }
   if(typeof(variable) == 'undefined'){
      type = 'undefined';
   }
   if(typeof(variable) == 'object'){
      type = 'object';
   }
   if(typeof(variable) == 'boolean'){
      type = 'boolean';
   }
   if(typeof(variable) == 'number'){
      type = 'number';
   }
   if(typeof(variable) == 'function'){
      type = 'function';
   }
   if(typeof(variable) == 'symbol'){
      type = 'symbol';
   }
   if(typeof(variable) == 'bigint'){
      type = 'bigint';
   }


   obj.type = type;
   obj.value = variable;

   return obj;
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
export function identifyArray(array) {
   var obj = {};
   var arr  = new Array(array.length);
   for(let i =0; i<array.length; i++){
      var counter = identifyVariable(array[i]);
      arr[i] = new Object();
      arr[i].type = counter.type;
      arr[i].value = counter.value;
   }

   return arr;
}

/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
   delete object[key];
   return;

}

/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
export function removeKeyNonDestructive(object, key) {

   let newobj = {...object};
   removeKey(newobj,key);
   return newobj;
}

/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
export function removeKeys(object, keyList) {
   var newobj = JSON.parse(JSON.stringify(object));
   for(let i =0; i<keyList.length;i++){
      removeKey(newobj,keyList[i]);
   }
   return newobj;



}
