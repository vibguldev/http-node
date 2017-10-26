git checkout master && git checkout -b $1 && echo 'trying ...' >> README.md && git add . && git commit -m 'README update' && git push origin $1 && git checkout master
