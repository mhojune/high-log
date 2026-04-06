export interface Message {
  id: number;
  sender: "AI" | "User";
  text: string;
  state: "pending" | "typing" | "success";
}
