export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="./main.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      
      <body>
        <div id="root">${body}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `;
};
