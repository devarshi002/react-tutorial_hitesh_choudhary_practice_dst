function reverseString(str) {
    let reversed = "";

    for (let i=str.length-1; i>=0; i--) {
        reversed += str[i]

    }
    return reversed
}

console.log(reverseString("Hello"));



function reverseString(str) {
  let arr = [];
  
  // convert string to array manually
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  // convert array back to string manually
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(reverseString("hello")); // olleh