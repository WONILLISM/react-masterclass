import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please write To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
