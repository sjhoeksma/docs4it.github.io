---
mainpage: true
title: ReadMe
description: The ReadMe of CloudDocs.
permalink: /about/
mermaid: true
---

# About CloudDocs

Organisation thinking about moving to the Cloud can use this website as a starting point. We have collected and combined information from different public available sources and have tried to make it readable. By placing all infromation into a Github project, you can clone and extend the infromation needed. Read this document if you want to use CloudDocs for your own or want to contribute.

## Need help with Jekyll
We use [Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to write our documents and use the GitHub support of Jekyll for this site. If you would like to know a bit more about the Jekyll functions look [here](https://devhints.io/jekyll). 

Here are some advanced markdowns you can use

```markdown
- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)

We support emoji :+1: :sparkles: :camel: :tada::rocket: :metal: :octocat: 
```
- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)

We support emoji:+1: :sparkles: :camel: :tada::rocket: :metal: :octocat: 

# Using CloudDocs yourself 

## Prerequisites

To install this theme, jekyll is required to be installed on your system or you have to clone this project on [GitHub](https://pages.github.com/). Head over to the [docs](https://jekyllrb.com/docs/installation/) and install the four requirements (Ruby, RubyGems, Node.js and Python 2.7). If you're on a Mac system, it's likely the only package you'll need to install is Node.js

Once you've installed the requirements, run this command in your terminal:

```bash
$ sudo gem install jekyll
```

You'll also need to install the bundler package:

```bash
$ sudo gem install bundler
```

## Downloading and Installing the theme

Download the
[theme](http://github.com/sjhoeksma/sjhoeksma.github.io/archive/master.zip)


Unzip it and use it as a regular jekyll folder.

```bash
$ unzip master.zip
```

Get inside the newly extracted folder

```bash
$ cd master
```

Install the dependencies

```bash
$ bundle install
```

Use it!

```bash
$ jekyll serve
```

# Installed addons

We have added some addons which can be helpfull. 

## Mermaid
With for example [mermaid](https://mermaidjs.github.io) you can draw images. To make it work just add `mermaid: true` to you .md header and in you text field add `<div class="mermaid">Mermiad tags here</div>`

```html
<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>  
```

<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>  

    
## Algolia
We support [https://www.algolia.com](https://www.algolia.com) as search engine please configure it and ensure to run the main index after every update

```bash
ALGOLIA_API_KEY='Your Admin Api Key' bundle exec jekyll algolia
```

# Setup

Some important configuration can be done in the file `_config.yml`. Please, check the Setup section in that file and uncomment the parts you require.


## baseurl

`baseurl` parameter is required in the case the site doesn't sit on the root of the domain. For example: 


In the case the site sits in the root, you can leave `baseurl` as empty "".


For more details read about [Jekyll][1] on its web page.

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/sjhoeksma/sjhoeksma.github.io.

# Development

To set up your environment to develop this theme, run `bundle install`.

You theme is setup just like a normal Jelyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

# License

We used a lot of content from public available sources, for which we have included a link to the orignal materials as reference. Any other material or the Jekyll templateis licensed under a [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/). 

[1]: http://jekyllrb.com
[2]: http://pages.github.com/
[3]: https://www.rossener.com/jekflix-template/
