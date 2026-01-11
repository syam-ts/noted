import axios from "axios";
import { useEffect, useState } from "react";

export const NoteCard = () => {
  interface INotes {
    title: string;
    content: string;
    createdAt: string;
  }

  const [notes, setNotes] = useState<INotes[]>([
    {
      title: "",
      content: "",
      createdAt: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/notes/fetchAll"
        );
console.log('the response', response)
        setNotes(response.data.data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {notes.map((note: INotes, index: number) => (
        <div
          key={index}
          className="w-110 h-60 rounded-lg bg-blue-200 border-black border"
        >
          <section className="py-4 font-bold text-black text-center">
            <p>{note.title}</p>
          </section>
          <section className="py-6 font-bold text-black text-center">
            <span className="line-clamp-3">{note.content}</span>
          </section>
          <section className="pt-2 font-bold text-black text-center">
            <span>{note.createdAt}</span>
          </section>
        </div>
      ))}
    </div>
  );
};
