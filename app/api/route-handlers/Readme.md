### Route Handlers ### 
Route Handlers are cached by default when using `GET`


## Opting out of caching ##
- Using the Request object with the GET method.
- Using any of the other HTTP methods.
- Using Dynamic Functions like cookies and headers.
- The Segment Config Options manually specifies dynamic mode.


This will not cache because it uses the `Request` object (evaluated dynamically)
```
export async function GET(request: Request) {}
```