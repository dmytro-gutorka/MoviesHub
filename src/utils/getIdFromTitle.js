const getIdFromTitle = (title) => {
    return title
        .replaceAll(' ', '-')
        .toLowerCase()
}

export default getIdFromTitle