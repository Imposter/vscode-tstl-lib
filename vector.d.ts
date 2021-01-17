/**
 * EASTL Vector class of generic type T
 */
declare class vector<T> {
    /**
     * Adds a new value to the end of the vector, similar to table.insert(...). Usage: `someVector:add(newValue)`
     * @param value The value to insert. The type of the value **must** match the type of the vector.
     */
    public add(value: T): void;

    /**
     * Inserts a value at the specified index. Usage: `someVector:insert(2, newValue)`
     * @param index The index to insert the provided value at
     * @param value The value to insert. The type of the value **must** match the type of the vector.
     */
    public insert(index: number, value: T): void;

    /**
     * Erases a value at the specified index. Usage: `someVector:erase(2)`
     * @param index The index to remove
     */
    public erase(index: number): void;

    /**
     * Erases all the values and empties the vector. Usage: `someVector:clear()`
     */
    public clear(): void;

    /**
     * Finds the first index of a specific value in the vector. Returns `-1` if the value is not found. Usage: `local idx = someVector:index_of(someValue)`
     * @param value The value to find the index for within the vector. The type of the value **must** match the type of the vector.
     * @returns Returns the index of the specified value within the vector
     */
    public index_of(value: T): number;
}
