var isSameTree = function (p = [1, 2, 3], q = [1, 2, 3]) {
  if (p.length !== q.length) return false;

  const sorted1 = [...p].sort();
  const sorted2 = [...q].sort();

  return sorted1.every((val, i) => val === sorted2[i]);
};