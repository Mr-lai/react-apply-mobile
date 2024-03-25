
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'; 
import { router } from './router';
import store from './store';
import { Provider } from 'react-redux';
// import { fetchChannelAPI } from '@/apis/list';
// fetchChannelAPI().then(( res:object ) => { 
//   console.log(res);
// })


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store }>
    <RouterProvider router={ router } />
  </Provider>
 
)
 