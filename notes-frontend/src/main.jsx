import ReactDOM from 'react-dom/client'
// strictmode required
import { StrictMode } from 'react';

import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
<StrictMode>
    <App />
</StrictMode>
);