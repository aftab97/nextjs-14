# Static Rendering (default) #
This is default for components

## Server Components ##
React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:

(x) Static Rendering
- Dynamic Rendering
- Streaming


Rendering occurs at build time (when you deply) or during revalidation. This can then be distributed and cached in a CDN:
![alt text](http://url/to/img.png)

- Faster website
- Reduced Server Load - not generate on each server request
- SEO - content is prerendered

## Dynamic Function ##
Function which rely on information that can be known at request time such as user's cookies, req headers, URL's search params

These functions are:
cookies(), headers(), searchParams (prop)

Dynamic Functions	Data	        Route
No	                Cached	        Statically Rendered
Yes	                Cached	        Dynamically Rendered
No	                Not Cached	    Dynamically Rendered
Yes	                Not Cached	    Dynamically Rendered
