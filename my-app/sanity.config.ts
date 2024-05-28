import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "uhxnui9c",
    dataset: "production",
    title: "location bateaux",
    apiVersion: "2024-05-28",
    basePath: "/admin", 
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;