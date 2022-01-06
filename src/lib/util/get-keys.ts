/**
 * Given an array of objects, returns a unique array of all keys contained in the objects.
 *
 * @param x an array of objects.
 */
export const getKeys = (x: object[]): string[] => {
    try {
        const notUniqueKeys = x.flatMap(x => Object.keys(x))
        const uniqueKeys = [...new Set(notUniqueKeys)]
        return uniqueKeys
    } catch (error) {
        console.error(error)
        return []
    }
}
