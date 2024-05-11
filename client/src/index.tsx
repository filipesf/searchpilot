import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/index.css';
import reportWebVitals from './reportWebVitals';
import { queryClient } from 'services/ProductService';
import { QueryClientProvider } from 'react-query';
import AppRouter from 'routes/AppRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
