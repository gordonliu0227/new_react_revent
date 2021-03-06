import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT } from "./eventConstants";
import {AsyncActionError, AsyncActionFinish, AsyncActionStart} from '../../app/async/asyncReducer'
import {fetchSampleData} from '../../app/api/mockApi'


export function loadEvents(){
    return async function(dispatch){
        dispatch(AsyncActionStart())

        try {
            const events = await fetchSampleData();
            dispatch ({type: FETCH_EVENTS, payload:events});
            dispatch(AsyncActionFinish())
        } catch(error){
            dispatch(AsyncActionError(error))
        }
    }
}

export function createEvent(event){
    return{
        type: CREATE_EVENT,
        payload:event
    }
}
export function updateEvent(event){
    return{
        type: UPDATE_EVENT,
        payload:event
    }
}
export function deleteEvent(eventID){
    return{
        type: DELETE_EVENT,
        payload:eventID
    }
}