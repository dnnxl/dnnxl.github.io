---
layout: page
permalink: /publications/
title: Publications
description: "An overview of my research publications."
nav: true
nav_order: 2
sections:
  - bibquery: "@preprint"
    text: "Preprint articles"
  - bibquery: "@article"
    text: "Journal articles"
  - bibquery: "@book|@incollection"
    text: "Books and Book chapters"
  - bibquery: "@inproceedings"
    text: "Conference and Workshop articles"
---

You can browse my work by category below (listed newest to oldest). For the most current list of citations and papers, check out my [Google Scholar](https://scholar.google.com/citations?user=vipkAKEAAAAJ&hl=en&authuser=3) or [Semantic Scholar](https://www.semanticscholar.org/author/Danny-Xie-Li/2278092358).

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!--{% include bib_search.liquid %}-->

<div class="publications">

{%- if page.sortby -%}
    {%- for section in page.sections %}
        <a id="{{section.text}}"></a>
        <p class="bibtitle">{{section.text}}</p>
        {%- for y in page.years %}

            {%- comment -%}  Count bibliography in actual section and year {%- endcomment -%}
            {%- capture citecount -%}
            {%- bibliography_count -f {{site.scholar.bibliography}} -q {{section.bibquery}}[year={{y}}] -%}
            {%- endcapture -%}

            {%- comment -%} If exist bibliography in actual section and year, print {%- endcomment -%}
            {%- if citecount !="0" %}

            {% bibliography -f {{site.scholar.bibliography}} -q {{section.bibquery}}[year={{y}}] %}

            {%- endif -%}

        {%- endfor %}

    {%- endfor %}

{%- else -%}

    {% bibliography -f {{ site.scholar.bibliography }} %}

{%- endif -%}

</div>
