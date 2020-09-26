import { combineReducers } from 'redux';
import ShoppingNavigationReducer from './Shopping-navigation'
import CartReducer from './Cart';
import BillingInfoReducer from './Billing-info';
import CreditCardReducer from './Credit-card';
import BrowsingHistoryReducer from './Browsing-history';

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditCardInfo: CreditCardReducer,
});

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer,
  BrowsingHistory: BrowsingHistoryReducer,
});

export default GlobalReducer;
