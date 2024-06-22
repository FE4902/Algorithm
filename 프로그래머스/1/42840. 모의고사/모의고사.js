const solution = (answers) => {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];
  const answer = [];  

  for(let i in answers) {
    answers[i] === student1[i % student1.length] && score[0]++;
    answers[i] === student2[i % student2.length] && score[1]++;
    answers[i] === student3[i % student3.length] && score[2]++;
  }

  for(let j in score) {
    Math.max(...score) === score[j] && answer.push(Number(j) + 1);
  }

  return answer;
}