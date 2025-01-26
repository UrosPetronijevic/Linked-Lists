import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-10 flex gap-4 justify-between">
      <Link to="/SinglyLinkedList" className="hover:underline">
        Singly Linked List
      </Link>
      <Link to="/DoublyLinkedList" className="hover:underline">
        Doubly Linked List
      </Link>
    </nav>
  );
}
