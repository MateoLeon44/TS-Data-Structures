export class LinkedListNode<T> {
  constructor(public data: T | null = null, public next: LinkedListNode<T> | null = null) {}
}