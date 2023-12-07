function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  // called at the beginning to validate the input data 
    validateInput(courseInfo, assignmentGroup, learnerSubmissions);
  //  Initializes an empty array (learnerData) to store the processed data for each learner
    const learnerData = [];
  
    for (const submission of learnerSubmissions) {
      try {
        const learner = processLearnerSubmission(submission, assignmentGroup);
        updateLearnerData(learnerData, learner);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    return learnerData;
  }
  
  function validateInput(courseInfo, assignmentGroup, learnerSubmissions) {
    if (
      !courseInfo ||
      !courseInfo.id ||
      typeof courseInfo.name !== "string" ||
      !assignmentGroup ||
      !assignmentGroup.id ||
      typeof assignmentGroup.name !== "string" ||
      typeof assignmentGroup.course_id !== "number" ||
      typeof assignmentGroup.group_weight !== "number" ||
      !assignmentGroup.assignments ||
      !Array.isArray(assignmentGroup.assignments) ||
      !learnerSubmissions ||
      !Array.isArray(learnerSubmissions)
    ) {
      throw new Error("Invalid input data.");
    }
  
    if (courseInfo.id !== assignmentGroup.course_id) {
      throw new Error("Assignment group does not belong to the specified course.");
    }
  }

  // The provided course information.
const CourseInfo = {
  id: 404,
  name: "English"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 123456,
  name: "reading comprehension",
  course_id: 444,
  group_weight: 25,
  assignments: [
    {
      id: 11,
      name: "reand the passage ",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 22,
      name: "answer the questions",
      due_at: "2023-02-27",
      points_possible: 200
    },
    {
      id: 13,
      name: "summarize the text",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};



// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 1234,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 1234,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 1234,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 11,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 12,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);