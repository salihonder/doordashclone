import { UPDATE_PRICE_FILTER, UPDATE_RESTAURANTS } from "./action";

const initialState = {
    priceFilter: [false, false, false, false],
    restaurants: []
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

        case UPDATE_RESTAURANTS: {
            const fetchedRestaurants = [...action.payload.restaurants];

            return {
                ...state,
                restaurants: fetchedRestaurants
            };
        }
        default:
            return state;
    }
}

export default reducer;