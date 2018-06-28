import _fetchData from '..//utils/backend-mock';

export const fetchData = () => {
  return dispatch => {
    dispatch(requestData());
    _fetchData
      .then(data => {
        dispatch(receiveData(data));
      });
  };
};

export const requestData = () => {
  return {
    type: 'REQUEST_DATA'
  }
}

export const receiveData = (data) => {
  return {
    type: 'RECEIVE_DATA',
    payload: data
  }
}

export const selectTeam = (team) => {
  return {type: 'TEAM_SELECTED', payload: team};
};

export const removeMember = (team, member) => {
  return {
    type: 'REMOVE_MEMBER',
    payload: { team, member }
  };
};