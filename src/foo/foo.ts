import { Hello } from "../hello";
import { bar } from "./bar";

export function foo(): Hello {
  return bar();
}
