import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from '../Api/Api'

export const getRoomsAsync = createAsyncThunk(
    "room/getRoomsAsync",
    async (payload) => {
        const response = await fetch(`${URL}/get/additional`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room',result);
        return { result: result.message };
    }
);
export const getViewsAsync = createAsyncThunk(
    "room/getViewsAsync",
    async (payload) => {
        const response = await fetch(`${URL}/get/views`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room',result);
        return { result: result };
    }
);
export const getTypesAsync = createAsyncThunk(
    "room/getTypesAsync",
    async (payload) => {
        const response = await fetch(`${URL}/get/types`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room',result);
        return { result: result };
    }
);
export const filterByView = createAsyncThunk(
    "room/filterByView",
    async (id) => {
        console.log(id);
        const response = await fetch(`${URL}/get/rooms/filter-view/${id}`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room',result);
        return { result: result.message };
    }
);
export const filterByType = createAsyncThunk(
    "room/filterByType",
    async (id) => {
        console.log(id);
        const response = await fetch(`${URL}/get/rooms/filter-type/${id}`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room',result);
        return { result: result.message };
    }
);
export const viewRoomById = createAsyncThunk(
    "room/viewRoomById",
    async (id) => {
        console.log(id);
        const response = await fetch(`${URL}/get/rooms/by/id/${id}`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room-view',result);
        return { result: result };
    }
);
export const remainingRooms = createAsyncThunk(
    "room/remainingRooms",
    async (payload) => {

        const response = await fetch(`${URL}/get/rooms/except/${payload.id}/type/${payload.Id}`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('room-view',result);
        return { result: result };
    }
);



const RoomsSlice = createSlice({
    name: "room",
    initialState: {
        rooms:'',
        types:'',
        views:'',
        viewroom:'',
        remainingrooms:'',
    },
    reducers:{

    },
    extraReducers:{
        [getRoomsAsync.fulfilled]:(state,action)=>{
            state.rooms=(action.payload.result)
        },
        [getViewsAsync.fulfilled]:(state,action)=>{
            state.views=(action.payload.result)
        },
        [getTypesAsync.fulfilled]:(state,action)=>{
            state.types=(action.payload.result)
        },
        [filterByView.fulfilled]:(state,action)=>{
            state.rooms=action.payload.result;
        },
        [filterByType.fulfilled]:(state,action)=>{
            state.rooms=action.payload.result;
        },
        [viewRoomById.fulfilled]:(state,action)=>{
            state.viewroom=action.payload.result;
        },
        [remainingRooms.fulfilled]:(state,action)=>{
            state.remainingrooms=action.payload.result;
        }
    }
});
export default RoomsSlice.reducer;
