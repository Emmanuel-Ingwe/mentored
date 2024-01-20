'use client';
import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserType } from '@/app/(LandingPage)/shared/types/type';

export type UserTypeModal = {
  userType: UserType;
};

export type UserTypeSwitch = {
  userType: UserType;
  setUserType: (userType: UserType) => void;
};

const userTypeSwitchStore = create<UserTypeSwitch, any>(
  persist(
    (set) => {
      const userType = {
        userType: UserType.MENTEE,
      };

      const setUserType = (userType: UserType) => {
        return set((_) => {
          return produce(_, (draft) => {
            draft.userType = userType;
          });
        });
      };
      return {
        setUserType,
        userType: userType.userType,
      };
    },
    {
      name: 'themeStorage',
    },
  ),
);

export default userTypeSwitchStore;
