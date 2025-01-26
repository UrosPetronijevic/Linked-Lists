import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import SinglyLinkedList from "./Components/SInglyLinkedList";
import DoublyLinkedList from "./Components/DoublyLinkedList";

export default function App() {
  return (
    <div className="text-7xl text-cyan-300">
      <Router>
        <Navigation />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/table1" />} />
            <Route path="/SinglyLinkedList" element={<SinglyLinkedList />} />
            <Route path="/DoublyLinkedList" element={<DoublyLinkedList />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
