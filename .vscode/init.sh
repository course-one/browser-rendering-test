export PS1='🔥 '

# commit alias
commit() {
  git add -A && git commit -m "$*"
}