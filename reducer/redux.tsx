import {configureStore, createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        city: 'paris',
        aqi: 0,
        dailyObject: [],
        loading: false,
    },
    reducers: {
        changeCityState(state, action) {
            state.city = action.payload;
        },
        changeAqiState(state, action) {
            state.aqi = action.payload;
        },
        changeDailyObjectState(state, action) {
            state.dailyObject = action.payload;
        }
    },
})

export const { changeCityState, changeAqiState, changeDailyObjectState } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
});