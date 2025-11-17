function QuestionCard({ problem, sNum }) {
  return (
    <div className="quest-card flex justify-between w-full px-5 py-2 border-b  border-zinc-900 rounded">
      <div className="quest">
        <p className="text-(--t-color) text-lg">
          <span className="mr-5">{sNum}.</span> {problem.quest}
        </p>
      </div>
      <div className="btns">
        <button className="px-5 text-teal-500 cursor-pointer hover:text-teal-200 active:text-sm">
          Solve Problem
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
