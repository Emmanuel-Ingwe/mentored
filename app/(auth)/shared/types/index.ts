import type * as e from './enums';
import { AuthStepEnum } from '../context/AuthStepsEnum';

export type UserType = e.UserEnum.MENTEE | e.UserEnum.MENTOR;
export type MenteeType = e.UserEnum.EXPERIENCED | e.UserEnum.NEWBIE;

export type Step =
  | AuthStepEnum.SELECTUSERTYPE
  | AuthStepEnum.SIGNUP
  | AuthStepEnum.ONBOARDINGSTEPONE
  | AuthStepEnum.ONBOARDINGSTEPTWO
  | AuthStepEnum.ONBOARDINGSTEPTHREE;

export type Steps = Record<
  Step,
  { active: boolean; completed: boolean; skipped?: boolean }
>;

export const defaultStepsValues: Steps = {
  [AuthStepEnum.SELECTUSERTYPE]: {
    active: true,
    completed: false,
  },
  [AuthStepEnum.SIGNUP]: {
    active: false,
    completed: false,
  },
  [AuthStepEnum.ONBOARDINGSTEPONE]: {
    active: false,
    completed: false,
  },
  [AuthStepEnum.ONBOARDINGSTEPTWO]: {
    active: false,
    completed: false,
  },
  [AuthStepEnum.ONBOARDINGSTEPTHREE]: {
    active: false,
    completed: false,
  },
};
