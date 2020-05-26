export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="en-GB">
      <head>
        <title>Hacker News App</title>
        <meta name="description" content="Hacker News is a community started by Paul Graham for sharing "Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity."">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="./main.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${html}</div>
        <script async>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script async src="./client.js"></script>
      </body>
    </html>
    `;
}
