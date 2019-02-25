export const Setalllistreducer = (state = [listInit], action) => {
    switch (action.type) {
        case 'SETALLLIST_ACTION':
            return action.allList
        default:
            return state
    }

}

const listInit = {
    date: "Jul 6  2018",
    category: "init",
    outcome: 0
}

