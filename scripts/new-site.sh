#!/bin/bash
# usage: scripts/new-site.sh <slug>   (run from anywhere)
# PREMIUM kit. For now it is used for ONE showcase site only: never for daily demos or backlog rebuilds.
# Copies the premium kit to /workspace/<slug>, without node_modules, build output, sample stock photos, or kit docs.
set -e
S=$1; [ -z "$S" ] && { echo "usage: new-site.sh slug"; exit 1; }
KIT=$(cd "$(dirname "$0")/.." && pwd); DEST=/workspace/$S
[ -e "$DEST" ] && { echo "$DEST already exists"; exit 1; }
mkdir -p "$DEST"
(cd "$KIT" && tar --exclude=./node_modules --exclude=./.next --exclude=./.git -cf - .) | tar -xf - -C "$DEST"
rm -rf "$DEST/public/images/stock" "$DEST/public/images/_opt" "$DEST/public/og.jpg" "$DEST/tsconfig.tsbuildinfo" "$DEST/.site-domain" "$DEST/fill-config.md" "$DEST/scripts/new-site.sh" "$DEST/README.md"
mkdir -p "$DEST/public/images"
echo "{}" > "$DEST/lib/image-manifest.json"
# Fresh, empty stock list (the sample burger photos stay in the kit only).
python3 - "$DEST/stock.config.ts" <<'P'
import re, sys
p = sys.argv[1]; s = open(p).read()
s = re.sub(r"export const stockPhotos: StockCredit\[\] = \[[\s\S]*?\];\n", "export const stockPhotos: StockCredit[] = [];\n", s)
open(p, "w").write(s)
P
sed -i "s/\"name\": \"claudaura-starter-premium\"/\"name\": \"$S\"/" "$DEST/package.json"
# Pick a free vercel.app name: <slug>.vercel.app may already belong to a stranger.
DOM=""
for c in "$S" "$S-ca" "$S-demo" "$S-gta"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://$c.vercel.app")
  [ "$code" = "404" ] && { DOM="$c.vercel.app"; break; }
done
[ -z "$DOM" ] && DOM="$S.vercel.app"
echo "$DOM" > "$DEST/.site-domain"
echo "Site domain: https://$DOM (set siteUrl in site.config.ts to this)"
echo "Created $DEST. Rewrite site.config.ts (the sample uses stock() photos that are no longer there), add real photos to public/images,"
echo "then top up gaps with: npm run stock -- --query \"smash burger\" --min 8"
