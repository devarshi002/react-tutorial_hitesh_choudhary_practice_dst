class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);

    if (this.minStack.length === 0) {
      this.minStack.push(x);
    } else {
      let currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(x, currentMin));
    }
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}


let st = new MinStack();

st.push(5);
st.push(2);
st.push(10);
st.push(1);

console.log(st.getMin()); // 1

st.pop();

console.log(st.getMin()); // 2