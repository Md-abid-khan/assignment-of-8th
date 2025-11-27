import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<span className="loading loading-bars loading-5xl"></span>}>
      <RouterProvider fallback={<span className="loading loading-bars loading-xl"></span>} router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </Suspense>
  </StrictMode>
)
