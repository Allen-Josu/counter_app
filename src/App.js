import "./App.css";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <div className=" d-flex flex-column justify-content-center align-items-center w-100 mt-5" >
                <div className="d-flex flex-column justify-content-center align-items-center  p-3 rounded " style={{backgroundColor:"white"}}>
                    <h2 style={{color:"blue"}} className="mt-3">Counter Application</h2>
                    <Counter />
                </div>
            </div>
        </>
    );
}

export default App;
