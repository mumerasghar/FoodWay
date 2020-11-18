import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispath) => {
    dispath(dishedLoading(true));

    setTimeout(() => {
        dispath(addDishes(DISHES))
    }, 2000);
};


export const dishedLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});


export const dishedFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})