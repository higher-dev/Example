import { createSlice } from "@reduxjs/toolkit";
// import BusinessInfo from "../../utils/index";

const initialState = { 
    business_info: [
        {
            image: "assets/1.jpg",
            name: "Star. Inc",
            detail: "Star company is working as a star in ecomerce.",
            date: "2020-01-01",
            industry: "Ecomerce",
            employee_count: 100
        },
        {
            image: "assets/2.jpg",
            name: "Health. Inc",
            detail: "Health company is growing faster.",
            date: "2016-12-01",
            industry: "Health",
            employee_count: 10
        },
        {
            image: "assets/3.jpg",
            name: "Ecomerce. Inc",
            detail: "Star company is working as a star in ecomerce.",
            date: "2020-01-01",
            industry: "Ecomerce",
            employee_count: 100
        },
        {
            image: "assets/4.jpg",
            name: "Heanth. Inc",
            detail: "Health company is growing faster.",
            date: "2016-12-01",
            industry: "Health",
            employee_count: 10
        },
        {
            image: "assets/5.jpg",
            name: "Star. Inc",
            detail: "Star company is working as a star in ecomerce.",
            date: "2020-01-01",
            industry: "Ecomerce",
            employee_count: 100
        },
        {
            image: "assets/6.jpg",
            name: "Heanth. Inc",
            detail: "Health company is growing faster.",
            date: "2016-12-01",
            industry: "Health",
            employee_count: 10
        },
        {
            image: "assets/7.jpg",
            name: "NISSAN Company",
            detail: "X company has many customers.",
            date: "2020-01-01",
            industry: "Ecomerce",
            employee_count: 1000
        }
    ],
    business_count : 1,
};

export const businessSlice = createSlice({
  name: "businessReducer",
  initialState,
  reducers: {
    add_business: (state, action) => {
        let new_business = action.payload;      //BusinessInfo type
        state.business_info.push(new_business);
        state.business_count++;
    },
    delete_business: (state, action) => {
        const pos = action.payload;
        const new_business_info = [
            ...state.business_info.slice(0, pos),
            ...state.business_info.slice(pos + 1)
        ];
        state.business_info = new_business_info;
        state.business_count--;
    },
    update_business: (state, action) => {
        const { pos , new_item } = action.payload;
        const new_business_info = [
            ...state.business_info.slice(0, pos),
            ...new_item,
            ...state.business_info.slice(pos + 1)
        ];
        state.business_info = new_business_info;
    }
  },
});

export const {
    add_business,
    delete_business,
    update_business,
} = businessSlice.actions;

export default businessSlice.reducer;