function isValid(s: string): boolean {
    let stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            const m = map[c];
            const p = stack.pop();
            if (m !== p) {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
};