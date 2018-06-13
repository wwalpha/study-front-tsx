import { ActionFunction0, Action } from "redux-actions";
import { AWSError } from "aws-sdk/global";

export interface Auth {
  signInSuccess: (user: any) => ActionFunction0<Action<{}>>
  signInFailure: (error: any) => ActionFunction0<Action<{}>>
}
