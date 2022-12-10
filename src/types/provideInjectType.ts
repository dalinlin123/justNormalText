import { InjectionKey, Ref, ref } from "vue";
export interface  User{
    name: string;
    age: number;
}
export type SetUser = (user: User) => void;

export const userKey:InjectionKey<Ref<User>> = Symbol('');
export const setUserKey:InjectionKey<Ref<User>> = Symbol('');