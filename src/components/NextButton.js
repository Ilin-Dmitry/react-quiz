function NextButton({ dispatch, answer, index, numQuestions }) {
  console.log(index, numQuestions);
  if (answer === null) return;
  if (index + 1 < numQuestions)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "nextQuestion" });
          }}
        >
          Next
        </button>
      </div>
    );
  if (index + 1 === numQuestions)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "finished" });
          }}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
