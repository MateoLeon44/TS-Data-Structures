import { LinkedListNode } from '../../LinkedLists/LinkedListNode'
import { SingleLinkedList } from '../../LinkedLists/SingleLinkedList'

it('Should create a SingleLinkedList with default parameters', () => {
  const singlyLinkedList = new SingleLinkedList()
  expect(singlyLinkedList.head).toBeNull()
  expect(singlyLinkedList.size).toEqual(0)
})

it('Should add one node when linkedlist is empty', () => {
  const singlyLinkedList = new SingleLinkedList()
  const node = new LinkedListNode(0, null)
  singlyLinkedList.head = node
  expect(singlyLinkedList.head).toEqual(node)
  expect(singlyLinkedList.size).toBe(1)
})

it('Should add one node with a linkedList with non empty head', () => {
  const singlyLinkedList = new SingleLinkedList()
  const node = new LinkedListNode(1, null)
  singlyLinkedList.head = node
  const node2 = new LinkedListNode(2, null)
  singlyLinkedList.insertAtIndex(node2, 0)
  expect(singlyLinkedList.head).toEqual(node2)
  expect(singlyLinkedList.size).toBe(2)
  expect(node2.next).toEqual(node)
})