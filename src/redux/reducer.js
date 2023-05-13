import { UPDATE_PRICE_FILTER } from "./action";

const initialState = {
    priceFilter: [false, false, false, false]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRICE_FILTER: {
            // create a new array from priceFilter array
            const newPriceFilter = [...state.priceFilter];
            // Flip index value.. if true then set false or vice versa
            newPriceFilter[action.payload.index] = action.payload.value

            return {
                ...state,
                priceFilter: newPriceFilter
            };
        }
        default:
            return state;
    }
}

export default reducer;