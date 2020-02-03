# Publishing Docusaurus website

The [main workflow](.github/workflows/main.yml) defines a GitHub Action that automatically builds the Docusaurus website after any commit.

Every time that a push or pull request occurs on this repository, or any of its forks, which includes Docusaurus related files, the build will run and the gh-pages branch will be updated.

On any Pull Request that includes Docusaurus related files, a comment will be added with the link to the preview site.

No configuration is needed, this should work out of the box; you can track builds on https://github.com/maoo/finos-fo/actions .