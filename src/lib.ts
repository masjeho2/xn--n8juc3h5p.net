export function generateHtml(subdomain: string, message: string = `${subdomain} いんたーねっと`) {
    if (subdomain == "xn--n8juc3h5p") return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="いんたー.net">
<meta name="twitter:description" content="">
<title>いんたー.net</title>
</head>
<body>
<h1>いんたー.net</h1>
<p>いんたーねっと</p>
<!-- AddToAny BEGIN -->
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_mastodon"></a>
<a class="a2a_button_copy_link"></a>
</div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->
</body>
</html>`
    else return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="いんたー.net">
<meta name="twitter:description" content="">
<title>${subdomain}.いんたー.net</title>
</head>
<body>
<h1>${subdomain}.いんたー.net</h1>
<p>${message}</p>
<!-- AddToAny BEGIN -->
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_mastodon"></a>
<a class="a2a_button_copy_link"></a>
</div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->
</body>
</html>`
}
