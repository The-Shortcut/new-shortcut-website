import { INIT_TEAM_MEMBERS, INIT_BOARD_MEMBERS } from '../actions/types'

const initState = {
    isLoading: true,
    members: null,
    boards: null
}

const reducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case INIT_TEAM_MEMBERS:
            return { ...state, isLoading: false, members: payload };

        case INIT_BOARD_MEMBERS:
            return { ...state, boards: payload };

        default:
            return state;
    }

}
export default reducer