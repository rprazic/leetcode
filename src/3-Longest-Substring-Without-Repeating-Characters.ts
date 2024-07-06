interface IHashMap {
    [key: string]: boolean;
}

function lengthOfLongestSubstring(s: string): number {
    let map: IHashMap = {};
    let i = 0, j = 0;
    let streak = 0;
    let maxStreak = 0;

    while (j < s.length) {
        const c = s.charAt(j);
        if (c in map && map[c]) {
            map = {};
            streak = 0;
            i++;
            j = i;

        } else {
            map[c] = true;
            streak++;
            if (streak > maxStreak) {
                maxStreak = streak;
            }
            j++;
        }
    }

    return maxStreak;
};