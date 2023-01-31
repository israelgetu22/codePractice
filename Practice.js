let twoSum = function (nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log(diff);

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
