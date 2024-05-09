# Server Components #
React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:

```
export default async function ServerComponent(){}
Or
const ServerComponent = async() => {}
```

- Static Rendering (default)
- Dynamic Rendering
- Streaming

Use Dynamic Functions	 | Data	         | Route
-------------------------------------------------------------
No	                    Cached	        Statically Rendered
Yes	                    Cached	        Dynamically Rendered
No	                    Not Cached	    Dynamically Rendered
Yes	                    Not Cached	    Dynamically Rendered

### Dynamic Function ###
A function which rely on information that can be known at request time such as user's cookies, req headers, URL's search params

These functions are:
cookies(), headers(), searchParams (prop)

## Opting out of Data Caching or to be Dynamically Rendered ##
(https://www.youtube.com/watch?v=VBlSe8tvg4U&t=193s)

### To see if a page is cached go to next.config.js ###
```
const nextConfig = {
    logging:{
        fetches: {
            fullUrl: true
        }
    }
};
```

### Rules for when fetch requests are not cached: ###

1. The cache: 'no-store' is added to fetch requests:
``` fetch(`https://...`, { cache: 'no-store'}) ```

The revalidate: 0 option is added to individual fetch requests:
``` fetch(`https://...`, { next: { revalidate: 0} }) ```

2. Using the GET method with the Request object:
``` 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
}
```

3. The fetch request is inside a Router Handler that uses the POST / PUT / DELETE method:
```
export async function POST() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}
```

4. if your fetch request comes after the usage of headers() or cookies().
```
cookies();
fetch('random.api.com');
```

5. The const dynamic = 'force-dynamic' route segment option is used.
```
export const dynamic = "force-dynamic";
```

6. If you change the default option from 'auto' to 'force-no-store' for `fetchCache` it will skip cache
```
export const fetchCache = 'force-no-store' 
```

7. The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.
