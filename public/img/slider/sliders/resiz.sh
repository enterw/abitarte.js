#!/bin/sh

mkdir -p resized
for JPEG in *.jpg ; do
    jpegtran -copy none -optimize -perfect $JPEG > resized/$JPEG
done 
