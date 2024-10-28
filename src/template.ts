

export default (body:any,todos:any) => `
<!DOCTYPE html>
<html>
    <head>
    <title> SSR Custom </title>
</head> 
<body>
    <div id="root">${body}</div>
    <script>window.todos = ${JSON.stringify(todos)}</script>
    <script src='/bundle.js'></script>
</body>
</html>
`