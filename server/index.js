const express = require('express');
const next = require('next');
const LruCache = require('lru-cache');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new LruCache({
  max: 10000000,
  maxAge: 1000 * 60
});

const KATA_DOCS_URL = process.env.KATA_DOCS_URL || 'https://docs.kata.ai';

function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it, unless its development
  // temporarily disable cache
  // if (!dev && ssrCache.has(key)) {
  //   console.log(`CACHE HIT: ${key}`);
  //   res.send(ssrCache.get(key));
  //   return;
  // }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}

app.prepare().then(() => {
  const server = express();

  // server.get('/set-locale', (req, res) => {
  //   res.cookie('locale', req.query.locale, { maxAge: 24 * 60 * 60 * 1000 });
  //   res.redirect('back');
  // });

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/index');
  });
  server.get('/company', (req, res) => {
    renderAndCache(req, res, '/company');
  });
  server.get('/career', (req, res) => {
    renderAndCache(req, res, '/career');
  });
  server.get('/platfrom', (req, res) => {
    renderAndCache(req, res, '/platfrom');
  });
  server.get('/enterprise', (req, res) => {
    renderAndCache(req, res, '/enterprise');
  });
  server.get('/partner', (req, res) => {
    renderAndCache(req, res, '/partner');
  });
  server.get('/research', (req, res) => {
    renderAndCache(req, res, '/research');
  });
  server.get('/research/detail', (req, res) => {
    renderAndCache(req, res, '/researchdetail');
  });

  server.get('/research/detail', (req, res) => {
    renderAndCache(req, res, '/researchdetail');
  });
  // server.get('/pricing', (req, res) => {
  //   renderAndCache(req, res, '/pricing');
  // });
  // server.get('/contact', (req, res) => {
  //   renderAndCache(req, res, '/contact');
  // });
  // server.get('/privacy', (req, res) => {
  //   renderAndCache(req, res, '/privacy');
  // });
  // server.get('/terms', (req, res) => {
  //   renderAndCache(req, res, '/terms');
  // });

  // server.get('/documentation/:category/:article', (req, res) => {
  //   const { category, article } = req.params;

  //   res.redirect(301, `${KATA_DOCS_URL}${category && `/${category}`}${article && `/${article}`}`);
  // });

  // // Allow request using query string
  // // This is limitation from NextJS itself
  // server.get('/documentation*', (req, res) => {
  //   res.redirect(301, KATA_DOCS_URL);
  // });

  // Add cached page using similar code above, put it above this comments.
  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(3000);

  console.log(
    `> kata.ai-next running at http://localhost:3000 as ${
    dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
