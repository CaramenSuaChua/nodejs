import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import Transactions from './components/products/Transactions'
import Ao from './components/products/newHotel'
import Rooms from './components/products/rooms'
import Hotel from './components/products/hotels'
import NewHotel from './components/products/newHotel'
import SignIn from "./views/SignIn";
import NewRoom from "./components/products/newRoom";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: '/login',
    exact: true,
    layout: SignIn,
  },
  { 
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/transactions",
    layout: DefaultLayout,
    component: Transactions
  },
  {
    path: "/rooms",
    layout: DefaultLayout,
    component: Rooms
  },
  {
    path: "/new_room",
    layout: DefaultLayout,
    component: NewRoom
  },
  {
    path: "/hotels",
    layout: DefaultLayout,
    component: Hotel
  },
  {
    path: "/new_hotel",
    layout: DefaultLayout,
    component: NewHotel
  }
];

const DASHBOARD = '/';
const SIGN_IN = '/login';
export const routeConstants = {
  DASHBOARD,
  SIGN_IN
};

export const submenu = [
  {
    title : 'cong chua',
    to : '/cc'
  },
  {
    title : 'giay',
    to : '/shoes'
  },
  {
    title : 'ao',
    to : '/ao',
    component: Ao
  },
  {
    title : 'hoodie',
    to : '/hoodie'
  },
]