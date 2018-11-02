import { LCS } from './LCS';

describe('LCS', () => {
    it('should be zero for different strings', () =>
        expect(LCS.size("abc", "def")).toBe(0));

    it('should be N for equal strings of N chars', () =>
        expect(LCS.size("abc", "abc")).toBe(3));

    it('should be the longest subsequence for differing strings', () =>
        expect(LCS.size("aababcabcdabcaba", "eabcde")).toBe(4));

    it('should calculate size between 3,000 character strings within timeout bounds', () => {
        const lcs = new LCS({ maxSize: 4E3 });
        const LONG_A: Uint16Array = toUint16Array("abc".repeat(1000));
        const LONG_B: Uint16Array = toUint16Array("bca".repeat(1000));
        expect(lcs.size(LONG_A, LONG_B)).toBe(2999);
    });
});

function toUint16Array(s: string): Uint16Array {
    const a = new Uint16Array(s.length);
    for (let i = 0; i < s.length; i++) {
        a[i] = s.charCodeAt(i);
    }

    return a;
}
