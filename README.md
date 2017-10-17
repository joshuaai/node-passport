# Node with Passport JS and Redis.io

## The Node.js Authentication Flow
1. User enters username and password
2. The application checks if they are matching
3. If they are matching, it sends a `Set-Cookie` header that will be used to authenticate further pages
4. When the user visits pages from the same domain, the previously set cookie will be added to all the requests
5. Authenticate restricted pages with this cookie

### Auth Strategy
* Setup Express
* Setup Passport for Node JS
* Add protected endpoints

```bash
npm install --save express passport express-session connect-redis
```