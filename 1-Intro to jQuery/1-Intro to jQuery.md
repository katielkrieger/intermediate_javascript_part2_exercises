Katie Krieger

4/17/17


[jQuery Introduction Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/jquery-introduction)
-----


* jQuery is a popular JavaScript library that allows us to more easily manipulate the DOM, AJAX, and more. It also helps deal with cross browser differences.
* A jQuery object is not the same as an HTML element. A jQuery object is an array-like object, but you cannot directly use vanilla JavaScript methods like `innerText` on it. But jQuery objects have access to all of the functionality of jQuery. HTML elements must be converted to jQuery objects in order to use jQuery.
* `$` is an alias for the `jQuery` function. In order to use jQuery methods, we must wrap elements or node lists in the jQuery function.
* To wait for the DOM to load:

	```js
	$(function() {
	    // code here
	});
	```
* To select the `footer` element:

	```js
	$('footer');
	```

* To select the `div` with an `id` of "container":

	```js
	$('#container');
	```
* To select all of the `li`s inside of the `ul` with a class of `nav`:

	```js
	$('.nav li');
	```
* To select the third `li` inside of the `div` with a class of `list-container`:

	```js
	$('.list-container li:nth-child(3)');
	```
* To select only the last `li` in each of the `ul`s:

	```js
	$('ul li:last-child');
	```


[jQuery Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/jquery-exercises)
----

See `HTML` file in this folder.