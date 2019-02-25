export const Setincomereducer = (state = [listInit], action) => {
    switch (action.type) {
        case 'SETINCOME_ACTION':
            return action.listIncome
        default:
            return state
    }

}

const listInit = {
    date: "Jul 6  2018",
    category: "init",
    outcome: 0
}

