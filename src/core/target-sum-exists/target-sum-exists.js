const checkSum = (arr, crrValue, targetValue, crrDeep, targetDeep) => {
  let exists = false;

  for (let i = 0; i < arr.length; i++) {
    if (crrDeep + 1 < targetDeep) {
      exists = checkSum(arr, arr[i] + crrValue, targetValue, crrDeep + 1, targetDeep);
      if (exists) break;
    } else if (arr[i] + crrValue === targetValue) {
      exists = true;
    }
  }

  return exists;
};

const targetSumExistsInTwoNumbers = (list, target) => {
  return checkSum(list, 0, target, 0, 2);
};

const targetSumExistsInThreeNumbers = (list, target) => {
  return checkSum(list, 0, target, 0, 3);
};

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers,
};
