
export default (store) =>{
    const {dispatch} = store;
    return (next) =>{
        return (action) => {


            return next(action);
        }
    }
}