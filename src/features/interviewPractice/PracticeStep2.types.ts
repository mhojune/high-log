export interface Message {
  id: number;
  sender: "AI" | "User";
  text: string;
}
