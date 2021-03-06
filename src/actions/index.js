import * as Types from './../constants/ActionTypes'
import callAPI from './../utils/apiCaller'

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'GET', null)
        .then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return{
        type: Types.UPDATE_PRODUCTS,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`, 'PUT', product)
        .then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}