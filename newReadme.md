
{"array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0}


will need something to store our triplets (final array)
will need current sum as well 
currentSum = 0 ? 

let finalArr = []


sort the input array in ascending order

array = [-8, -6, 1, 2, 3, 5, 6, 12] 

create for loop with currentNum 
define left and right pointers left at currentNum + 1, right at end of array

add current num + left + right is it equal to target? if so return them

if that sum is < than target move left pointer up 1 left++

if that sum is greater than targetSum move right down 1 right--

if equal to target add to final array, 
after adding to final array left++ and right--

once pointers overlap, we increment currentNum up one
reset left pointer to currentNum + 1, and right end of array


