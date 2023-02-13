import { getActionType, action } from '../Action'
import * as Action from  "./ActionTypes"

export const GetStudentFeesDetails = (payload) => action(Action.GET_STUDENT_FEES_DETAILS, payload)
