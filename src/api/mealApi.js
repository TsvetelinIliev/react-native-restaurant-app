import api from "./api";


export function getAll() {
    return api.get('/meals');
}

export function getAllByCategoryId(categoryId) {

    let url = '/meals';

    if(!categoryId) {

        throw new Error('No category provided!')

    }


    return api.get(`/meals?categoryId=${categoryId}`);
}

export function getFeatured() {

    return api.get('/meals?featured=true');
}