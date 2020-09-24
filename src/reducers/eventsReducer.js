import { INIT_EVENTS, SEARCH_EVENTS, PAGINATION, NEXT_PAGE, PREV_PAGE } from '../actions/types'

const initState = {
    isLoading: true,
    events: null,
    filteredEvents:null,
    
    // for pagination
    currentPage: 1,
    perPage: 10,
    currentItems:[],
    totalItems: 0
}

const reducer = (state = initState, action) => {
    const {type, payload} = action

    switch (type) {
        case INIT_EVENTS:
            return {...state, events: payload, isLoading: false };
        case SEARCH_EVENTS:
            const filterEvents = state.events.filter(
                (event) =>
                  String(event.name.text).toLowerCase().includes(payload.toLowerCase()) ||
                  String(event.summary).toLowerCase().includes(payload.toLowerCase())
            );
            return {...state, filteredEvents: filterEvents, currentPage: 1};

        case PAGINATION:
            let { currentPage, perPage, events, filteredEvents, currentItems, totalItems } = state
            
            const lastItem = currentPage * perPage;
            const firstItem = lastItem - perPage;
            currentItems = filteredEvents === null ? events.slice(firstItem, lastItem) : filteredEvents.slice(firstItem, lastItem);
            totalItems = filteredEvents === null ? events.length : filteredEvents.length;
            return { ...state, currentItems, totalItems }

        case NEXT_PAGE:
            return { ...state, currentPage: state.currentPage + 1 };

        case PREV_PAGE:
            return { ...state, currentPage: state.currentPage - 1 };
        default:
            return state;
    }
}

export default reducer