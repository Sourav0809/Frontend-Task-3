export const sortData = (data, key, sortOrder) => {
    return [...data].sort((a, b) => {
        const sortOrderMultiplier = sortOrder === "asc" ? 1 : -1;
        if (typeof a[key] === "string") {
            return sortOrderMultiplier * a[key].localeCompare(b[key]);
        } else {
            return sortOrderMultiplier * (a[key] - b[key]);
        }
    });
};
