import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from '../Api/Api'
export const eventAsync = createAsyncThunk(
    "description/eventAsync",
    async (payload) => {
        const response = await fetch(`${URL}/all/events`,{
            headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
              }
        });
        const result = await response.json();
        console.log('result',result);
        return { result: result };
    }
);


const hotel_description = createSlice({
    name: "description",
    initialState: {
        toggle:true,
        events:''
    },
    reducers: {
        toggle: (state, action) => {
            state.toggle = !state.toggle
        },
    },
    extraReducers:{
    [eventAsync.fulfilled]:(state,action)=>{
            state.events=(action.payload.result)
        }
    }
});
export const {toggle} = hotel_description.actions;
export default hotel_description.reducer;