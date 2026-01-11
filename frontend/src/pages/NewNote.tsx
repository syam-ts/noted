import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNotePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitButon = async (e: any) => {
    e.preventDefault();
    try {
      const { title, content } = formData;
      const response: any = await axios.post(
        "http://localhost:3001/notes/new",
        {
          title,
          content,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.status);
      if (response.status == "201") {
        console.log('enter here')
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="grid mx-auto mt-44 rounded-lg gap-12 w-96 border justify-center py-20">
        <div className="flex gap-5">
          <label>Enter Title</label>
          <input
            onChange={(e) => handleChange(e)}
            name="title"
            type="title"
            className="border border-black rounded-md py-1"
            placeholder="Enter title"
          />
        </div>
        <div className="flex gap-5">
          <label>Enter Content</label>
          <textarea
            onChange={(e) => handleChange(e)}
            name="content" 
            className="border border-black rounded-md py-1"
            placeholder="Enter content"
          />
        </div>

        <button
          onClick={submitButon}
          className="bg-blue-500 rounded-lg p-2 text-white font-bold"
        >
          Create new Note
        </button>
      </form>
    </div>
  );
};

export default NewNotePage;
