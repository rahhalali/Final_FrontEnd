import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginAsync = createAsyncThunk(
  "login/loginAsync",
  async (payload) => {
    const response = await fetch(
      "http://localhost:8000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      }
    )
    const result = await response.json();
      return {result: result }
    });

  const todoSlice = createSlice({
  name: "login",
  initialState: {
      access_token:localStorage.getItem('access_token'),
      user_id:[]
  },
      reducers:{
            logout:(state ,action)=>{
                    localStorage.removeItem('access_token');
                    state.access_token = null;
            }
      },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
            state.access_token=action.payload.result.access_token;
            localStorage.setItem('role_id',action.payload.result.role_id);
            localStorage.setItem('access_token',action.payload.result.access_token);
       },
     }
    });

export const { logout } =todoSlice.actions;
export default todoSlice.reducer;
