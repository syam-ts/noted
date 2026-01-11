import { Link } from "react-router-dom";
import { NoteCard } from "../components/noteCard";

const HomePage = () => {

  return (
    <div className="flex justify-center py-12">
      <section className="">
        <NoteCard />
      </section>
      <section className="justify-end">
        <Link to={'/new-notes'}>
        <button className="bg-blue-700 rounded-lg p-2 text-white">new Notes</button>
        </Link>
      </section>
    </div>
  )
};


export default HomePage;