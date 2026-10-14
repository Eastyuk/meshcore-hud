#!/bin/sh
# Join the four source parts into one HACS bundle. Part A must be first.
set -e
cd "$(dirname "$0")"
{
  printf '// meshcore-hud v1.0.0  https://github.com/Eastyuk/meshcore-hud\n'
  printf '// EFIS-style Lovelace cards for the MeshCore Home Assistant integration. MIT licence.\n'
  for p in a b c d; do cat "src/$p.js"; printf '\n'; done
} > dist/meshcore-hud.js
echo "built dist/meshcore-hud.js ($(wc -c < dist/meshcore-hud.js) bytes)"
