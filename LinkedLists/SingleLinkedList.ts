import { LinkedListNode } from './LinkedListNode'

export class SingleLinkedList<T> {
  constructor (public _head: LinkedListNode<T> | null = null, public _size: number = 0) {
  }

  get head (): LinkedListNode<T> | null {
    return this._head
  }

  set head (headParam:LinkedListNode<T> | null) {
    this._head = headParam
    this.size++
  }

  get size (): number {
    return this._size
  }

  set size (sizeParam: number) {
    this._size = sizeParam
  }

  insertAtIndex (node: LinkedListNode<T>, index: number): boolean {
    if (this.size === 0) {
      this.head = node
    }
    return false
  }
}

