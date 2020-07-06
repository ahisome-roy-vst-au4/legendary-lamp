const initialState = {
  isSignedIn: false,
  userID: '',
  name: '',
  isFranchiseOwner: false
}

const loginCustomerState = {
  isSignedIn: true,
  userID: 'AhisomeRoy55',
  name: 'Ahisome Roy',
  isFranchiseOwner: false,
  points: 1234
}

const loginFranchiseState = {
  isSignedIn: true,
  userID: 'AdahJunk-foodaccount',
  name: 'Adah Junk-food',
  isFranchiseOwner: true
}

const loginState = {
  logout: initialState,
  customer: loginCustomerState,
  franchiseOwner: loginFranchiseState
}

export default loginState
