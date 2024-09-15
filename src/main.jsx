import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
// import ScrollToTop from './component/ScrollToTop/ScrollToTop.jsx';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  {/* <ScrollToTop/> */}
   <App />
  </QueryClientProvider>
</StrictMode>
)
