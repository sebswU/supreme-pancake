//routes, define different routes in 'record.js'
import { Route, Routes } from "react-router-dom";

//import all routes
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";
import Edit from "./components/edit";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
};

export default App;
