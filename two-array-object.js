function twoArrayObject(keys, values) {
    // make var obj = {}
    // loop over keys array from start
    // check if the indx exists in the values array or if it is undefined
        // if exists, set key: value in obj
        // else, set key: null in obj
    // return obj

    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        if (values[i] === undefined) obj[keys[i]] = null;
        else obj[keys[i]] = values[i];
    }
    return obj;
}