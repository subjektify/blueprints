export interface IBlueprint {
    name: string;
    githubRepo?: string;
    npmPackage?: string;
    author: string;
    authorUrl?: string;
    description: string;
}

export default class Blueprints {
    public static readonly communityBlueprints: IBlueprint[] = []

    public static readonly officialBlueprints: IBlueprint[] = [
        {
            name: "vite-react-typescript",
            githubRepo: "subjektify/vite-react-typescript",
            npmPackage: "@subjektifylabs/vite-react-typescript",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "A Vite blueprint for Subjektify with React and TypeScript."
        },
        {
            name: "vite-vue-typescript",
            githubRepo: "subjektify/vite-vue-typescript",
            npmPackage: "@subjektifylabs/vite-vue-typescript",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "A Vite blueprint for Subjektify with Vue and TypeScript."
        },
        {
            name: "vite-svelte-typescript",
            githubRepo: "subjektify/vite-svelte-typescript",
            npmPackage: "@subjektifylabs/vite-svelte-typescript",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "A Vite blueprint for Subjektify with Svelte and TypeScript."
        }
    ]
}
