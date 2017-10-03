git checkout -b $1 && touch .$2 && git add . && git commit -m $3 && git push origin $1 && git checkout master
