import { INote } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchNotes(): Promise<INote[]> {
  const response = await fetch(API_URL);
  return response.json();
}
