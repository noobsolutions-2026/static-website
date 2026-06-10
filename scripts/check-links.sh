#!/usr/bin/env bash
# Validates internal href links in a modified HTML file.
# Called by Claude Code PostToolUse hook — reads CLAUDE_TOOL_INPUT env var.

set -euo pipefail

[[ -z "${CLAUDE_TOOL_INPUT:-}" ]] && exit 0

FILE=$(echo "$CLAUDE_TOOL_INPUT" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    print(data.get('file_path', ''))
except Exception:
    print('')
" 2>/dev/null)

[[ -z "$FILE" ]] && exit 0
[[ "$FILE" != *.html ]] && exit 0
[[ ! -f "$FILE" ]] && exit 0

DIR=$(dirname "$FILE")
BROKEN=0

while IFS= read -r href; do
    [[ -z "$href" ]] && continue
    [[ "$href" == http://* || "$href" == https://* ]] && continue
    [[ "$href" == "#"* || "$href" == mailto:* ]] && continue
    href="${href%%#*}"
    [[ -z "$href" ]] && continue
    TARGET="$DIR/$href"
    if [[ ! -f "$TARGET" ]]; then
        echo "BROKEN LINK: '$href' in $(basename "$FILE") → $TARGET" >&2
        BROKEN=1
    fi
done < <(grep -oE 'href="[^"#][^"]*"' "$FILE" 2>/dev/null | sed 's/href="//;s/"$//')

[[ $BROKEN -eq 0 ]] && echo "✓ Links valid: $FILE"
exit $BROKEN
