export const tsconfig = `
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react",
    "module": "ESNext",
    "rootDir": "src",
    "moduleResolution": "node",
    "baseUrl": "src",
    "paths": {"@/*":["*"]},
    "resolveJsonModule": true, 
    "allowJs": true,
    "declaration": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src", "custom.d.ts"],
  "exclude": ["build"]
}
`