import { LinkedListNode } from './LinkedListNode'

export class SingleLinkedList<T> {
  constructor (public _head: LinkedListNode<T> | null = null, public _size: number = 0) {
  }

  get head (): LinkedListNode<T> | null {
    return this._head
  }

  set head (headParam:LinkedListNode<T> | null) {
    this._head = headParam
  }

  get size (): number {
    return this.size
  }

  set size (sizeParam: number) {
    this._size = sizeParam
  }
}