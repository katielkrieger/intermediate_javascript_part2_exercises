Katie Krieger
4/19/17

[Iterators Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/javascript-iterators-exercises)

Part 1
----

1. Print emails:

		function printEmails(arr){
		    arr.forEach(function(val){
		        console.log(val.email);
		    })
		}
2. Print hobbies:

		function printHobbies(arr){
		    arr.map(function(val){
		        val.hobbies.forEach(function(val){
		            console.log(val)
		        })
		    })
		}
		
3. Find home town by state:

		function findHometownByState(arr,state){
		    var result = arr.find(function(val){
		        return val.hometown.state === state;
		    })
		    return result;
		}

4. All languages:

		function allLanguages(arr) {
		    outArr = [];
		    arr.map(function(val){
		        val.favoriteLanguages.map(function(val){
		            outArr.push(val);
		        })
		    })
		    return outArr;
		}

5. Has favorite editor:

		function hasFavoriteEditor(arr, str){
		    return arr.some(function(val){
		        return val.favoriteEditor === str;
		    })
		}

6. Find by user name:

		function findByUserName(arr, name){
		    var result = arr.find(function(val){
		        return val.username === name;
		    })
		    return result;
		}

Part 2
---
1. Vowel count:

		function vowelCount(str){
		    var arr = str.split(""); // make array of letters
		
		    function isVowel(letter){
		        letter = letter.toLowerCase();
		        return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || false;
		    }
		
		    return arr.reduce(function(acc,next){
		        if(isVowel(next)){
		            if(next in acc){
		                acc[next]++;
		            } else {
		                acc[next] = 1;
		            }
		        }
		        return acc;
		    },{}) 
		}
		
2. Remove vowels:

		function removeVowels(str){
		    var arr = str.split("");
		
		    function isVowel(letter){
		        letter = letter.toLowerCase();
		        return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || false;
		    }
		
		    return arr.filter(function(val){
		        return !isVowel(val);
		    })
			}
			
Part 3
---

__forEach__

1. list names:

		function listNames(arr){
		    arr.forEach(function(val){
		        console.log(val.name);
		    })
		}
2. List song details:

		function songDetails(arr) {
		    arr.forEach(function(val){
		        console.log(val.name + ", by " + val.artist + " (" + val.duration + ")");
		    })
		}

3. Summer jam count

		function summerJamCount(arr){
		  counter = 0;
		  arr.forEach(function(val){
		    if(+val.month >= 6 && +val.month <= 8){
		      counter++;
		    }
		  })
		}
		
__map__

1. Get durations:

		function getDurations(arr) {
		    return arr.map(function(val){
		    	return val.duration;
		    })
		}

2. Get duration in seconds:

		function getDurationInSeconds(arr) {
		    return arr.map(function(val){
		        var mins = +val.duration.split(":")[0];
		        var sec = +val.duration.split(":")[1];
		        return mins * 60 + sec;
		    })
		}

3. Get main artists:

		function getMainArtists(arr){
		    return arr.map(function(val){
		        return val.artist.split(" featuring")[0];
		    })
		}

__filter__

1. Get big hits:

		function getBigHits(arr){
		    return arr.filter(function(val){
		        return +val.weeksAtNumberOne > 9;
		    })
		}

2. Get short songs:

		function getShortSongs(arr){
		    return arr.filter(function(val){
		        return +val.duration.split(":")[0] < 3;
		    })
		}

3. Get songs by artist:

		function getSongsByArtist(arr,artist){
		    return arr.filter(function(val){
		        return val.artist === artist;
		    }).reduce(function(acc,next){
		        acc.push(next.name)
		        return acc;
		    },[])
		}

4. Get one hit wonders:

		function getOneHitWonders(arr){

		    var artistsArr = arr.map(function(val){
		        return val.artist;
		    })
		    
		    return arr.filter(function(val){
		        return artistsArr.indexOf(val.artist) === artistsArr.lastIndexOf(val.artist);
		    })
		}
		
__reduce__

1. Summer jam count 2:

		function summerJamCount2(arr){
		  return arr.reduce(function(acc,next){
		    if(+next.month >= 6 && +next.month <= 8) {
		      acc++
		    }
		    return acc;
		  },0)
		}

2. Get total duration in seconds:

		function getTotalDurationInSeconds(arr) {
		  return getDurationInSeconds(arr).reduce(function(acc,next){
		    return acc + next;
		  })
		}

3. Get song count by artist:

		function getSongCountByArtist(arr) {
		  return arr.reduce(function(acc,next){
		    if(next.artist in acc){
		      acc[next.artist]++;
		    } else {
		      acc[next.artist] = 1;
		    }
		    return acc;
		  },{})
		}

4. Average weeks at number 1:

		function averageWeeksAtNumberOne(arr) {
		  var sum = arr.reduce(function(acc,next){
		    acc += +next.weeksAtNumberOne;
		    return acc;
		  },0)
		  return sum/arr.length;
		}