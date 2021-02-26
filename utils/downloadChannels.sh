#!/bin/bash
while read -r line      # read a line from file.
do
  echo "$line"
  youtube-dl -w -i -c --write-info-json --sub-lang pt,en --write-sub --write-auto-sub --skip-download --convert-subs vtt --output "%(channel_id)s/%(id)s.%(ext)s" -v https://youtube.com/"$line"
done < ../data/mkf-100-sb.txt