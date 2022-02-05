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

interface IForm {
  //필수가 아니라면 항목에 물음표
  email: string;
  firstName: string;
  lastName: string;
  password1: string;
  password: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      // 초기 설정 값을 정할 수 있다.
      email: "a",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "서버와의 연결이 끊겼습니다." });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일이 필요합니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
          placeholder="Email"
        />
        {/* <span>{errors.email.type === "require" ? "이메일이 필요합니다."}</span> */}
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "필수값 입니다.",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nico allowd" : true,
              noWopark: (value) =>
                value.includes("wopark") ? "no wopark allowd" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "필수값 입니다.",
            maxLength: 10,
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("password", {
            required: "필수값 입니다.",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "필수값 입니다.",
            minLength: 5,
          })}
          placeholder="Confirm Password"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
