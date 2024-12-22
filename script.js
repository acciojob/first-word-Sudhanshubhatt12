function firstWord(s) {
  // your code here
	if (s === "" || !s.includes(" ")) {
    return s; // Return the entire string
  }

  // Return the substring up to the first space
  return s.trim().split(" ")[0];
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
