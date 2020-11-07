const ReactDOMServer = require('react-dom/server');
const React = require('react');
const fs = require('fs');

const App = require('../dist/App.bundle.js');

console.log('Building markup...')
const markup = ReactDOMServer.renderToString(React.createElement(App.default));
const html = `
    <html>
        <head>
            <script src="./index.bundle.js"></script>
            <meta charset="utf-8" />
        </head>
        <body>
            <div id="root">
                ${markup}
            </div>
        </body>
    </html>
`;
fs.writeFileSync('./dist/index.html', html);
console.log('done');