"""
Cleans and strictly generates the canonical 8 weeks (60 days) of Claude Code Mastery lessons.
"""
import shutil
from pathlib import Path

curriculum_dir = Path(__file__).resolve().parent.parent / "curriculum"

# Clear all week subdirectories in curriculum/
for item in curriculum_dir.iterdir():
    if item.is_dir() and item.name.startswith("week"):
        shutil.rmtree(item)

# Re-run build_full_curriculum
import build_full_curriculum
print("Regenerated clean 8 weeks curriculum.")
