import { AuthProvider } from "context/AuthProvider";
import ContactFormProvider from "context/ContactFormProvider";
import { Router } from "./router/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ContactFormProvider>
          <Router />
        </ContactFormProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
