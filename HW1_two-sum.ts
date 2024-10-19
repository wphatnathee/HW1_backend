// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    for(let i = 0 ; i < nums.length;i++){
        for(let j = i+1 ; j < nums.length;){
            if (nums[j]=== target - nums[i]) {
                return [i,j];
            }
        }
    }
    return [];
};

function twoSum1(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)]
        }
    }
    return [];
}

function twoSum3(nums: number[], target: number): number[] {
    const map: Map<number,number> = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        const comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp),i];
        }
        map.set(nums[i],i)
    }
    return [];
}