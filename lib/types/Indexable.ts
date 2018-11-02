export interface Indexable<T> {
    [index: number]: T;
    readonly length: number;
}
