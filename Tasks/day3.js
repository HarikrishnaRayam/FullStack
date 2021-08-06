//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

const students = [
    { name: "Adhi", gender: "male" ,score:90},
    { name: "Ahamed", gender: "male",score:80 },
    { name: "Rutika Kadam", gender: "female",score:75 },
    { name: "Priyadharsini", gender: "female",score:60 },
    { name: "Deepak", gender: "male",score:35 },
    { name: "Satish", gender: "male",score:55 },
    
  ];
// console.log(students.length);


//for loop
for(let i = 0; i < students.length ; i++){
  console.log(i);
  console.log(students[i].name,"-",students[i].gender,"-",students[i].score);
}

//for..in loop

for(let i in students){
  nameOfStudent = students[i].name;
  console.log(i);
  console.log("Name of student is : ",nameOfStudent);
}

//for..of loop
for(let i of students){
  console.log(i);
  console.log(i.name);
}

//forEach
students.forEach(student => console.log(student.name));

/*-------------------------------------------------------------------------------*/

//2.Create your own resume data in JSON format

{
  "basics": {
      "name": "Rayam Harikrishna",
      "label": "Programmer",
      "image": "",
      "email": "rayamharikrishna@gmail.com",
      "phone": "+91 9963420447",
      "summary": "3 years of experience in IT Operations. Looking for opportunites to solve new problems and explore new technologies.",
      "location": {
        "address": "kavali yadavalli",
        "postalCode": "524234",
        "city": "Nellore",
        "countryCode": "India",
        "state": "AndhraPradesh"
      },
      "profiles": [{
        "network": "GitHub",
        "username": "HarikrishnaRayam",
        "url": "https://github.com/HarikrishnaRayam"
      }]
    },
    "work": [{
    "name": "DXC",
    "position": "IT Operations",
    "url": "https://dxc.com",
    "startDate": "2018-11-28",
    "endDate": "2021-12-12",
    "summary": "Resolvings issues related to hardware and software and appliactions of HP employees"
  }],
  "education": [{
    "institution": "JNTUA University",
    "url": "https://jntua.ac.in/",
    "area": "Electronics and Communication",
    "studyType": "Bachelor",
    "startDate": "2013-09-17",
    "endDate": "2017-05-01",
    "score": "6.9"
  }],
  "skills": [{
    "name": "Full Stack Web Development",
    "level": "Intermediate",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript",
      "React.Js",
      "python"
    ]
  }],
  "languages": [{
    "language": "English,Telugu",
    "fluency": "Native speaker"
  }]
}
/*--------------------------------------------------------------------*/
/*
Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
*/
