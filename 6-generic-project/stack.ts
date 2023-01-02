interface Stack_<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode_<T> = { // readonly : 불변성
  readonly value: T;
  readonly next?: StackNode_<T>; // 값이 있거나 없거나
}

class StackImp_<T> implements Stack_<T> {
  private _size: number;
  private head?: StackNode_<T>;

  constructor(private capacity: number) { }
  get size() {
    return this._size;
  }

  push(value: T) {
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T { // null == undefinde
    if (this.head == null) {
      throw new Error('Stack is empty!')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack_ = new StackImp_<string>(10);
stack_.push('Ellie 1');
stack_.push('Bob 2');
stack_.push('Steve 3');
while (stack_.size !== 0) {
  console.log(stack_.pop()) // Steve 3 Bob 2 Ellie 1
}

const stack__ = new StackImp_<number>(10);
stack__.push(123);
stack__.push(456);
stack__.push(789);
while (stack__.size !== 0) {
  console.log(stack__.pop()) // 789 456 123
}