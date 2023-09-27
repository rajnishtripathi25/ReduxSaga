import { createSlice } from '@reduxjs/toolkit'


const catSlice = createSlice({
    name: "cats",
    initialState: {
        cats: [],
        loading: false,
        error: ''

    },
    reducers: {
        getcatsFetch: (state) => {
            state.loading = true
        },
        getcatsSuccess: (state, action) => {
            state.loading = false
            state.cats = action.payload
        },
        getcatsFailure: (state, action) => {
            state.loading = false;
            state.cats = []
            state.error = action.error
        }
    }

})

export const { getcatsFetch ,getcatsFailure, getcatsSuccess } = catSlice.actions
export default catSlice.reducer