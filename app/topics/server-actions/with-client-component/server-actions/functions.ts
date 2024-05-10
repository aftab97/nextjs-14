"use server";
import { revalidatePath } from "next/cache";

export async function handleFormServerActionAdd(formData: FormData) {
  // need to cast the value
  const firstName = formData.get("first-name") as string;
  console.log(firstName)
  // add logic here to add to DB
  revalidatePath("/topics/server-actions");
}

export async function handleFormServerActionDelete(id: number) {
  // add logic here to delete at DB
  const ID = id;
  revalidatePath("/topics/server-actions");
}
