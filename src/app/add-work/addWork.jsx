"use client";
import { useState } from "react";
import AddTaskSvg from "../../assets/addwork.svg";
import Image from "next/image";
import { addWork } from "@/services/WorkService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddWork() {
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState({
    title: "",
    description: "",
    status: "none",
    
  });
  const handleAddWork = async (event) => {
    event.preventDefault();
    
    try {
      const result = await addWork(work);
      // console.log(result)
      handleClear();
      toast.success("Added Work", {
        position: "bottom-right",
        theme: "dark",
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      
      // Redirect

      router.push("/show-works")

    } catch (error) {
      console.log("Error", error);
      toast.warning("Failed to add work", {
        position: "bottom-right",
        theme: "dark",
      });
      setLoading(false);
    }
  };
  const handleClear = () => {
    setWork({
      title: "",
      description: "",
      status: "none",
      userId: "655c9d0b5fc3def78a9cd635",
    });
  };
  return (
    <div className=" grid grid-cols-12 justify-center my-6   ">
      <div className=" col-span-6 col-start-3  p-4  ">
        <div className=" mt-4 text-xl text-[#0074bc] uppercase">
          Add Work Here...
        </div>

        <form className="my-6" action="#!" onSubmit={handleAddWork}>
          {/* Title Input */}

          <div className="mt-6">
            <label
              htmlFor="work_title"
              className="block mb-2 text-md font-medium uppercase ps-2 "
            >
              Title
            </label>
            <input
              placeholder="Title"
              className="block w-full rounded-lg mt-2 placeholder:text-gray-700 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
              type="text"
              name="work_title"
              id="work_title"
              onChange={(e) => setWork({ ...work, title: e.target.value })}
              value={work.title}
            />
          </div>

          {/* Description Input */}

          <div className="mt-2">
            <label
              htmlFor="work_description"
              className="block mb-2 text-md font-medium uppercase ps-2 "
            >
              Description
            </label>
            <textarea
              placeholder="Description"
              className="block w-full rounded-md mt-2 placeholder:text-gray-700  bg-slate-50 text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
              type="text"
              name="work_description"
              id="work_description"
              rows={8}
              onChange={(e) =>
                setWork({ ...work, description: e.target.value })
              }
              value={work.description}
            />
          </div>
          {/* Description Input */}
          <div className="mt-4">
            <label
              htmlFor="work_status"
              className="block mb-2 text-md font-medium uppercase ps-2 "
            >
              Status
            </label>
            <select
              className="block w-full rounded-md mt-2 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
              name="work_status"
              id="work_status"
              defaultValue="none"
              value={work.status}
              onChange={(e) => setWork({ ...work, status: e.target.value })}
            >
              <option value="none" disabled>
                --- Select Status ---
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className=" flex justify-center mt-6">
            <button
              type="submit"
              className=" text-white bg-[#2f3c67] px-4 py-2 rounded transition-all duration-200 hover:bg-[#3b4c83] "
            >
              {loading ? "Adding" : "Add Work"}
            </button>
            <button
              type="button"
              className=" text-white bg-[#b62525] px-4 py-2 rounded ms-4 transition-all duration-200 hover:bg-[#cb3636]"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
        {/* {JSON.stringify(work)} */}
      </div>
      <div className="flex justify-center col-span-3 select-none">
        <Image
          src={AddTaskSvg}
          style={{ width: "220px" }}
          alt="Add Work Image"
        />
      </div>
    </div>
  );
}
