import React from "react";



export default function PlaylistCard({
  title = "Untitled",
  description = "No description provided.",
  tags = [],
  onView = () => {},
  onArchive = () => {},
}) {
  return (
    <article
      className="max-w-md w-full bg-(--accent-color) border-gray-200 rounded-2xl shadow-md p-5 flex flex-col gap-4"
      aria-label={`Playlist card: ${title}`}
    >
      {/* Title + tag row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-(--ht-color)">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {/* Example small icon */}
          <svg
            className="w-6 h-6 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-(--t-color) line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags && tags.length > 0 ? (
          tags.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700"
            >
              {t}
            </span>
          ))
        ) : (
          <span className="text-xs text-slate-400">No tags</span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-3">
        <button
          onClick={onView}
          className="transition-all ease-[[cubic-bezier(0.4, 0.0, 0.2, 1)] flex-1 px-4 py-2 rounded-lg bg-(--accent-color-200) text-white font-medium shadow-sm hover:bg-(--hover-color) focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-300"
          aria-label={`View questions for ${title}`}
        >
          View questions
        </button>

        <button
          onClick={onArchive}
          className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
          aria-label={`Add ${title} to archive`}
        >
          Add to archive
        </button>
      </div>
    </article>
  );
}

