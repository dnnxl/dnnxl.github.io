---
layout: page
permalink: /publications/
title: Publications
description: "An overview of my research publications."
nav: true
nav_order: 2
---

You can browse my work by category below (listed newest to oldest). For the most current list of citations and papers, check out my [Google Scholar](https://scholar.google.com/citations?user=vipkAKEAAAAJ&hl=en&authuser=3) or [Semantic Scholar](https://www.semanticscholar.org/author/Danny-Xie-Li/2278092358).

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<!--- <button id="workshop" class="badge">Workshop</button> -->
<button id="conference" class="badge">Conference</button>
<button id="journal" class="badge">Journal</button>
<button id="workshop" class="badge">Article</button>

<div id="bibliografy-full" class="biblio hidden open">
  {% bibliography -f {{ site.scholar.bibliography }}  %}
</div>

<!---<div id="bibliografy-workshop" class="biblio hidden">
  {% bibliography -f {{ site.scholar.bibliography }}  --query @*[cat=Workshop]%}
</div> -->

<div id="bibliografy-conf" class="biblio hidden">
  {% bibliography -f {{ site.scholar.bibliography }}  --query @*[cat=Conference]%}
</div>

<div id="bibliografy-workshop" class="biblio hidden">
  {% bibliography -f {{ site.scholar.bibliography }}  --query @*[cat=Workshop]%}
</div> 

<div id="bibliografy-journal" class="biblio hidden">
  {% bibliography -f {{ site.scholar.bibliography }}  --query @*[cat=Journal]%}
</div>

</div>
