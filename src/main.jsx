import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import store from './redux/configureStore'
import { Provider } from 'react-redux'
import './normalize.css'
import './index.css'

axios.defaults.baseURL =
  import.meta.env.VITE_API || 'http://localhost:3001'

console.log(import.meta.env.VITE_API)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
