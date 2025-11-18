import { useNavigate } from "react-router-dom";

function QuestionCard({ problem, sNum, playlistId }) {
  const navigate = useNavigate();
  return (
    <div className="quest-card flex justify-between w-full px-5 py-2 border-b  border-zinc-900 rounded">
      <div className="quest">
        <p className="text-(--t-color) text-lg">
          <span className="mr-5">{sNum}.</span> {problem?.title}
        </p>
      </div>
      <div className="btns">
        <button
          onClick={() =>
            navigate(`/problem/${problem?._id}`, {
              state: { playlistId },
            })
          }
          className="px-5 text-teal-500 cursor-pointer hover:text-teal-200 active:text-sm"
        >
          Solve Problem
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
