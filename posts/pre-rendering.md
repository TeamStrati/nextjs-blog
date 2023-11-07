---
title: 'Two Forms of Pre-rendering'
date: '2020-01-03'
author: 'Test Jan'
banner: 'https://d25yuvogekh0nj.cloudfront.net/2020/01/Google-Url-shortener-alternatives-for-2020-Blog-Banner-1-1250x500.png' #625*250
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.