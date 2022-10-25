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

  findByIndex = (index: number): LinkedListNode<T> | undefined => {
    let nodeToReturn = this.head
    if (!nodeToReturn) return
    for (let i = 0; i < index; i++) {
      if (!nodeToReturn.next) return nodeToReturn
      nodeToReturn = nodeToReturn.next
    }
  }

  insertAtIndex (node: LinkedListNode<T>, index: number): boolean {
    if (index > this.size) {
      return false
    }
    if (index === 0) {
      node.next = this.head
      this.head = node
    }
    if (index === this.size) {

    }
    return true
  }


}

