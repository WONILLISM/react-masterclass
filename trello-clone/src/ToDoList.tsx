import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} placeholder="Write a to do" value={toDo} />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };

const ToDoList = () => {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {};
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true, maxLength: 10 })}
          placeholder="Last Name"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true, minLength: 5 })}
          placeholder="Confirm Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
