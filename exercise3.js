/**
 * Write a function groupObjectsBy which takes as an input an array of JSON objects and returns a grouped object by a key.
 */

let groupObjectsByKey = function(arrayOfObjects, key) {
    let groupedObjects = {};
    for(let data of arrayOfObjects) {
        if(groupedObjects[data[key]] === undefined) {
            groupedObjects[data[key]] = [];
        }
        groupedObjects[data[key]].push(data);
    }
    return groupedObjects;
}

let data = [ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
]
  
let key = 'name';

let result = groupObjectsByKey(data, key);
console.log(result);
  