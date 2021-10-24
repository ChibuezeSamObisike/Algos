function Test(args) {
  let newElem = [];
  let arr = args.split("");
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      newElem.push(arr[i]);
      newElem.push(count);
      count = 1;
    }
  }
  console.log(newElem.join(""));
}

const handleValidate = (arg) => {
  error = [(msg = ""), (game = "Hello World")];
  arg = arg.split("");
  if (arg.trim === "") {
    error[msg] = "Array cannot be empty";
    console.log(error[msg]);
    return;
  }
  if (!arg.includes("@")) {
    error[msg] = "Must include @ and .";
    console.log(error[msg]);
    return;
  }
  if (arg.length < 6) {
    error[msg] = "item most not be less than six";
    console.log(error[msg]);
    return;
  } else {
    error[msg] = "";
    console.log(error[msg]);
    console.log(arg.join(""));
  }
};

handleValidate("helloWorld@gmail.com");

function arrayReverse(args) {
  let newElem = [];
  args = args.split("");
  for (let i = args.length - 1; i >= 0; i--) {
    //chibueze
    newElem.push(args[i]);
  }
  newElem = newElem.join("");
  console.log(newElem);
}

arrayReverse("chibueze");

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 4, 5];

const intersectSet = (arr1 = [1, 2, 3, 4], arr2 = [1, 4, 5]) => {
  const newElem = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newElem.push(arr2[i]);
    } else {
      continue;
    }
  }
  console.log(newElem); //[1,4]
};

const checkItem = (itemsArray) => {
  let newArray = [];
  for (let i = 0; i < itemsArray.length; i++) {
    if (!newArray.includes(itemsArray[i])) {
      newArray.push(itemsArray[i]);
    } else {
      continue;
    }
  }
  return newArray;
};

const unionArray = (arr1 = [2, 1, 1, 12, 3, 4], arr2 = [1, 4, 5]) => {
  const newElem = [];
  newElem.push(...arr1);
  newElem.push(...arr2);
  let currValue = checkItem(newElem);
  console.log(currValue.sort((a, b) => a - b)); //[12345]
};

const arrDifference = (arr1 = [2, 1, 1, 12, 3, 4], arr2 = [1, 4, 5]) => {
  let difference = arr1.filter((x) => !arr2.includes(x));
  console.log(difference);
};

const arrDifferenceMain = (arr1 = [2, 1, 1, 12, 3, 4], arr2 = [1, 4, 5]) => {
  let newElem = [];
  //let diffElem = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newElem.push(arr1[i]);
    } else {
      continue;
    }
  }
  console.log(newElem);
};

intersectSet();
unionArray();
arrDifference();
arrDifferenceMain();
