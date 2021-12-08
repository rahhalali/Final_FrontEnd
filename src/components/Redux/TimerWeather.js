import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER} from "../Api/Api";
export const WeatherAsync = createAsyncThunk(
    "weather/WeatherAsync",
    async (payload) => {
        const response = await fetch(`${WEATHER}`);
        const result = await response.json();
        console.log('result',result.list[0]);
        return { result: result };
    }
);

const WeatherTime = createSlice({
    name: "description",
    initialState: {
        time:new Date().toLocaleTimeString(),
        weathertime:''
    },
    reducers: {
        time: (state, action) => {
            state.time = new Date().toLocaleTimeString()
        },
    },
    extraReducers:{
        [WeatherAsync.fulfilled]:(state,action)=>{
            console.log('state',state)
            state.weathertime=(action.payload.result.list[0])
        }
    }
});
export const {time} = WeatherTime.actions;
export default WeatherTime.reducer;