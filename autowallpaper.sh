#!/bin/sh

echo `date`

CDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

OUTPATH="$CDIR/wallpaper"

/usr/local/bin/node "$CDIR/index.js" "$OUTPATH"

cat "$CDIR/setbackground.scpt" | sed "s|OUTPATH|$OUTPATH|" | osascript