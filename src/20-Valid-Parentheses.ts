function isValid(s: string): boolean {
    let stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let c of s) {
        if (c in map) {
            const m = map[c];
            const p = stack.pop();
            if (m !== p) {
                return false;
            }
        } else {
            stack.push(c);

        }
    }

    return stack.length > 0 ? false : true;
};