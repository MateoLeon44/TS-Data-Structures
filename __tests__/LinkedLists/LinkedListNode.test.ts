import { SingleLinkedList } from '../../LinkedLists/SingleLinkedList'

it('Should create a SingleLinkedList with default parameters', () => {
  const singlyLinkedList = new SingleLinkedList()
  expect(singlyLinkedList.head).toBeNull()
  expect(singlyLinkedList.size).toEqual(0)
})