---
layout: page
permalink: /articles
title: Short Articles
description: publications by categories in reversed chronological order
years: [2023]
nav: false
---

<div class="publications">
  <h2 class="pub-type">Short Articles</h2>
    {%- for y in page.years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f articles -q @*[year={{y}}]* -%}
    {%- endfor -%}
</div>