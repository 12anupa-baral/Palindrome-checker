function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
}

function submit() {
  let input = document.getElementById("text-input").value;
  let result = document.getElementById("result");

  if (input === "") {
    alert("Please input a value");
    return false;
  }

  if (isPalindrome(input)) {
    result.innerText = `${input} is a palindrome`;
    return false;
  } else {
    result.innerText = `${input} is not a palindrome`;
  }
  return true;
}
