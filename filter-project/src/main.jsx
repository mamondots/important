import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import MoreData from './MoreData/MoreData.jsx';
import SearchByFilter from './SearchByFilter/SearchByFilter.jsx';
import OnclickSearch from './OnclickSearch/OnclickSearch.jsx';
import ItemByCategore from './ItemByCategore/ItemByCategore.jsx';
import ListAndGirdView from './ListAndGirdView/ListAndGirdView.jsx';
import Sorting from './Sorting/Sorting.jsx';
import Model from './Model/Model.jsx';
import ApModel from './ApModel/ApModel.jsx';
import Acdriom from './Acdriom/Acdriom.jsx';
import HeadlesModel from './HeadlesModel/HeadlesModel.jsx';
import MenuBar from './MenuBar/MenuBar.jsx';
import Recapture from './Recapture/Recapture.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element:<MoreData></MoreData>
      },
      {
        path:'/searchbyfilter',
        element:<SearchByFilter></SearchByFilter>
      },
      {
        path:'/onsearchbyfilter',
        element:<OnclickSearch></OnclickSearch>
      },
      {
        path:'/bycategory',
        element:<ItemByCategore></ItemByCategore>
      },
      {
        path:'/listandgird',
        element:<ListAndGirdView></ListAndGirdView>
      },
      {
        path:'/sorting',
        element:<Sorting></Sorting>
      },

      {
        path:'/model',
        element:<Model></Model>
      },
      {
        path:'/apmodel',
        element:<ApModel></ApModel>
      },
      {
        path:'/acdriom',
        element:<Acdriom></Acdriom>
      },
      {
        path:'/headles',
        element:<HeadlesModel></HeadlesModel>
      },
      {
        path:'/menubar',
        element:<MenuBar></MenuBar>
      },
      {
        path:'/recapture',
        element:<Recapture></Recapture>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
