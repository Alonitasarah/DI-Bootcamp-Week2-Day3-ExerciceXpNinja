function findAvg(gradesList) {
    if (gradesList.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let result = sum / gradesList.length;
    if (result < 65) {
      return "your result : " + result + " is failed and must repeat the course.";
    } else {
      return "Congratulation ! your result : " + result + " is passed.";
    }
  }
  
  console.log(findAvg([100, 123, 2323]));