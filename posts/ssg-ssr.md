---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
author: 'Jan Stratmann'
banner: 'https://as1.ftcdn.net/v2/jpg/05/50/43/36/1000_F_550433645_6BP2MjIROmdSnxDTIqCQ17codgvqCKEY.jpg'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
