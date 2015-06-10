#!/bin/sh

CDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

sed "s|OUTPATH|$CDIR|" source.plist > com.haipz.autowallpaper.plist

launchctl unload /Library/LaunchAgents/com.haipz.autowallpaper.plist

rm /Library/LaunchAgents/com.haipz.autowallpaper.plist

cp ./com.haipz.autowallpaper.plist /Library/LaunchAgents/

launchctl load /Library/LaunchAgents/com.haipz.autowallpaper.plist

echo 'installed!'