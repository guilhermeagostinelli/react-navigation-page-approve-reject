const removeItemAndUpdateIdx = (prevState, arrName, idxName) => {
    const newStateArrLength = prevState[arrName].length - 1;
    const currStateIdx = prevState[idxName];
    let newIdx;
    if (currStateIdx < newStateArrLength)
        newIdx = currStateIdx;
    else if (newStateArrLength > 0)
        newIdx = 0;
    else
        newIdx = null;
    const newArr = prevState[arrName];
    newArr.splice(currStateIdx, 1);
    return {
        [arrName]: newArr,
        [idxName]: newIdx
    };
}

export default removeItemAndUpdateIdx;