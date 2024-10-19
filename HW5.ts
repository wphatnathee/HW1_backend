function removeDuplicates(nums: number[]): number {
    let k : number = 1;

    for(let i = 1 ; i < nums.length; i++){
        if (nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            k++
        }
    }
    return k
};


function removeDuplicates1(nums: number[]): number {
    let temp = [...new Set(nums)] ;
    nums.length = 0;
    nums.push(...temp);
    return nums.length;
};