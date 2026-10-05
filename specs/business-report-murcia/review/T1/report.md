T1 is finished and all three acceptance checks pass. The addendum's heading appears 2 times in `founder-inputs.md`, `business-report-murcia` appears 2 times in `README.md`, and the numstat shows 20 lines added and 0 deleted. Nothing is committed. The task is marked `[x]` in the feature document and its evidence row is added.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\founder-inputs.md`: a new section, `## Addendum 2026-10-06 — launch and financing`, at the end of the file. It records:
  - Launch in mid-October 2026, with month 1 = October 2026 (CAPTURED).
  - No external financing (CAPTURED).
  - No new purchases; he works with the equipment he already owns (CAPTURED).
  - The alta date and region are still TO-CONFIRM, and it names the two things that depend on them: how many tarifa plana months are left and whether the Cuota Cero window is still open.

  It also says the Block 5 launch-window item and the Granada bank scenario are superseded. One extra `SUPERSEDED 2026-10-06` line goes under the Block 5 launch-window item. No existing line was changed.
- `C:\Users\juanm\Documents\dev\vesta-docs\README.md`: rewritten.
  - It names `business/reports/business-report-murcia.{html,pdf}` as the current deliverable.
  - It lists the files that are superseded but kept for history: the two old reports, the bank dossier, `granada-market.md` and `bank-granada-scenario.mjs`.
  - It lists `business/reports/_src/` and the two build scripts. Those scripts don't exist yet; they arrive in T3.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md`: T1 marked `[x]` and its row added to the evidence table.

Deviations:
- `founder-inputs.md` never mentions the Granada bank scenario, so there was no line to mark. I declared it superseded inside the addendum, naming `bank-granada-scenario.mjs` and `business/bank/`.
- The research (`murcia-market.md` §8.1) describes Cuota Cero as a one-off aid of €2,920. I described the consequence as whether that aid is still within reach, not as a number of months. The figure stays in the research file and isn't repeated in the addendum.

Concerns:
- The repo has no `package.json`, tsc, eslint or test runner, so the safety net was only the baseline counts (0 and 0, exit 1). Being a structural task, there is no RED step.
- Git warns that `founder-inputs.md` will switch from LF to CRLF the next time it touches the file. That doesn't affect the numstat, but it's worth knowing before you commit.

## Verification output

$ ls package.json; echo "exit $?"
ls: cannot access 'package.json': No such file or directory
exit 2

$ grep -c "Addendum 2026-10-06" business/research/founder-inputs.md; echo "exit $?"  (baseline)
0
exit 1

$ grep -c "business-report-murcia" README.md; echo "exit $?"  (baseline)
0
exit 1

$ grep -c "Addendum 2026-10-06" business/research/founder-inputs.md; echo "exit $?"
2
exit 0

$ grep -c "business-report-murcia" README.md; echo "exit $?"
2
exit 0

$ git diff --numstat HEAD -- business/research/founder-inputs.md; echo "exit $?"
warning: in the working copy of 'business/research/founder-inputs.md', LF will be replaced by CRLF the next time Git touches it
20	0	business/research/founder-inputs.md
exit 0
