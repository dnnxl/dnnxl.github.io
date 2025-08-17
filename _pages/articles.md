---
layout: page
permalink: /articles/
title: Articles
description: Articles organized by chronological order
years: [2021, 2024]
nav: true
---

<div class="publications">
  <h2 class="pub-type">Short Articles</h2>
    {%- for y in page.years -%}
      <h2 class="year">{{y}}</h2>
      {%- bibliography -f articles -q @*[year={{y}}]* -%}
    {%- endfor -%}
</div>