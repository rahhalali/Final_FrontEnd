import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from '../Api/Api'

export const NewsAddAsync = createAsyncThunk(
    "news/NewsAddAsync",
    async (payload) => {
        const response = await fetch(`${URL}/get/news`, {
            method: "GET",
        });
        const result = await response.json();
        console.log('news',result);
        return { result: result };
    }
);

const NewsSlice = createSlice({
    name: "news",
    initialState: {
        news:''
    },
    extraReducers:{
        [NewsAddAsync.fulfilled]:(state,action)=>{
            state.news=(action.payload.result)
        }
    }
});

export default NewsSlice.reducer;
