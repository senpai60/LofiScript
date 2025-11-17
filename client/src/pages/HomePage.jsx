import PlaylistCard from "../components/ui/PlaylistCard";


const playlists = [
  {
    id: 1,
    title: "100 JS Questions",
    description:
      "Handpicked JavaScript interview problems covering arrays, objects, logic, async, and DOM.",
    tags: ["beginner", "intermediate"],
  },
  {
    id: 2,
    title: "React Mastery",
    description:
      "Important React topics like hooks, state management, lifecycle, performance, and routing.",
    tags: ["intermediate"],
  },
  {
    id: 3,
    title: "Node + Express Challenges",
    description:
      "Backend API + middleware problems that help you become industry-ready.",
    tags: ["beginner", "backend"],
  },
  {
    id: 4,
    title: "Frontend Logic Drills",
    description:
      "Mini UI + logic puzzles to improve problem-solving for frontend interviews.",
    tags: ["beginner", "logic"],
  },
  {
    id: 5,
    title: "Advanced Algorithms",
    description:
      "High-level problems on graphs, DP, recursion, patterns, and advanced data structures.",
    tags: ["advanced", "competitive"],
  },
];

function Home() {
  return (
    <section className="w-full min-h-screen overflow-y-auto flex flex-wrap gap-5">
      {
        playlists.map((playlist)=>
          <PlaylistCard key={playlist.id} title={playlist.title} description={playlist.description} tags={playlist.tags} />
        )
      }
    </section>
  )
}

export default Home