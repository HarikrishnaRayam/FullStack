const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  
  // Task 1: find all female name

 const gender = students.filter((value)=> value.gender == "female");
 console.log(gender.map((n)=> n.name));
  // ["Rutika kadam", "Priyadharsini"];
  
  //Task 2: Starting with 'A'
  const startWithA = students.filter((value)=> value.name[0] == "A");
  console.log(startWithA.map((n)=>n.name));
  // ["Adhi", "Ahamed"];
  
  // Task 3: Count the no. of males
  const maleCount = students.filter((value)=> value.gender == "male");
  console.log(maleCount.length)
  // 2
