---
slug: '' # Add a localized slug
date: '{{ .Date }}' # date in which the content is created - defaults to "today"
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: ''
summary: "" # for the blog summary page
type: 'blog'
---
