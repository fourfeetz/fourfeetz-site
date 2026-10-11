# FourFeetz automated news data

Published Korean articles live in `ko/*.json`. Automation state used for deduplication and monthly budget enforcement lives in `.state/`.

Only the news engine may create files below this directory. Articles are immutable after publication unless a correction is reviewed separately. A generated article is visible only when its schema is valid and its combined quality score is at least 90.

