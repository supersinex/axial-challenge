export function parseFinancialNumber(input: string): [number, string] {
    const [numericValue, suffix] = [
        parseFloat(input?.slice(0, -1)),
        input?.slice(-1).toLowerCase(),
    ];

    return [numericValue, suffix];
}