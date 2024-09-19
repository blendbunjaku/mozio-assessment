module.exports = {
    roots: ["<rootDir>/src", "<rootDir>/tests"],

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    testPathIgnorePatterns: ["/node_modules/", "\\.test\\.(ts|tsx)$"],

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },

    preset: 'ts-jest',

    verbose: true,

    moduleDirectories: ['node_modules', 'src'],
};