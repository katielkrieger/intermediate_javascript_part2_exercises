Katie Krieger
4/19/17

[Reduce Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/javascript-iterators-reduce)



reduce
----
1. See below:

	```js
	function extractKey(arr,key){
		return arr.reduce(function(acc,next){
		  acc.push(next[key]);
		  return acc;
		},[]);
	}
	```	
2. See below:

	```js
	function filterLetters(arr,letter){
	    return arr.reduce(function(acc,next){
	        if(next.toLowerCase() === letter.toLowerCase()){
	          acc += 1;
	        }
	        return acc;
		},0);
	}
	```
3. See below:

	```js
	function addKeyAndValue(arr,key,val){
	    return arr.reduce(function(acc,next){
	        next[key] = val;
	        acc.push(next);
	        return acc
	    },[]);
	}
	```