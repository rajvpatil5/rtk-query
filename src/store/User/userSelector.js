export const getLoggedInUserPermissions = (state) => state.user.permissions;
export const getLoggedInUserProfile = (state) => state.user.userInfo;
export const getLoggedInUserRoles = (state) => state.user.roles;
export const getLoggedInUserProfilePhoto = (state) => state.user.profile;
export const getLoggedInUserCurrentRole = (state) => state.user.roleID;
export const getIsMultiRoleUser = (state) => state.user.multiRole;
