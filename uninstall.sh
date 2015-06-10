#!/bin/sh

launchctl unload /Library/LaunchAgents/com.haipz.autowallpaper.plist

rm /Library/LaunchAgents/com.haipz.autowallpaper.plist

echo 'uninstalled!'
