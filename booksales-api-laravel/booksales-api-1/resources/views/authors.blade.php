<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, Authors!</h1>

    @foreach ($authors as $author)
        <ul>
            <li>{{$author['id']}}</li>
            <li>{{$author['name']}}</li>
        </ul>
    @endforeach
</body>
</html>