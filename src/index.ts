import { generateHtml } from "./lib"

export interface Env {
    API_HOST: string,
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const hostname = new URL(request.url).hostname;
        const subdomain = hostname.split('.')[0];
        const html = generateHtml(subdomain);

        return new Response(html, {
            headers: {
                "content-type": "text/html;charset=UTF-8",
            }
        });
    },
};
