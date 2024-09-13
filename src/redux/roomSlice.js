import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    adults: 0,
    children: 0,
    total: 0,
    isCalculated: false
};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        incrementAdults: (state) => {
            if (state.adults < 50000000000) {
                state.adults += 1;
            }
        },
        decrementAdults: (state) => {
            if (state.adults > 0) {
                state.adults -= 1;
            }
        },
        incrementChildren: (state) => {
            if (state.children < 50000000000) {
                state.children += 1;
            }
        },
        decrementChildren: (state) => {
            if (state.children > 0) {
                state.children -= 1;
            }
        },
        calculateTotal: (state) => {
            state.total = state.adults + state.children;
            state.isCalculated = true;
        },
        resetCalculation: (state) => {
            state.isCalculated = false;
        }
    }
});

export const { incrementAdults, decrementAdults, incrementChildren, decrementChildren, calculateTotal, resetCalculation } = roomSlice.actions;
export default roomSlice.reducer;