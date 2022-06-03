/**
 * Implement inheritance. Define a constructor function SortArray which 
        Has a property originalArray
        Has get function to getSortedArray 
        Has a private function to sort the array.
        Takes as an input to construct an array of numbers
        Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object 
 */
const SortArray = function(originalArray) {
    this.originalArray = originalArray
    privateSort = function() {
        return this.originalArray.sort((a,b) => a-b);
    }
}

SortArray.prototype.getSortedArray = function() {
    return privateSort.call(this);
}

const JSONObjectsSortArray = function(arrayOfJsonObjects) {
    SortArray.call(this, arrayOfJsonObjects);
    privateSort = function() {
        return this.originalArray.sort((a,b) => a.num-b.num);
    }
}

JSONObjectsSortArray.prototype = Object.create(SortArray.prototype);
JSONObjectsSortArray.prototype.getSortedArray = function() {
    return privateSort.call(this);
}

const array1 = new SortArray([1,2,3,4,5,11,22,9]);
console.log(array1.getSortedArray());

const array2 = new JSONObjectsSortArray([{num:1},{num:2},{num:3},{num:11},{num:7}]);
console.log(array2.getSortedArray());