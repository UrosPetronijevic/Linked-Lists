class Node {
  data: any;
  next: Node | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  append(data: any): void {
    const newNode = new Node(data);

    if (this.tail === null) {
      // If the list is empty, both head and tail point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, link the new node to the current tail, then update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Prepend a node to the start of the list
  prepend(data: any): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    if (this.size === 0) {
      // If the list was empty, the new node is both head and tail
      this.tail = newNode;
    }

    this.size++;
  }

  // Remove a node by its value
  remove(data: any): void {
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;

      // If the list becomes empty, set tail to null
      if (this.head === null) {
        this.tail = null;
      }

      this.size--;
      return;
    }

    let current: Node | null = this.head;
    let prev: Node | null = null;

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current === null) return;

    if (prev !== null) {
      prev.next = current.next;
    }

    // If we removed the tail node, update the tail
    if (current === this.tail) {
      this.tail = prev;
    }

    this.size--;
  }

  // Find a node by its index
  get(index: number): Node | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current: Node | null = this.head;
    let count = 0;
    while (count < index && current !== null) {
      current = current.next;
      count++;
    }
    return current;
  }

  // Print the entire list
  printList(): void {
    let current: Node | null = this.head;
    let listStr = "";
    while (current !== null) {
      listStr += current.data + " -> ";
      current = current.next;
    }
    console.log(listStr + "null");
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }

  // Reverse the linked list
  reverse(): void {
    let current: Node | null = this.head;
    let prev: Node | null = null;
    let next: Node | null = null;

    this.tail = this.head; // After reverse, head will become the tail.

    // Traverse the list and reverse the pointers
    while (current !== null) {
      next = current.next; // Save the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev to current
      current = next; // Move current to next node
    }

    this.head = prev; // After the loop, prev will be the new head
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
