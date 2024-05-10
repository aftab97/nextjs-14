// Thing to know next does not know this is a dynamic component - so use methods to make this dynamic

import { revalidatePath } from "next/cache";

async function handleFormServerActionAdd(formData: FormData) {
  "use server";

  // need to cast the value
  const firstName = formData.get("first-name") as string;
  // add logic here to add to DB
  revalidatePath("/topics/server-actions");
}

async function handleFormServerActionDelete(id: number) {
  "use server";
  // add logic here to delete at DB
  const ID = id;
  revalidatePath("/topics/server-actions");
}

export default function ServerActions() {
  // have here a query call to db getting back db data
  const todo = { id: 1234 };
  return (
    <div>
      <form action={handleFormServerActionAdd}>
        <input name="first-name" />
        <input name="last-name" />
        <button>Enter</button>
      </form>
      <ul>
        <li key={todo.id}>
          A list item
          <form action={handleFormServerActionDelete.bind(null, todo.id)}>
            {/* if you want to add spinner on button you can change the button into a client component */}
            <button>delete item</button>
          </form>
          {/* 
            METHOD 2:
            Requires hidden input storing ID - less clean approach
            <form>
                <input name="todoId" type="hidden" value={todo.id}/>
                <button>delete item</button>
            </form> 
            */}
        </li>
      </ul>
    </div>
  );
}
