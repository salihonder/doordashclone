export const UPDATE_PRICE_FILTER = "UPDATE_PRICE_FILTER";
export const UPDATE_RESTAURANTS = "UPDATE_RESTAURANTS";

export const updatePriceFilter = (payload) => ({
    type: UPDATE_PRICE_FILTER,
    payload
});

export const updateRestaurants = (payload) => ({
    type: UPDATE_RESTAURANTS,
    payload
});

export const fetchRestaurants = () => {
    return (dispatch) => {
        fetch('http://localhost:4001/restaurants')
            .then(res => res.json())
            .then(res => dispatch(updateRestaurants(res)))
    };
};