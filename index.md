---
layout: home
---

{% for group in site.data.qq_groups %}
  {{ group.name | escape }}: {{ group.group_id }}
{% endfor %}

