
	
	//write a function that takes in a non empty array of distinct integers and an integer representing the target sum
	// the function should find all triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets
	// the numbers in each triplet should be ordered in ascending order/
	
	// if no three numbers sum up to the target sum, the function should return an empty array



// sort array in ascending order
	// use left and right pointer to find our answer 
	// will need one while loop, probably a for loop as well
	// currentSum = currentNum + left + right 
	// is that sum equal to our targetSum? if so great, add to our final array.
	// if its not equal and less(since array is sorted it probably will be)
	// move left pointer up 1. is that sum greater than 0? if so move right pointer down 1
	// when moved to the right is that sum greater than zero? if so move left up 1
	// when equal to 0, add triplet ([-8, 2, 6 ])
	// after adding triplets to end array, that is the only time we move left and right at the same time. left++ right--
	// once the two pointers overlap, we are done with that rouund and then we move up our currentNum up 1
	// reset left pointer to currentNum + 1, move right pointer back to the right
	
	
	// for loop first, inside for loop is where we run our while loop with left and right pointer.
	
	