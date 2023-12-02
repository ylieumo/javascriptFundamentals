function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    validateInput(courseInfo, assignmentGroup, learnerSubmissions);
  
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