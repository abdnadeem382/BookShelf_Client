import axios from 'axios';

export function getBooks(limit=10, start=0, order='asc',list=''){

    const request  = axios.get(`http://localhost:3001/api/getbooks?skip=${start}&limit=${limit}&order=${order}`)
                    .then((response)=>{
                        if(list){
                            return [...list,...response.data]
                        }
                        else{
                            return response.data
                        }
                        
                    })
    return {
        type: 'GET_BOOKS',
        payload: request
    }

}

export function getBookWithReviewer(id){
    const request = axios.get(`http://localhost:3001/api/getbook?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let book =data;
            console.log(book);

            axios.get(`http://localhost:3001/api/getreviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer: data
                }

                dispatch({
                    type: 'GET_BOOK_W_REVIEWER',
                    payload: response
                })
            })

            
        })
    }
}

export function clearBookWithReviewer(){
    return {
        type: "CLEAR_BOOK_W_REVIEWER",
        payload: {
            book: {},
            reviewer: {}
        }
    }
}