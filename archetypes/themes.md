---
slug: '' # Add a localized slug
date: '{{ .Date }}' # ordering is in reverse date order
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}' # Theme title
description: '' # meta description for SEO
jobTitle: '{{ replace .File.ContentBaseName "-" " " | title }}' # Same as title
company: "" # Short description of theme (for summary)
location: "" # not used
duration: "" # not used
type: 'themes' # for filtering all content pages based on type

## For the content, you can use a title and a job description.
## For example:
# ### Fixing the world, one byte at a time
# The beginning of a great career. 
# 
---

