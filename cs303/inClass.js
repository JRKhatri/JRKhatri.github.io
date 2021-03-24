// const student1 = {studentId : "s101", quizAns:[1,1,2,4]}
// const student2 = {studentId : "s102", quizAns: [1,2,3,1]}
// const student3 = {studentId : "s103", quizAns:[2,1,2,4]}
// const answer =[3,1,2,4];

// let quiz =[];
// quiz.push(student1);
// quiz.push(student2);
// quiz.push(student3);

// function gradeQuiz(arry, ans){
//     let grade ={};
    
//         }
//     }
//     }

// }

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

function getAllContent(){
    let content =[];
    for(let details of library){
        for(let key in details)
        content.push(details[key])
    }
   let str = content.join("\n")
    return str;
}

console.log(getAllContent(library));