interface IHashMap {
    [key: string]: number;
}

function groupAnagrams(strs: string[]): string[][] {
    let output: string[][] = [];
    let groups = 0;

    for (const str of strs) {
        let found: boolean = false;
        for (let i = 0; i < groups; i++) {
            if (isAnagram(str, output[i][0])) {
                output[i].push(str);
                found = true;
                break;
            }
        }

        if (!found) {
            output[groups] = [str];
            groups++;
        }
    }

    return output;
};

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let freq: IHashMap = {};
    for (const char of s) {
        if (char in freq) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    for (const char of t) {
        if (char in freq) {
            freq[char]--;
            if (freq[char] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    for (const num in freq) {
        if (freq[num] !== 0) {
            return false;
        }
    }

    return true;
};