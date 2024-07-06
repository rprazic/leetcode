class MinStack {
    private _stack: number[];
    private _minStack: number[];

    constructor() {
        this._stack = [];
        this._minStack = [];
    }

    push(val: number): void {
        this._stack.push(val);
        if (!this._minStack.length || this.getMin() >= val) {
            this._minStack.push(val);
        }
    }

    pop(): void {
        if (this.getMin() === this.top()) {
            this._minStack.pop();
        }
        this._stack.pop();
    }

    top(): number {
        return this._stack[this._stack.length - 1];
    }

    getMin(): number {
        return this._minStack[this._minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */