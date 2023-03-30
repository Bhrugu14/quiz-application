export const difficultyData = [
  { id: 101, name: "Easy", value: "easy" },
  { id: 102, name: "Medium", value: "medium" },
  { id: 103, name: "Hard", value: "hard" },
];

export const typeData = [
  { id: 201, name: "Multiple Choice", value: "multiple" },
  { id: 202, name: "True/False", value: "boolean" },
];

export const codes = [
  { Code: 0, message: "Success Returned results successfully" },
  {
    Code: 1,
    message: "No Results Found",
  },
  { Code: 2, message: "Invalid Parameter Contains an invalid parameter" },
  { Code: 3, message: "Token Not Found Session Token does not exist" },
  {
    Code: 4,
    message:
      "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary",
  },
];
