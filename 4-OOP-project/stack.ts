interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = { // readonly : 불변성
  readonly value: string;
  readonly next?: StackNode; // 값이 있거나 없거나
}

class StackImp implements Stack {
  private _size: number;
  private head?: StackNode;

  get size() {
    return this._size;
  }

  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string { // null == undefinde
    if (this.head == null) {
      throw new Error('Stack is empty!')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImp();
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');
while (stack.size !== 0) {
  console.log(stack.pop()) // Steve 3 Bob 2 Ellie 1
}