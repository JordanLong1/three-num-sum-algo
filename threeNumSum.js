function threeNumberSum(array, targetSum) {
   
    let tripletArr = []

    array = array.sort((a, b) => a - b); 

    let currentSum = 0; 

    for (let currentNum = 0; currentNum < array.length; currentNum++) {

        let left = currentNum + 1; 

        let right = array.length - 1; 

        while (left < right) {
            currentSum = array[currentNum] + array[left] + array[right]
            if (currentSum === targetSum) {
                tripletArr.push([array[currentNum], array[left], array[right]])
								left++
							right--
            } else if (currentSum < targetSum) {
                left++
                
            } else if (currentSum > targetSum) {
                right-- 
            } 
        }
			
    }
	return tripletArr
 
}
  