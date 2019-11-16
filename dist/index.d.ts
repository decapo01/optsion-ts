export declare enum OptType {
    Some = 0,
    None = 1
}
export declare type Some<T> = {
    item: T;
    type: OptType.Some;
};
export declare type None = {
    type: OptType.None;
};
export declare type Option<T> = Some<T> | None;
export declare const some: <T>(item: T) => Option<T>;
export declare const none: <T>() => Option<T>;
export declare const map: <T, B>(option: Option<T>, func: (item: T) => B) => Option<B>;
export declare const flatMap: <T, B>(option: Option<T>, func: (item: T) => Option<B>) => Option<B>;
export declare const getOrElse: <T>(option: Option<T>, other: T) => T;
export declare const getUnsafe: <T>(option: Option<T>) => T;
