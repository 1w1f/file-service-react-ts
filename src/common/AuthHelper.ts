import { AUTH } from "../softWareEnv";
import { local } from "../utils/store";

export default function GetAuth(): string {
  let authValue = local.get(AUTH);
  if (authValue && authValue !== "") {
    let value = JSON.parse(authValue);
    return value;
  } else {
    return "";
  }
}

export function SetAuth(authValue: object) {
  local.set(AUTH, JSON.stringify(authValue));
}
