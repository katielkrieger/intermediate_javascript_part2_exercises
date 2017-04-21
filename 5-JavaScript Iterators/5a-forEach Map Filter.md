Katie Krieger
4/19/17

[forEach, Map, and Filter Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/ajax-introduction)


forEach
------

1. See below:

	```js
	function printFirstAndLast(arr) {
		arr.forEach(function(val,index,arr){
		 var out = val[0]+val[val.length-1];
		 console.log(out);
		});
	}
	```
		
2. See below:

	```js
	function addKeyAndValue(array, key, value) {
		array.forEach(function(val){
		   val[key] = value;
		});
		return array;
	};
	```
		
map
-----
3. See below:

	```js
	function valTimesIndex(array) {
		return array.map(function(val,index){
		   return val*index;
		});
	};
	```

2. See below:

	```js
	function extractKey(array,key) {
		return array.map(function(val){
		 return val[key];
		})
	}
	```

filter
----
5. See below:

	```js
	function filterLetters(arr,letter) {
	  var arrayOfLetters = arr.filter(function(val){
	    return val.toLowerCase() === letter.toLowerCase();
	  });
	  return arrayOfLetters.length;
	}
	```
		
6. See below:

	```js
	function filterKey(arr,key) {
	  var truthies = arr.filter(function(val){
	    return val[key] == true;
	  });
	  return truthies;
	}
	```
