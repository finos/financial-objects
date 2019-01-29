#!/bin/bash

# GitHub repo coordinates
GH_ORG="finos-fo"
GH_REPO="finos-fo.github.io"
GH_BRANCH="docusaurus"
GITHUB_PREFIX="https://github.com/$GH_ORG/$GH_REPO/tree/$GH_BRANCH/src/objects"

# Typedoc coordinates
TS_SOURCE=../src/objects/*.ts
DOCS_PATH=../docs
TMP_FOLDER=../docs/objects

# Remove old object interfaces
rm -rf $DOCS_PATH/interfaces

# Create markdown files
typedoc --module commonjs --theme markdown --readme none --out $TMP_FOLDER $TS_SOURCE

# Extract object interfaces, remove the rest
mv $TMP_FOLDER/interfaces $DOCS_PATH
rm -rf $TMP_FOLDER

# add Markdown headers for Docusaurus
for filename in ../docs/interfaces/*.md; do
    OBJECT_NAME=`cat $filename | grep "Interface:" | awk '{print $3}'`
    sed -i '' '1d' $filename
    echo "---" >> ${filename}.new
    echo "id: $(basename "$filename" .md)" >> ${filename}.new
    echo "title: $OBJECT_NAME object" >> ${filename}.new
    echo "sidebar_label: $OBJECT_NAME" >> ${filename}.new
    echo "---" >> ${filename}.new
    echo "" >> ${filename}.new
    echo "[Source code: ${OBJECT_NAME}.ts](${GITHUB_PREFIX}/${OBJECT_NAME}.ts)" >> ${filename}.new
    cat $filename >> ${filename}.new
    sed -i '' '/# Interface:/d' ${filename}.new
    echo "Generated docs for '$OBJECT_NAME' object on file '$filename'"
    mv ${filename}.new ${filename}
done
