//move nonzero to left side

function moveZeros(nums) {
    let pos = 0; //position

    //move non zero ele forward
    for (let i=0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            nums[pos] = nums[i]
            pos++
        }
    }

    //fill remaining with zero
    for(let i=pos; i<nums.length; i++){
        nums[i]=0;
    }
    return nums;
}


console.log(moveZeros([0,1,2,3,0]));
