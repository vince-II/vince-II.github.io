#!/usr/bin/env bash
# Usage: ./build.sh [path/to/avatar.png]  -> rebuilds site/index.html (deploy) and index.html (preview)
set -e
cd "$(dirname "$0")"
[ -n "$1" ] && cp "$1" site/avatar.png
B64=$(base64 -w0 site/avatar.png)
MIME=$(file -b --mime-type site/avatar.png)
sed "s|__AVATAR__|data:$MIME;base64,$B64|" src/page.html > index.html
{ printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<link rel="icon" href="avatar.png">\n'
  sed -n '1,/<\/style>/p' src/page.html; printf '</head>\n<body>\n'
  sed -n '/<\/style>/,$p' src/page.html | tail -n +2; printf '</body>\n</html>\n'; } | sed 's|__AVATAR__|avatar.png|' > site/index.html
echo built
