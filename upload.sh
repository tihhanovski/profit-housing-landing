#!/usr/bin/env bash
set -euo pipefail

npm run build

git add docs

if git diff --cached --quiet; then
	echo "No changes in docs to commit."
	exit 0
fi

commit_time="$(date '+%Y-%m-%d %H:%M:%S %Z')"
git commit -m "Deploy docs: ${commit_time}"
git push