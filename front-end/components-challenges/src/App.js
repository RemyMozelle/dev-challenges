import Input from "./components/Input";
import Menu from "./components/Menu";
import './App.css'

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="components-container">
        <h2 className="components-title">Inputs</h2>
        {/* Base inputs */}
        <div className="inputs-container">
          <Input label="Bonjour 1" />
          <Input label="Bonjour 2" />
          <Input />
        </div>

        {/* Base inputs error*/}
        <div className="inputs-container">
          <Input label="Bonjour 1" error />
          <Input label="Bonjour 2" error />
          <Input error />
        </div>

        {/* Base input disabled */}
        <div className="inputs-container">
          <Input label="Bonjour 1" disabled />
        </div>

        {/* Base input helper text */}
        <div className="inputs-container">
          <Input label="Bonjour 1" helperText="Helper text" />
          <Input label="Bonjour 1" helperText="Helper text error" error />
        </div>

        {/* Base input with icons */}
        <div className="inputs-container">
          <Input label="Bonjour 1" startIcon="phone" />
          <Input label="Bonjour 1" endIcon="lock" />
        </div>

        {/* TODO: Base input value */}
        <div className="inputs-container">
          <Input label="Bonjour 1" />
        </div>

        {/* Base input with size */}
        <div className="inputs-container">
          <Input label="Bonjour 1" size="sm" />
          <Input label="Bonjour 1" size="md" />
        </div>

        {/* Base input Full width */}
        <div className="inputs-container">
          <Input label="Bonjour 1" fullWidth />
        </div>

        {/* Base input multiline */}
        <div className="inputs-container">
          <Input label="Bonjour 1" multiline rows="5" />
          <Input label="Bonjour 1" multiline rows="5" error />
          <Input label="Bonjour 1" multiline rows="5" />
          <Input label="Bonjour 1" multiline rows="5" error />
        </div>
      </div>

    </div >
  );
}

export default App;
