/**
 * Implement inheritance. Define a constructor function SortArray which 
        Has a property originalArray
        Has get function to getSortedArray 
        Has a private function to sort the array.
        Takes as an input to construct an array of numbers
        Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object 
 */
class SortArray {
    constructor(originalArray) {
        this.originalArray = originalArray;
    }

    /**
     * Sorts the array
     * @returns sorted array
     */
    #privateSort() {
        return this.originalArray.sort((a,b) => a-b);    
    }

    /**
     * @returns original Array
     */
    get getOriginalArray() {
        return this.originalArray;
    }

    /**
     * @param originalArray
     */
    set setOriginalArray(originalArray) {
        this.originalArray = originalArray;
    }

    /**
     * @returns sorted array
     */
    getSortedArray() {
        return this.#privateSort();
    }
}

class JSONObjectsSortArray extends SortArray {
    constructor(originalArray) {
        super(originalArray);
    }

    /**
     * sorts the json object array using num field
     * @returns sorted JSONObject Array
     */
    #privateSort() {
        return this.originalArray.sort((a, b) => a.num - b.num);
    }

    /**
     * @returns sorted array
     */
    getSortedArray() {
        return this.#privateSort();
    }
}

const array1 = new SortArray([1,2,3,4,5,11,22,9]);
console.log(array1.getSortedArray());

const array2 = new JSONObjectsSortArray([{num:1},{num:2},{num:3},{num:11},{num:7}]);
console.log(array2.getSortedArray());
console.log(array2.getOriginalArray);