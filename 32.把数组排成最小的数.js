//32.把数组排成最小的数
function PrintMinNumber(numbers){
    // write code here
  return numbers.sort((l, r) => {
      let s1 = l + "" + r;
      let s2 = r + "" + l;
      if (s1 > s2) return 1;
      if (s2 > s1) return -1;
      return 0;
    }).join("");
}