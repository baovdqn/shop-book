const initProducts = {
    items: []
}

const ProductReducer = (state = initProducts, action) => {
    switch (action.type){
        case 'FETCH_DATA':
            return state;
        default:
            return state
    }
}

export default ProductReducer;