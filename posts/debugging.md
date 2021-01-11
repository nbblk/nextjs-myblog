---
title: "debugging"
date: "2020-01-11"
---

### 1 
-> While deploying this app using vecel I found this:
```
	Failed to compile.
13:46:02.059  	ModuleNotFoundError: Module not found: Error: Can't resolve '../styles/home.module.css' in '/vercel/workpath0/pages'
13:46:02.059  	> Build error occurred
13:46:02.060  	Error: > Build failed because of webpack errors
13:46:02.060  	    at /vercel/workpath0/node_modules/next/dist/build/index.js:15:918
13:46:02.060  	    at processTicksAndRejections (internal/process/task_queues.js:97:5)
13:46:02.060  	    at async /vercel/workpath0/node_modules/next/dist/build/tracer.js:1:525
```

https://github.com/vercel/next.js/issues/9482
https://stackoverflow.com/questions/63290403/nextjs-build-fails-on-vercel-because-of-webpack-errors

-> Resolved: I capitalized the filename into Home.module.css. The filename on remote and local was unmatched.
---
