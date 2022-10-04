const addTag = tags => {
    return {
        type: "ADD_TAG",
        payload: tags,
        id: Date.now(),
    }
}

const removeTag = tags => {
    return {
        type: "REMOVE_TAG",
        payload: tags
    }
}

export {addTag, removeTag}