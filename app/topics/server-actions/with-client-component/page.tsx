"use client";

// use case is for when you are building a app that does not require
// progressive enhancement (work without JS)


//use case
//when your app requires JS to work

import { useFormStatus } from "react-dom";
import { handleFormServerActionAdd } from "./server-actions/functions";

// can not use async with client component
export function SubmitButton() {
  const { pending } = useFormStatus();
  return <button>{pending ? "Adding Item...." : "Add Item"}</button>;
}

export default function ClientComponent() {
  // have here a query call to db getting back db data
  const todo = { id: 1234 };
  return (
    <div>
      <form
        //replace action with onSubmit and handle as normal React Component
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          handleFormServerActionAdd(formData).then(()=> form.reset());
        }}
      >
        <input name="first-name" />
        <SubmitButton />
      </form>
    </div>
  );
}
