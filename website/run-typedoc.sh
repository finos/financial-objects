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
mkdir -p $DOCS_PATH/interfaces

# Create markdown files
typedoc --module commonjs --theme markdown --readme none --out $TMP_FOLDER $TS_SOURCE

# fix links to this file across all the others
for filepath in $TMP_FOLDER/interfaces/*.md; do
    FILEPATH_NO_EXT=$(basename "$filepath" .md)
    FILENAME_NO_EXT=`echo $filepath | cut -d_ -f2`
    TS_FILENAME=${FILENAME_NO_EXT}.ts
    for other_filepath in $TMP_FOLDER/interfaces/*.md; do
        echo "Replacing '$FILEPATH_NO_EXT' with '$FILENAME_NO_EXT' on '$filepath'"
        sed -i.bak "s/$FILEPATH_NO_EXT/$FILENAME_NO_EXT/g" $other_filepath
    done
done

# add Markdown headers for Docusaurus and simplify name
for filepath in $TMP_FOLDER/interfaces/*.md; do
    FILEPATH_NO_EXT=$(basename "$filepath" .md)
    FILENAME_NO_EXT=`echo $filepath | cut -d_ -f2`
    OBJECT_NAME=`cat $filepath | grep "Interface:" | awk '{print $3}'`
    TS_FILENAME=${FILENAME_NO_EXT}.ts
    TS_FILENAME_UP="$(tr '[:lower:]' '[:upper:]' <<< ${TS_FILENAME:0:1})${TS_FILENAME:1}"

    # Remove breadcrumb and 'Interface:' title from TypeDoc markdown generation
    sed -i.bak '1d' $filepath
    sed -i.bak '/# Interface:/d' ${filepath}

    # Add docusaurus info block
    echo "---" >> ${filepath}.new
    echo "id: $FILENAME_NO_EXT" >> ${filepath}.new
    echo "title: $OBJECT_NAME object" >> ${filepath}.new
    echo "sidebar_label: $OBJECT_NAME" >> ${filepath}.new
    echo "---" >> ${filepath}.new

    # Add link to TS source code
    echo "" >> ${filepath}.new
    echo "[Source code: ${TS_FILENAME}](${GITHUB_PREFIX}/)" >> ${filepath}.new

    cat $filepath >> ${filepath}.new
    echo "Generated docs for '$OBJECT_NAME' object from file '$TS_FILENAME' to file '$filepath'"
    mv ${filepath}.new $DOCS_PATH/interfaces/${FILENAME_NO_EXT}.md
done

# Cleanup
rm -rf $TMP_FOLDER
rm -rf $DOCS_PATH/interfaces/*.bak