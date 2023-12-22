"use client";
import { ShowWorksPages } from "@/components/ShowWorksPages";
import { deleteWork, getParticularUserWorks } from "@/services/WorkService";
import UserContext from "@/context/UserContext";
import { useContext, useState } from "react";

import React, { useEffect } from "react";

const WorkPage = () => {
  const context = useContext(UserContext);
  const [works, setWorks] = useState([]);
  async function getWorks() {
    try {
      const result = await getParticularUserWorks(context.user._id);
      setWorks([...result]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(context.user);
    if (context.user) {
      getWorks();
    }
  }, [context.user]);

  const delWork = async (workId)=>{
    console.log(workId)
    try {
     await deleteWork(workId)
    context.setUser({...context.user})    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen mt-4">
        <div className=" col-span-8 col-start-3">
          <div className=" flex justify-between">
            <div className=" text-center mt-4 text-2xl font-semibold text-[#0074bc] uppercase">
              Your Works...
            </div>
            <div className=" text-center mt-4 text-lg font-semibold text-[#0074bc] uppercase">
              Total Works :{" "}
              <span className="text-yellow-50 text-2xl"> {works.length} </span>
            </div>
          </div>
          <div>
            {works.map((work) => {
              return (
                <>
                  <ShowWorksPages
                    work={work}
                    id={work._id}
                    author={context.user?.name}
                    delFunc={delWork}
                   
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
