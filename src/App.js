import "./App.css";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Generate Authentication ID</h2>
      <AuthForm />
    </div>
  );
}

export default App;
