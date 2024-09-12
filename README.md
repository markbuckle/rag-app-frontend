## AI Podcast(PDF) Chatbot - Frontend

### Why NextJS Frontend instead of a Python Framework like Flask or Django?

First, I want to be able to host this as a static page, which is not possible with either Python framework right now. 

Secondly, NextJS or any JavaScript frontend framework is far ahead of Python frameworks in terms of features or developer experience, it's likely easier to learn JS than to try and close those gaps using Python frameworks. 

### Create a NextJS Project
Inside the root directory, run:
```pwsh
npx create-next-app@latest
```
Here's what I picked for the questions:

<img width=600 src="https://github.com/user-attachments/assets/57137c67-9f83-4c6e-ae3c-1132a3112760">

Go to the new project folder:
```pwsh
cd rag-app-frontend
```
Then run:
```pwsh
npm run dev
```

### Install Tools to Generate API Client

We now have to create an API client to interact with our FastAPI backend from our NextJS frontend. We can automate this process using the openAPI schema provided by FastAPI.

Go to the /openapi.json endpoint of your API server.

<img width=500 src="https://github.com/markbuckle/AiAppDeploy/blob/main/openapiendpoint.png?raw=true">

We're going to use this but first we need to install the open API generator CLI tool:
```pwsh
npm install @openapitools/openapi-generator-cli -g
```

Once installed you'll be able to use this command in your terminal to generate an actual TypeScript client by just point this tool at your JSON schema:
```pwsh
openapi-generator-cli generate -i https://bpve3nbtfqav4lskuxeeperrzq0qdgki.lambda-url.us-east-1.on.aws/openapi.json -g typescript-fetch -o src/api-client
```

You can run the above command direct or use the command script in the package.json file to generate the client library for the API:

```json
{
    "scripts": {
        "generate-api-client": "openapi-generator-cli generate -i http://{yourAPIendpoint}/openapi.json -g typescript-fetch -o src/api-client"
    }
}
```

Generate the client into `src/api-client/` first.
```pwsh
npm run generate-api-client
```

An important question is when should you run the command (above)? The answer is whenever the API changes. 

### API Client / User ID Utils

Next will want to set up some utility functions for the API client and for the user session management. This will enable us to initialize our API client and it will also create a fake unique user id for every new browser session. This way I can test my app without having to have a user authentication process in place.

In your source folder create a /lib subfolder.

To generate a new and unique package id, first install uuid:
```pwsh
npm install uuid
```

### View Query Page

Add a page to display detailed information about individual queries. It will show the question, reponse and sources. 

Under /src/app create a new directory called viewQuery and create a new file called page.tsx

### Rendering Components 

[shadcn/ui](https://ui.shadcn.com/examples/cards) has nice pre-configured components.

Run:
```pwsh
npx shadcn-ui@latest init
```

Then install each component separately.

```pwsh
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
npx shadcn-ui@latest add skeleton
```

## Deployment

### Deploy on Vercel

I didn't use this method as it is slightly more expensive though easier to navigate. You can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploy on AWS Amplify

AWS Amplify provides a straightforward way to deploy and host your Next.js application. You can connect your GitHub repository to Amplify, and it will handle the build and deployment process.

If you don’t already have a domain, you can register one through AWS Route 53. In the Route 53 console, create a hosted zone for your domain. Click on “Hosted zones” and then “Create hosted zone”. Enter your domain name and create the hosted zone. Add DNS records to route traffic to your application. 

### Create a custom Domain

Here is the AWS link to my app: 

https://main.d2plnc0kegitny.amplifyapp.com

Here are my custom domains:

<li>https://podcastaichatbot.website/</li>
<li>https://www.podcastaichatbot.website/</li>
