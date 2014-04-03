#!/bin/bash

echo "##############################"
echo "# Pushing release to $RELEASE_REMOTE #"
echo "##############################"

ARG_DEFS=(
  "--codename=(.*)"
  "--version=(.*)"
)

function init {
  TMP_DIR=$SCRIPT_DIR/../../tmp
  BUILD_DIR=$SCRIPT_DIR/../../dist
  PROJECT_DIR=$SCRIPT_DIR/../..

  IONIC_DIR=$TMP_DIR/ionic
}

function run {
  cd ../..

  rm -rf $IONIC_DIR
  mkdir -p $IONIC_DIR

  git clone https://$GH_ORG:$GH_TOKEN@github.com/$GH_ORG/ionic.git \
    $IONIC_DIR \
    --depth=10

  cd $IONIC_DIR

  CODENAME=$(readJsonProp "package.json" "codename")

  replaceJsonProp "bower.json" "version" "$VERSION"
  replaceJsonProp "component.json" "version" "$VERSION"

  replaceJsonProp "bower.json" "codename" "$CODENAME"
  replaceJsonProp "component.json" "codename" "$CODENAME"

  echo "-- Putting built files into release folder"
  mkdir -p release
  cp -Rf $PROJECT_DIR/dist/* release

  git add -A
  git commit -m "finalize-release: v$VERSION \"$CODENAME\""
  git tag -f -m "v$VERSION" v$VERSION

  git push -q $RELEASE_REMOTE master
  git push -q $RELEASE_REMOTE v$VERSION

  echo "-- v$VERSION \"$CODENAME\" pushed to $RELEASE_REMOTE/master successfully!"

  gulp tweet --release --codeversion "$VERSION" --codename "$CODENAME"
}

source $(dirname $0)/../utils.inc
