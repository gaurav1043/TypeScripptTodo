// types.ts
import { TodoSliceState } from "../features/todoSlice";
// Import other slice states as needed

export interface RootState {
  todos: TodoSliceState;
  // Include other slices as needed
}
