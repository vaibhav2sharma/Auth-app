function generateAuthId(studentCode, email) {
  let emailPart = email.split("@")[0];
  let concatenatedStr = studentCode + emailPart;
  concatenatedStr = concatenatedStr.toLowerCase();

  let filteredStr = "";
  for (let i = 0; i < concatenatedStr.length; i++) {
    if ((i + 1) % 2 !== 0) {
      filteredStr += concatenatedStr[i];
    }
  }

  let convertedStr = "";
  for (let char of filteredStr) {
    if (char >= "a" && char <= "z") {
      convertedStr += (char.charCodeAt(0) - 96).toString();
    } else if (char >= "0" && char <= "9") {
      convertedStr += char;
    } else {
      convertedStr += "1";
    }
  }

  let authId = "";
  let left = 0,
    right = convertedStr.length - 1;
  while (left <= right) {
    if (left !== right) {
      authId += convertedStr[left] + convertedStr[right];
    } else {
      authId += convertedStr[left];
    }
    left++;
    right--;
  }

  return authId;
}

export default generateAuthId;
