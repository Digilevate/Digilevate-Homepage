
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

const hostname = 'https://www.digilevate.com';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/agb', changefreq: 'monthly', priority: 0.8 },
  { url: '/datenschutz', changefreq: 'monthly', priority: 0.8 },
  { url: '/impressum', changefreq: 'monthly', priority: 0.8 },
];

const stream = new SitemapStream({ hostname });

const xml = streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  data.toString()
);

xml.then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data);
  console.log('sitemap.xml generated successfully!');
});
