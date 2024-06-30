import { Movement } from "../Movement/Movement";

export interface ExpenseProps {
  emitMovement: (movement: Movement) => void;
  currentExpense: number;
  currentBalance: number;
}
