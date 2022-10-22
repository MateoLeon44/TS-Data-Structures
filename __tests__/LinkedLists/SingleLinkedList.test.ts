import { LinkedListNode } from '../../LinkedLists/LinkedListNode'

it('Should create a new node with default parameters', () => {
  const node = new LinkedListNode()
  expect(node.data).toBeNull()
  expect(node.next).toBeNull()
})
