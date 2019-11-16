
export enum OptType {
  Some,
  None
}

export type Some<T> = {
  item: T,
  type: OptType.Some
}

export type None = {
  type: OptType.None
}

export type Option<T> = Some<T> | None

export const some = <T>(item: T): Option<T> => {
  return { item: item, type: OptType.Some }
}

export const none = <T>(): Option<T> => {
  return { type: OptType.None }
}

export const map = <T,B>(option: Option<T>, func: (item: T) => B): Option<B> => {
  switch(option.type){
    case OptType.None : return none()
    case OptType.Some : return some(func(option.item))
  }
}

export const flatMap = <T,B>(option: Option<T>, func: (item: T) => Option<B>): Option<B> => {
  switch(option.type){
    case OptType.None : return none()
    case OptType.Some : return func(option.item)
  }
}

export const getOrElse = <T>(option: Option<T>,other: T): T => {
  switch(option.type){
    case OptType.Some : return option.item
    case OptType.None : return other
  }
}

export const getUnsafe = <T>(option: Option<T>): T => {
  switch(option.type){
    case OptType.Some : return option.item
    case OptType.None : throw new Error("getUnsafe called on None")
  }
}