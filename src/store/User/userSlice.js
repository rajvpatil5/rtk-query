import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    permissions: [],
    roles: [],
    profile: null,
    roleID: {},
    multiRole: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserProfile(state, action) {
            return {
                ...state,
                userInfo: action.payload,
            };
        },

        setLoggedInUserRoles(state, action) {
            return {
                ...state,
                roles: action.payload,
            };
        },

        setCurrentRole(state, action) {
            return {
                ...state,
                roleID: action.payload,
            };
        },

        setLoggedInUserPermissions(state, action) {
            return {
                ...state,
                permissions: action.payload,
            };
        },

        setLoggedInUserProfilePhoto(state, action) {
            return {
                ...state,
                profile: action.payload,
            };
        },
        setIsMultiRoleUser(state, action) {
            return {
                ...state,
                multiRole: action.payload,
            };
        },

        clearStoreData(state) {
            return {
                ...state,
                profile: null,
            };
        },
    },
});

export const {
    setUserProfile,
    setLoggedInUserPermissions,
    setLoggedInUserRoles,
    setLoggedInUserProfilePhoto,
    clearStoreData,
    setCurrentRole,
    setIsMultiRoleUser,
} = userSlice.actions;

export default userSlice.reducer;
