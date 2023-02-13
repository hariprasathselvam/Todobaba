export const getActionType = (action) => {
    return action().type;
};

export const action = (type, payload) => {
    return {
        type,
        payload
    };
};