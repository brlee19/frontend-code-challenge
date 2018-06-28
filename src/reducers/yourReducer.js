const initialState = {
  teams: [],
  positions: [],
  employees: [],
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA': {
      return {...state, isLoading: true}
    }

    case 'RECEIVE_DATA': {
      return {
        teams: action.payload.teams,
        positions: action.payload.positions,
        employees: action.payload.employees,
        isLoading: false
      }
    }

    case 'TEAM_SELECTED': {
      const teams = [...state.teams].map(team => (
       team.id === action.payload.id ? {...team, selected: !team.selected} : {...team} 
      ));
      return {...state, teams};
    }

    case 'REMOVE_MEMBER': {
      const teams = [...state.teams];
      const team = teams.find(t => t.id === action.payload.team.id);
      const memberN = team.members.findIndex(m => m.id === action.payload.member.id);
      if (memberN !== -1) {
        team.members.splice(memberN, 1);
      }

      return {...state, teams};
    }

    default:
      return state;
  }
}