
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FloorState {
  floorAccess: boolean[];  
}


const initialState: FloorState = {
    floorAccess: [true, false, false, false, false, false], 
};

const floorSlice = createSlice({
//   name: 'floorAccess',
initialState,
  name: 'floorAccess',
 
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const floorIndex = action.payload;
      if (floorIndex >= 0 && floorIndex <= 5) {  
        state.floorAccess[floorIndex] = !state.floorAccess[floorIndex];  
      }
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;



