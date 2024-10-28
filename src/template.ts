

export default (body:any) => `
<!DOCTYPE html>
<html>
    <head>
    <title> SSR Custom </title>
</head> 
<body>
    <div id="root">${body}</div>
    <script src='/bundle.js'></script>
</body>
</html>
`