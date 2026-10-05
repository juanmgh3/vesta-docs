class: medium

## git status --short -uall
```
 M business/research/murcia-model-data.json
 M business/research/murcia-model-tables.md
 M business/research/murcia-model.md
 M business/research/murcia-model.mjs
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? specs/business-report-murcia/review/T9/brief.md
?? specs/business-report-murcia/review/T9/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-model-data.json b/business/research/murcia-model-data.json
index 323461f..f7d9c96 100644
--- a/business/research/murcia-model-data.json
+++ b/business/research/murcia-model-data.json
@@ -475,8 +475,8 @@
           "net": 4010,
           "ads": 1800,
           "result": -974,
-          "trough": -923,
-          "troughMonth": "Jul-2027",
+          "trough": -974,
+          "troughMonth": "Oct-2027",
           "firstPositive": "Jun-2027",
           "cumPositive": null,
           "ivaOwedAtYearEnd": 355,
@@ -2177,8 +2177,8 @@
       "net": 4010,
       "ads": 1800,
       "result": -974,
-      "trough": -923,
-      "troughMonth": "Jul-2027",
+      "trough": -974,
+      "troughMonth": "Oct-2027",
       "firstPositive": "Jun-2027",
       "cumPositive": null,
       "ivaOwedAtYearEnd": 355,
@@ -2319,6 +2319,7 @@
             "machine": 0,
             "result": 2343,
             "cashEnd": 1369,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2338,6 +2339,7 @@
             "machine": 0,
             "result": 4747,
             "cashEnd": 6116,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2357,6 +2359,7 @@
             "machine": 0,
             "result": 6751,
             "cashEnd": 12867,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2376,6 +2379,7 @@
             "machine": 0,
             "result": 7919,
             "cashEnd": 20786,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2395,6 +2399,7 @@
             "machine": 0,
             "result": 8552,
             "cashEnd": 29338,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2414,6 +2419,7 @@
             "machine": 0,
             "result": 8882,
             "cashEnd": 38220,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2433,11 +2439,13 @@
             "machine": 0,
             "result": 9050,
             "cashEnd": 47270,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       },
       "B": {
         "scenario": "conservador",
@@ -2459,6 +2467,7 @@
             "machine": 0,
             "result": 5154,
             "cashEnd": 5293,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2478,6 +2487,7 @@
             "machine": 0,
             "result": 8496,
             "cashEnd": 13789,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2497,6 +2507,7 @@
             "machine": 0,
             "result": 11124,
             "cashEnd": 24914,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2516,6 +2527,7 @@
             "machine": 0,
             "result": 12657,
             "cashEnd": 37571,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2535,6 +2547,7 @@
             "machine": 0,
             "result": 13488,
             "cashEnd": 51058,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2554,6 +2567,7 @@
             "machine": 0,
             "result": 13920,
             "cashEnd": 64979,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2573,11 +2587,13 @@
             "machine": 0,
             "result": 14141,
             "cashEnd": 79119,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       },
       "C": {
         "scenario": "conservador",
@@ -2599,6 +2615,7 @@
             "machine": 0,
             "result": 6995,
             "cashEnd": 7863,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2618,6 +2635,7 @@
             "machine": 0,
             "result": 10950,
             "cashEnd": 18813,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2637,6 +2655,7 @@
             "machine": 0,
             "result": 13987,
             "cashEnd": 32800,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2656,6 +2675,7 @@
             "machine": 0,
             "result": 15759,
             "cashEnd": 48559,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2675,6 +2695,7 @@
             "machine": 0,
             "result": 16718,
             "cashEnd": 65277,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2694,6 +2715,7 @@
             "machine": 0,
             "result": 17218,
             "cashEnd": 82495,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2713,11 +2735,13 @@
             "machine": 0,
             "result": 17473,
             "cashEnd": 99969,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       }
     },
     "realista": {
@@ -2741,6 +2765,7 @@
             "machine": 0,
             "result": 12280,
             "cashEnd": 14377,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2760,6 +2785,7 @@
             "machine": 0,
             "result": 20826,
             "cashEnd": 35203,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2779,6 +2805,7 @@
             "machine": 0,
             "result": 27305,
             "cashEnd": 62508,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -2798,6 +2825,7 @@
             "machine": 2300,
             "result": 6599,
             "cashEnd": 69108,
+            "ownerStateHolds": true,
             "ownerStateResult": 6599,
             "hireDecidedForNextYear": false
           },
@@ -2817,6 +2845,7 @@
             "machine": 0,
             "result": 11060,
             "cashEnd": 80168,
+            "ownerStateHolds": true,
             "ownerStateResult": 11060,
             "hireDecidedForNextYear": false
           },
@@ -2836,6 +2865,7 @@
             "machine": 0,
             "result": 12197,
             "cashEnd": 92366,
+            "ownerStateHolds": false,
             "ownerStateResult": 12125,
             "hireDecidedForNextYear": false
           },
@@ -2855,11 +2885,16 @@
             "machine": 0,
             "result": 12780,
             "cashEnd": 105146,
+            "ownerStateHolds": false,
             "ownerStateResult": 12125,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": 5
+        "ownerYear": 5,
+        "ownerYears": [
+          5,
+          6
+        ]
       },
       "B": {
         "scenario": "realista",
@@ -2881,6 +2916,7 @@
             "machine": 0,
             "result": 19028,
             "cashEnd": 23796,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2900,6 +2936,7 @@
             "machine": 0,
             "result": 30386,
             "cashEnd": 54181,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -2919,6 +2956,7 @@
             "machine": 0,
             "result": 38856,
             "cashEnd": 93037,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -2938,6 +2976,7 @@
             "machine": 2300,
             "result": 19354,
             "cashEnd": 112391,
+            "ownerStateHolds": true,
             "ownerStateResult": 19354,
             "hireDecidedForNextYear": false
           },
@@ -2957,6 +2996,7 @@
             "machine": 0,
             "result": 24479,
             "cashEnd": 136870,
+            "ownerStateHolds": true,
             "ownerStateResult": 24479,
             "hireDecidedForNextYear": false
           },
@@ -2976,6 +3016,7 @@
             "machine": 0,
             "result": 25965,
             "cashEnd": 162835,
+            "ownerStateHolds": false,
             "ownerStateResult": 25870,
             "hireDecidedForNextYear": false
           },
@@ -2995,11 +3036,16 @@
             "machine": 0,
             "result": 26728,
             "cashEnd": 189562,
+            "ownerStateHolds": false,
             "ownerStateResult": 25870,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": 5
+        "ownerYear": 5,
+        "ownerYears": [
+          5,
+          6
+        ]
       },
       "C": {
         "scenario": "realista",
@@ -3021,6 +3067,7 @@
             "machine": 0,
             "result": 23445,
             "cashEnd": 29962,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -3040,6 +3087,7 @@
             "machine": 0,
             "result": 36643,
             "cashEnd": 66605,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": false
           },
@@ -3059,6 +3107,7 @@
             "machine": 0,
             "result": 46417,
             "cashEnd": 113022,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -3078,6 +3127,7 @@
             "machine": 2300,
             "result": 27702,
             "cashEnd": 140725,
+            "ownerStateHolds": true,
             "ownerStateResult": 27702,
             "hireDecidedForNextYear": false
           },
@@ -3097,6 +3147,7 @@
             "machine": 0,
             "result": 33263,
             "cashEnd": 173987,
+            "ownerStateHolds": true,
             "ownerStateResult": 33263,
             "hireDecidedForNextYear": false
           },
@@ -3116,6 +3167,7 @@
             "machine": 0,
             "result": 34978,
             "cashEnd": 208965,
+            "ownerStateHolds": false,
             "ownerStateResult": 34868,
             "hireDecidedForNextYear": false
           },
@@ -3135,11 +3187,16 @@
             "machine": 0,
             "result": 35857,
             "cashEnd": 244822,
+            "ownerStateHolds": false,
             "ownerStateResult": 34868,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": 5
+        "ownerYear": 5,
+        "ownerYears": [
+          5,
+          6
+        ]
       }
     },
     "optimista": {
@@ -3163,6 +3220,7 @@
             "machine": 0,
             "result": 24778,
             "cashEnd": 32432,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -3182,6 +3240,7 @@
             "machine": 2300,
             "result": 11842,
             "cashEnd": 44274,
+            "ownerStateHolds": false,
             "ownerStateResult": 7747,
             "hireDecidedForNextYear": false
           },
@@ -3201,6 +3260,7 @@
             "machine": 0,
             "result": 22331,
             "cashEnd": 66605,
+            "ownerStateHolds": false,
             "ownerStateResult": 10047,
             "hireDecidedForNextYear": false
           },
@@ -3220,6 +3280,7 @@
             "machine": 0,
             "result": 27108,
             "cashEnd": 93712,
+            "ownerStateHolds": false,
             "ownerStateResult": 10047,
             "hireDecidedForNextYear": false
           },
@@ -3239,6 +3300,7 @@
             "machine": 0,
             "result": 29695,
             "cashEnd": 123407,
+            "ownerStateHolds": false,
             "ownerStateResult": 10047,
             "hireDecidedForNextYear": false
           },
@@ -3258,6 +3320,7 @@
             "machine": 0,
             "result": 31043,
             "cashEnd": 154450,
+            "ownerStateHolds": false,
             "ownerStateResult": 10047,
             "hireDecidedForNextYear": false
           },
@@ -3277,11 +3340,13 @@
             "machine": 0,
             "result": 31731,
             "cashEnd": 186181,
+            "ownerStateHolds": false,
             "ownerStateResult": 10047,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       },
       "B": {
         "scenario": "optimista",
@@ -3303,6 +3368,7 @@
             "machine": 0,
             "result": 36025,
             "cashEnd": 48469,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -3322,6 +3388,7 @@
             "machine": 2300,
             "result": 26837,
             "cashEnd": 75305,
+            "ownerStateHolds": false,
             "ownerStateResult": 21493,
             "hireDecidedForNextYear": false
           },
@@ -3341,6 +3408,7 @@
             "machine": 0,
             "result": 39825,
             "cashEnd": 115130,
+            "ownerStateHolds": false,
             "ownerStateResult": 23793,
             "hireDecidedForNextYear": false
           },
@@ -3360,6 +3428,7 @@
             "machine": 0,
             "result": 46060,
             "cashEnd": 161190,
+            "ownerStateHolds": false,
             "ownerStateResult": 23793,
             "hireDecidedForNextYear": false
           },
@@ -3379,6 +3448,7 @@
             "machine": 0,
             "result": 49437,
             "cashEnd": 210627,
+            "ownerStateHolds": false,
             "ownerStateResult": 23793,
             "hireDecidedForNextYear": false
           },
@@ -3398,6 +3468,7 @@
             "machine": 0,
             "result": 51196,
             "cashEnd": 261823,
+            "ownerStateHolds": false,
             "ownerStateResult": 23793,
             "hireDecidedForNextYear": false
           },
@@ -3417,11 +3488,13 @@
             "machine": 0,
             "result": 52094,
             "cashEnd": 313916,
+            "ownerStateHolds": false,
             "ownerStateResult": 23793,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       },
       "C": {
         "scenario": "optimista",
@@ -3443,6 +3516,7 @@
             "machine": 0,
             "result": 43386,
             "cashEnd": 58965,
+            "ownerStateHolds": null,
             "ownerStateResult": null,
             "hireDecidedForNextYear": true
           },
@@ -3462,6 +3536,7 @@
             "machine": 2300,
             "result": 36653,
             "cashEnd": 95618,
+            "ownerStateHolds": false,
             "ownerStateResult": 30491,
             "hireDecidedForNextYear": false
           },
@@ -3481,6 +3556,7 @@
             "machine": 0,
             "result": 51277,
             "cashEnd": 146895,
+            "ownerStateHolds": false,
             "ownerStateResult": 32791,
             "hireDecidedForNextYear": false
           },
@@ -3500,6 +3576,7 @@
             "machine": 0,
             "result": 58466,
             "cashEnd": 205360,
+            "ownerStateHolds": false,
             "ownerStateResult": 32791,
             "hireDecidedForNextYear": false
           },
@@ -3519,6 +3596,7 @@
             "machine": 0,
             "result": 62360,
             "cashEnd": 267720,
+            "ownerStateHolds": false,
             "ownerStateResult": 32791,
             "hireDecidedForNextYear": false
           },
@@ -3538,6 +3616,7 @@
             "machine": 0,
             "result": 64388,
             "cashEnd": 332108,
+            "ownerStateHolds": false,
             "ownerStateResult": 32791,
             "hireDecidedForNextYear": false
           },
@@ -3557,11 +3636,13 @@
             "machine": 0,
             "result": 65423,
             "cashEnd": 397531,
+            "ownerStateHolds": false,
             "ownerStateResult": 32791,
             "hireDecidedForNextYear": false
           }
         ],
-        "ownerYear": null
+        "ownerYear": null,
+        "ownerYears": []
       }
     }
   },
@@ -3682,235 +3763,541 @@
       {
         "service": "Colchón individual",
         "n": 4,
-        "murciaMedian": 52.5,
-        "murciaMedianVat": 57,
-        "murciaRange": [
-          36,
-          59
-        ],
-        "madrid": [
-          35,
-          60
-        ],
-        "valencia": [
-          25,
-          55
-        ],
-        "granada": null,
-        "granadaNote": "desde €45, no size (Happy Clean)"
+        "murciaMedian": {
+          "value": 52.5,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 57,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            36,
+            59
+          ],
+          "label": "Range FACT (4 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            35,
+            60
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            25,
+            55
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": null,
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "desde €45, no size (Happy Clean)"
+        }
       },
       {
         "service": "Colchón matrimonio",
         "n": 4,
-        "murciaMedian": 67,
-        "murciaMedianVat": 70.8,
-        "murciaRange": [
-          60,
-          100
-        ],
-        "madrid": [
-          55,
-          90
-        ],
-        "valencia": [
-          60,
-          75
-        ],
-        "granada": null,
-        "granadaNote": "Clean-Home add-on only"
+        "murciaMedian": {
+          "value": 67,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 70.8,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            60,
+            100
+          ],
+          "label": "Range FACT (4 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            55,
+            90
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            60,
+            75
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": null,
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "Clean-Home add-on only"
+        }
       },
       {
         "service": "Colchón king",
         "n": 2,
-        "murciaMedian": null,
-        "murciaMedianVat": null,
-        "murciaRange": [
-          69,
-          120
-        ],
-        "madrid": [
-          75,
-          100
-        ],
-        "valencia": [
-          65,
-          100
-        ],
-        "granada": null,
-        "granadaNote": "Clean-Home add-on only, +€35"
+        "murciaMedian": {
+          "value": null,
+          "label": "no median (n < 3)",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": null,
+          "label": "no median (n < 3)",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            69,
+            120
+          ],
+          "label": "FACT (1 source), provisional per provider",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            75,
+            100
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            65,
+            100
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": null,
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "Clean-Home add-on only, +€35"
+        }
       },
       {
         "service": "Sofá 2 plazas",
         "n": 5,
-        "murciaMedian": 79,
-        "murciaMedianVat": 79,
-        "murciaRange": [
-          60,
-          90
-        ],
-        "madrid": [
-          60,
-          97
-        ],
-        "valencia": [
-          69,
-          89
-        ],
-        "granada": [
-          79,
-          79
-        ],
-        "granadaNote": "Clean-Home"
+        "murciaMedian": {
+          "value": 79,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 79,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            60,
+            90
+          ],
+          "label": "Range FACT (5 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            60,
+            97
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            69,
+            89
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": [
+            79,
+            79
+          ],
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "Clean-Home"
+        }
       },
       {
         "service": "Sofá 3 plazas",
         "n": 5,
-        "murciaMedian": 100,
-        "murciaMedianVat": 100,
-        "murciaRange": [
-          85,
-          120
-        ],
-        "madrid": [
-          90,
-          119
-        ],
-        "valencia": [
-          85,
-          119
-        ],
-        "granada": [
-          85,
-          85
-        ],
-        "granadaNote": "Clean-Home"
+        "murciaMedian": {
+          "value": 100,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 100,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            85,
+            120
+          ],
+          "label": "Range FACT (5 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            90,
+            119
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            85,
+            119
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": [
+            85,
+            85
+          ],
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "Clean-Home"
+        }
       },
       {
         "service": "Chaise longue / L",
         "n": 5,
-        "murciaMedian": 110,
-        "murciaMedianVat": 110,
-        "murciaRange": [
-          89,
-          180
-        ],
-        "madrid": [
-          120,
-          175
-        ],
-        "valencia": [
-          89,
-          190
-        ],
-        "granada": [
-          89,
-          99
-        ],
-        "granadaNote": "Clean-Home"
+        "murciaMedian": {
+          "value": 110,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 110,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            89,
+            180
+          ],
+          "label": "Range FACT (5 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            120,
+            175
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": [
+            89,
+            190
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §3.1 via murcia-market.md §5"
+        },
+        "granada": {
+          "value": [
+            89,
+            99
+          ],
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "Clean-Home"
+        }
       },
       {
         "service": "Sillón / butaca",
         "n": 3,
-        "murciaMedian": 40,
-        "murciaMedianVat": 40,
-        "murciaRange": [
-          30,
-          60
-        ],
-        "madrid": [
-          42,
-          50
-        ],
-        "valencia": null,
-        "granada": null,
-        "granadaNote": "desde €30 (Happy Clean)"
+        "murciaMedian": {
+          "value": 40,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 40,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            30,
+            60
+          ],
+          "label": "Range FACT (3 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": [
+            42,
+            50
+          ],
+          "label": "FACT — own sites",
+          "source": "market-dossier.md §2.1 via murcia-market.md §5"
+        },
+        "valencia": {
+          "value": null,
+          "label": "NOT FOUND in dossier",
+          "source": "murcia-market.md §5"
+        },
+        "granada": {
+          "value": null,
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "desde €30 (Happy Clean)"
+        }
       },
       {
         "service": "Silla",
         "n": 3,
-        "murciaMedian": 10,
-        "murciaMedianVat": 10,
-        "murciaRange": [
-          5,
-          20
-        ],
-        "madrid": null,
-        "valencia": null,
-        "granada": null,
-        "granadaNote": "desde €5 (Happy Clean)"
+        "murciaMedian": {
+          "value": 10,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaMedianVat": {
+          "value": 10,
+          "label": "medians ESTIMATE",
+          "source": "murcia-market.md §5"
+        },
+        "murciaRange": {
+          "value": [
+            5,
+            20
+          ],
+          "label": "Range FACT (3 sources)",
+          "source": "murcia-market.md §5"
+        },
+        "madrid": {
+          "value": null,
+          "label": "NOT FOUND in dossier",
+          "source": "murcia-market.md §5"
+        },
+        "valencia": {
+          "value": null,
+          "label": "NOT FOUND in dossier",
+          "source": "murcia-market.md §5"
+        },
+        "granada": {
+          "value": null,
+          "label": "FACT (1 source)",
+          "source": "granada-market.md §4 via murcia-market.md §5",
+          "note": "desde €5 (Happy Clean)"
+        }
       }
     ],
     "grids": {
       "A": {
-        "Colchón individual": 39,
-        "Colchón matrimonio": 55,
-        "Colchón king": 69,
-        "Sofá 3 plazas": 72,
-        "Sofá por plaza": 25,
-        "Pedido mínimo": 55
+        "Colchón individual": {
+          "value": 39,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        },
+        "Colchón matrimonio": {
+          "value": 55,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        },
+        "Colchón king": {
+          "value": 69,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        },
+        "Sofá 3 plazas": {
+          "value": 72,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        },
+        "Sofá por plaza": {
+          "value": 25,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        },
+        "Pedido mínimo": {
+          "value": 55,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.1"
+        }
       },
       "B": {
-        "Colchón individual": 49,
-        "Colchón matrimonio": 69,
-        "Colchón king": 89,
-        "Sofá 3 plazas": 95,
-        "Sofá por plaza": 32,
-        "Pedido mínimo": 70
+        "Colchón individual": {
+          "value": 49,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        },
+        "Colchón matrimonio": {
+          "value": 69,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        },
+        "Colchón king": {
+          "value": 89,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        },
+        "Sofá 3 plazas": {
+          "value": 95,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        },
+        "Sofá por plaza": {
+          "value": 32,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        },
+        "Pedido mínimo": {
+          "value": 70,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.2"
+        }
       },
       "C": {
-        "Colchón individual": [
-          49,
-          65,
-          79
-        ],
-        "Colchón matrimonio": [
-          69,
-          89,
-          109
-        ],
-        "Sofá 3 plazas": [
-          95,
-          119,
-          145
-        ],
-        "Pack Dormitorio": 149,
-        "Pack Casa": 200,
-        "Pedido mínimo": 79
+        "Colchón individual": {
+          "value": [
+            49,
+            65,
+            79
+          ],
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3"
+        },
+        "Colchón matrimonio": {
+          "value": [
+            69,
+            89,
+            109
+          ],
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3"
+        },
+        "Sofá 3 plazas": {
+          "value": [
+            95,
+            119,
+            145
+          ],
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3"
+        },
+        "Pack Dormitorio": {
+          "value": 149,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3",
+          "approx": true
+        },
+        "Pack Casa": {
+          "value": 200,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3",
+          "approx": true
+        },
+        "Pedido mínimo": {
+          "value": 79,
+          "label": "PROPOSAL",
+          "source": "pricing-decision.md §4.3",
+          "note": "or any pack"
+        }
       }
     },
     "rings": [
       {
         "ring": "R1",
         "scope": "Urban core, 24 barrios",
-        "population": 138997,
-        "households": 49600,
-        "travel": [
-          null,
-          3.5
-        ],
-        "travelNote": "core trips not routed; I6 €3.5 holds inside ≈10 km"
+        "population": {
+          "value": 138997,
+          "label": "FACT (1 source), provisional",
+          "source": "murcia-market.md §1.7"
+        },
+        "households": {
+          "value": 49600,
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §1.7",
+          "approx": true
+        },
+        "travel": {
+          "value": [
+            null,
+            3.5
+          ],
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §8.5",
+          "note": "core trips not routed; I6 €3.5 holds inside ≈10 km"
+        }
       },
       {
         "ring": "R2",
         "scope": "Municipality + inner belt",
-        "population": 704814,
-        "households": 250700,
-        "travel": [
-          2.8,
-          9.42
-        ],
-        "travelNote": "out-and-back at €0.175/km"
+        "population": {
+          "value": 704814,
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §1.7"
+        },
+        "households": {
+          "value": 250700,
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §1.7",
+          "approx": true
+        },
+        "travel": {
+          "value": [
+            2.8,
+            9.42
+          ],
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §8.5",
+          "note": "out-and-back at €0.175/km"
+        }
       },
       {
         "ring": "R3",
         "scope": "Outer ring (surcharge or minimum order)",
-        "population": 666428,
-        "households": 248500,
-        "travel": [
-          10.36,
-          27.55
-        ],
-        "travelNote": "out-and-back at €0.175/km"
+        "population": {
+          "value": 666428,
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §1.7"
+        },
+        "households": {
+          "value": 248500,
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §1.7",
+          "approx": true
+        },
+        "travel": {
+          "value": [
+            10.36,
+            27.55
+          ],
+          "label": "ESTIMATE",
+          "source": "murcia-market.md §8.5",
+          "note": "out-and-back at €0.175/km"
+        }
       }
     ]
   }
diff --git a/business/research/murcia-model-tables.md b/business/research/murcia-model-tables.md
index ca5891e..841b19c 100644
--- a/business/research/murcia-model-tables.md
+++ b/business/research/murcia-model-tables.md
@@ -1,6 +1,6 @@
 # Murcia model — generated tables
 
-Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan.
+Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan. Cash trough = lowest cash point to cover, including the Oct-2027 payment of the Jul–Sep IVA (a trough dated Oct-2027 is that payment).
 
 ## T0. Derived per-visit inputs
 
@@ -73,7 +73,7 @@ Year 1: gross €16,993 · net revenue €14,043 · result €6,517 · cash trou
 
 | Arch × demand | Gross Y1 | Result Y1 | Cash trough (month) | First positive | Cumulative positive | Year-end cash |
 | --- | --- | --- | --- | --- | --- | --- |
-| A conservador | 4,852 | −974 | −923 (Jul-2027) | Jun-2027 | not within year 1 | −974 |
+| A conservador | 4,852 | −974 | −974 (Oct-2027) | Jun-2027 | not within year 1 | −974 |
 | A realista | 11,645 | 2,097 | −318 (Jan-2027) | Feb-2027 | May-2027 | 2,097 |
 | A optimista | 20,884 | 7,654 | none (≥0 all year) | Nov-2026 | Nov-2026 | 7,654 |
 | B conservador | 6,199 | 139 | −548 (Jan-2027) | Apr-2027 | Sep-2027 | 139 |
@@ -101,45 +101,45 @@ Year 1: gross €16,993 · net revenue €14,043 · result €6,517 · cash trou
 
 ### conservador × B
 
-| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
-| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
-| Y2 | 12.0 | 18.0 | 1 | 20.5 | 15,660 | 0 | 0 | 5,154 | 5,293 | — | no |
-| Y3 | 16.0 | 24.0 | 1 | 27.3 | 20,880 | 0 | 0 | 8,496 | 13,789 | — | no |
-| Y4 | 18.7 | 28.0 | 1 | 31.8 | 24,360 | 0 | 0 | 11,124 | 24,914 | — | no |
-| Y5 | 20.2 | 30.3 | 1 | 34.5 | 26,390 | 0 | 0 | 12,657 | 37,571 | — | no |
-| Y6 | 21.1 | 31.6 | 1 | 35.9 | 27,490 | 0 | 0 | 13,488 | 51,058 | — | no |
-| Y7 | 21.5 | 32.3 | 1 | 36.7 | 28,062 | 0 | 0 | 13,920 | 64,979 | — | no |
-| Y8 | 21.7 | 32.6 | 1 | 37.0 | 28,355 | 0 | 0 | 14,141 | 79,119 | — | no |
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner state holds | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 12.0 | 18.0 | 1 | 20.5 | 15,660 | 0 | 0 | 5,154 | 5,293 | — | — | no |
+| Y3 | 16.0 | 24.0 | 1 | 27.3 | 20,880 | 0 | 0 | 8,496 | 13,789 | — | — | no |
+| Y4 | 18.7 | 28.0 | 1 | 31.8 | 24,360 | 0 | 0 | 11,124 | 24,914 | — | — | no |
+| Y5 | 20.2 | 30.3 | 1 | 34.5 | 26,390 | 0 | 0 | 12,657 | 37,571 | — | — | no |
+| Y6 | 21.1 | 31.6 | 1 | 35.9 | 27,490 | 0 | 0 | 13,488 | 51,058 | — | — | no |
+| Y7 | 21.5 | 32.3 | 1 | 36.7 | 28,062 | 0 | 0 | 13,920 | 64,979 | — | — | no |
+| Y8 | 21.7 | 32.6 | 1 | 37.0 | 28,355 | 0 | 0 | 14,141 | 79,119 | — | — | no |
 
-Founder→owner milestone (hired operators alone carry demand): not within Y8.
+Founder→owner milestone (hired operators alone carry demand), re-checked every year: not within Y8.
 
 ### realista × B
 
-| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
-| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
-| Y2 | 24.0 | 43.2 | 1 | 49.1 | 37,584 | 0 | 0 | 19,028 | 23,796 | — | no |
-| Y3 | 34.0 | 61.2 | 1 | 69.5 | 53,244 | 0 | 0 | 30,386 | 54,181 | — | no |
-| Y4 | 41.1 | 74.0 | 1 | 84.0 | 64,337 | 0 | 0 | 38,856 | 93,037 | — | yes |
-| Y5 | 45.4 | 81.7 | 2 | 46.4 | 71,038 | 22,320 | 2,300 | 19,354 | 112,391 | 19,354 | no |
-| Y6 | 47.7 | 85.9 | 2 | 48.8 | 74,738 | 22,320 | 0 | 24,479 | 136,870 | 24,479 | no |
-| Y7 | 49.0 | 88.1 | 2 | 50.1 | 76,684 | 22,320 | 0 | 25,965 | 162,835 | 25,870 | no |
-| Y8 | 49.6 | 89.3 | 2 | 50.7 | 77,683 | 22,320 | 0 | 26,728 | 189,562 | 25,870 | no |
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner state holds | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 24.0 | 43.2 | 1 | 49.1 | 37,584 | 0 | 0 | 19,028 | 23,796 | — | — | no |
+| Y3 | 34.0 | 61.2 | 1 | 69.5 | 53,244 | 0 | 0 | 30,386 | 54,181 | — | — | no |
+| Y4 | 41.1 | 74.0 | 1 | 84.0 | 64,337 | 0 | 0 | 38,856 | 93,037 | — | — | yes |
+| Y5 | 45.4 | 81.7 | 2 | 46.4 | 71,038 | 22,320 | 2,300 | 19,354 | 112,391 | yes | 19,354 | no |
+| Y6 | 47.7 | 85.9 | 2 | 48.8 | 74,738 | 22,320 | 0 | 24,479 | 136,870 | yes | 24,479 | no |
+| Y7 | 49.0 | 88.1 | 2 | 50.1 | 76,684 | 22,320 | 0 | 25,965 | 162,835 | no | 25,870 | no |
+| Y8 | 49.6 | 89.3 | 2 | 50.7 | 77,683 | 22,320 | 0 | 26,728 | 189,562 | no | 25,870 | no |
 
-Founder→owner milestone (hired operators alone carry demand): Y5.
+Founder→owner milestone (hired operators alone carry demand), re-checked every year: first reached Y5; holds in Y5, Y6; lapses in Y7, Y8.
 
 ### optimista × B
 
-| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
-| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
-| Y2 | 36.0 | 72.0 | 1 | 81.8 | 62,640 | 0 | 0 | 36,025 | 48,469 | — | yes |
-| Y3 | 48.0 | 96.0 | 2 | 54.5 | 83,520 | 22,320 | 2,300 | 26,837 | 75,305 | 21,493 | no |
-| Y4 | 56.0 | 112.0 | 2 | 63.6 | 97,440 | 22,320 | 0 | 39,825 | 115,130 | 23,793 | no |
-| Y5 | 60.7 | 121.3 | 2 | 68.9 | 105,560 | 22,320 | 0 | 46,060 | 161,190 | 23,793 | no |
-| Y6 | 63.2 | 126.4 | 2 | 71.8 | 109,958 | 22,320 | 0 | 49,437 | 210,627 | 23,793 | no |
-| Y7 | 64.5 | 129.0 | 2 | 73.3 | 112,249 | 22,320 | 0 | 51,196 | 261,823 | 23,793 | no |
-| Y8 | 65.2 | 130.4 | 2 | 74.1 | 113,418 | 22,320 | 0 | 52,094 | 313,916 | 23,793 | no |
-
-Founder→owner milestone (hired operators alone carry demand): not within Y8.
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner state holds | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 36.0 | 72.0 | 1 | 81.8 | 62,640 | 0 | 0 | 36,025 | 48,469 | — | — | yes |
+| Y3 | 48.0 | 96.0 | 2 | 54.5 | 83,520 | 22,320 | 2,300 | 26,837 | 75,305 | no | 21,493 | no |
+| Y4 | 56.0 | 112.0 | 2 | 63.6 | 97,440 | 22,320 | 0 | 39,825 | 115,130 | no | 23,793 | no |
+| Y5 | 60.7 | 121.3 | 2 | 68.9 | 105,560 | 22,320 | 0 | 46,060 | 161,190 | no | 23,793 | no |
+| Y6 | 63.2 | 126.4 | 2 | 71.8 | 109,958 | 22,320 | 0 | 49,437 | 210,627 | no | 23,793 | no |
+| Y7 | 64.5 | 129.0 | 2 | 73.3 | 112,249 | 22,320 | 0 | 51,196 | 261,823 | no | 23,793 | no |
+| Y8 | 65.2 | 130.4 | 2 | 74.1 | 113,418 | 22,320 | 0 | 52,094 | 313,916 | no | 23,793 | no |
+
+Founder→owner milestone (hired operators alone carry demand), re-checked every year: not within Y8.
 
 ## T7. Structural break-even (contribution at ppv 1.8)
 
diff --git a/business/research/murcia-model.md b/business/research/murcia-model.md
index 634284b..e8ff0f2 100644
--- a/business/research/murcia-model.md
+++ b/business/research/murcia-model.md
@@ -37,7 +37,7 @@
 | I19 | CAC, paid channel | €71 central, band €36–111 | ESTIMATE / HYPOTHESIS | `market-dossier.md` §6.3; `economic-model.md` §1 I10 |
 | I20 | Operator 2 full-loaded cost | €1,860/mo | ESTIMATE | `economic-model.md` §1 I13 (TO-CONFIRM vs convenio de limpieza) |
 | I21 | Second machine | €2,300, bought in the year an operator joins | CAPTURED | `founder-inputs.md` Block 2 |
-| I22 | Operator trigger | utilisation ≥75% of capacity and cash ≥ 3 months of the new cost structure | PROPOSAL | `economic-model.md` §7 |
+| I22 | Operator trigger | utilisation ≥75% of capacity and cash ≥ 3 months of the new cost structure; caveat: tested on the year's average utilisation, not on 3 consecutive months as §7 states, so a year with a strong season can hold 3 months above 75% and still not trigger (§2.5, §3 item 11) | PROPOSAL | `economic-model.md` §7 |
 | I23 | Growth, years 4–8 | visits grow at half the Y2→Y3 rate in Y4, and the rate halves every year after | HYPOTHESIS | Rule set here from `economic-model.md` §4 visits (that file's §9 C6 left the rule open) |
 | I24 | IRPF and owner drawings | Not modelled; results are pre-IRPF and cash accumulates with no drawings | ASSUMPTION | `economic-model.md` §1 I15 |
 
@@ -81,7 +81,11 @@ price; net = gross ÷ 1.21. Result = net − consumables − travel − parking
 Cash: the client pays gross; the IVA of each calendar quarter is paid in the month after
 it closes (Oct–Dec in Jan-2027, Jan–Mar in Apr-2027, Apr–Jun in Jul-2027); Jul–Sep is
 owed at year end (paid Oct-2027) and is netted out of year-end cash, which therefore
-equals the year's result. Trough = lowest month-end cash below zero, with no buffer.
+equals the year's result. Trough = the lowest cash point the founder must be able to
+cover with no buffer: the lowest of the twelve month-ends and of the Oct-2027 point,
+where the Jul–Sep IVA is paid (year-end cash net of IVA owed). The Oct-2027 point
+counts only that payment, not Oct-2027 trading. A trough dated Oct-2027 is that
+payment: in A × conservador it is −€974, below the −€923 Jul-2027 month-end.
 
 ### 2.5 Years 2–8 (tables T5, T6)
 
@@ -95,8 +99,11 @@ of a year, if served pieces ≥ 75% of that year's capacity (the annual average
 for "3 consecutive months") and year-end cash ≥ 3 × (€356 + €1,860 × hired-after +
 that year's ads), one operator is hired for the next year.
 
-Founder→owner milestone: the first year in which the hired operators alone could
-carry the year's demand (hired × 88 ≥ demand pieces). "Owner-state result" is the
+Founder→owner milestone: the hired operators alone could carry the year's demand
+(hired × 88 ≥ demand pieces). It is re-checked every year with a hired operator, and
+T6 says in which years it holds ("Owner state holds") and in which it lapses, because
+demand keeps growing after the hire and no second hire is triggered. In realista × B it
+is first reached in Y5, holds in Y5–Y6 and lapses in Y7–Y8. "Owner-state result" is the
 year's result if the founder stopped cleaning that year (capacity = hired × 88). Since
 the founder's own hours carry no wage in the model, it equals the operating result
 whenever the hired capacity covers demand.
@@ -108,12 +115,26 @@ parking); per piece = per visit ÷ 1.8. Break-even pieces = monthly cost ÷ cont
 per piece; visits = pieces ÷ 1.8. Paid visits subtract the €71 CAC once per visit.
 Contribution margin = contribution per piece ÷ net price.
 
+Single-piece paid visit (T8): one piece at the architecture's average price per piece
+(I1–I3, service mix M1) ÷ 1.21, minus €1.5 consumables, minus €5.5 per visit (travel
+€4.5 + parking €1.0) and minus €71 CAC. For B: 72.50 ÷ 1.21 = 59.92 − 1.5 − 5.5 − 71 =
+−€18.08. `pricing-decision.md` §4.2 gives −€22.48 for the same notion on a different
+basis: one matrimonio at €69 (net €57.02), minus €1.5, minus the full €7 day trip
+(§3.5) and minus €71, no parking. The two figures answer different questions: the model's
+is an average paid piece in Murcia, §4.2's is a single matrimonio under the Phase-2
+cost table. The report can quote either, naming its basis.
+
 ### 2.7 Market block in the JSON
 
 `market` carries, for the report's charts, the price map of `murcia-market.md` §5
 (Murcia median and range, Madrid and Valencia ranges, Granada figures), the three price
 grids of `pricing-decision.md` §4.1–§4.3, and the service rings of `murcia-market.md`
-§1.7 with the travel range of §8.5. Values are copied as those files state them.
+§1.7 with the travel range of §8.5. Values are copied as those files state them. Every
+figure is an object `{ value, label, source }`: `label` is the evidence label the source
+gives it, verbatim, and `source` the file and section. A value the source prints with
+"~" or "≈" (the C packs, the ring households) carries `approx: true`; a cell the source
+leaves empty is `value: null` with the source's own label (e.g. "NOT FOUND in dossier").
+Text the source attaches to a cell goes in `note`.
 
 ## 3. What changed vs `economic-model.md`
 
@@ -136,6 +157,13 @@ grids of `pricing-decision.md` §4.1–§4.3, and the service rings of `murcia-m
    table's 76.6–78.5% divided by the gross price.
 10. **B2B** remains excluded from every table, as in `economic-model.md` §7 (demand
     HYPOTHESIS); it can only improve them.
+11. **Hire trigger on the annual average.** `economic-model.md` §7 fires on utilisation
+    ≥75% for 3 consecutive months; this annual model tests the year's average
+    utilisation instead (I22, §2.5).
+12. **Troughs are not comparable with the old reports.** The IVA timing of item 5 and
+    the Oct-2027 IVA payment counted in the trough (§2.4) move the low cash points; a
+    trough here and one in `economic-model.md` or the old reports measure different
+    things.
 
 ## 4. Verification
 
diff --git a/business/research/murcia-model.mjs b/business/research/murcia-model.mjs
index 7c77fbf..700933a 100644
--- a/business/research/murcia-model.mjs
+++ b/business/research/murcia-model.mjs
@@ -97,6 +97,7 @@ const MONTHS = [
   "Aug-2027",
   "Sep-2027",
 ];
+const IVA_SETTLEMENT_MONTH = "Oct-2027";
 
 const fixedForMonth = (m) => (m <= FLAT_RATE_MONTHS_LEFT ? FIXED_FLAT : FIXED_FULL);
 const fixedForYear = (y) => {
@@ -146,6 +147,10 @@ function year1(scenKey, archKey) {
       trough = cash;
       troughMonth = MONTHS[i];
     }
+    if (i === 11 && cash - accrued < trough) {
+      trough = cash - accrued;
+      troughMonth = IVA_SETTLEMENT_MONTH;
+    }
     rows.push({
       month: MONTHS[i],
       visits,
@@ -207,7 +212,7 @@ function longRun(scenKey, archKey, endCashY1) {
   let hireNext = false;
   let visits = 0;
   let growth = (cfg.visits[1] / cfg.visits[0] - 1) / 2;
-  let ownerYear = null;
+  const ownerYears = [];
   const years = [];
   for (let y = 2; y <= MAX_YEAR; y++) {
     if (y === 2) visits = cfg.visits[0];
@@ -234,6 +239,8 @@ function longRun(scenKey, archKey, endCashY1) {
     );
     cash += r.result;
     let ownerResult = null;
+    const ownerHolds = hired > 0 ? hired * CAPACITY >= demand : null;
+    if (ownerHolds) ownerYears.push(y);
     if (hired > 0) {
       const ownerServed = Math.min(demand, hired * CAPACITY);
       ownerResult = yearResult(
@@ -245,7 +252,6 @@ function longRun(scenKey, archKey, endCashY1) {
         hired,
         newHire,
       ).result;
-      if (ownerYear === null && hired * CAPACITY >= demand) ownerYear = y;
     }
     const utilisation = served / capacity;
     const cashNeed =
@@ -267,11 +273,18 @@ function longRun(scenKey, archKey, endCashY1) {
       machine: r.machine,
       result: Math.round(r.result),
       cashEnd: Math.round(cash),
+      ownerStateHolds: ownerHolds,
       ownerStateResult: ownerResult === null ? null : Math.round(ownerResult),
       hireDecidedForNextYear: hireNext,
     });
   }
-  return { scenario: scenKey, arch: archKey, years, ownerYear };
+  return {
+    scenario: scenKey,
+    arch: archKey,
+    years,
+    ownerYear: ownerYears.length ? ownerYears[0] : null,
+    ownerYears,
+  };
 }
 
 const contribution = {};
@@ -340,27 +353,89 @@ for (const ak of Object.keys(ARCH)) {
   };
 }
 
+const fig = (value, label, source, extra = {}) => ({ value, label, source, ...extra });
+const S5 = "murcia-market.md §5";
+const MAD = "market-dossier.md §2.1 via murcia-market.md §5";
+const VAL = "market-dossier.md §3.1 via murcia-market.md §5";
+const GRA = "granada-market.md §4 via murcia-market.md §5";
+const MAD_VAL_LABEL = "FACT — own sites";
+const GRA_LABEL = "FACT (1 source)";
+const RANGE5 = "Range FACT (5 sources)";
+const MED = "medians ESTIMATE";
+const priceRow = (service, n, rangeLabel, medianLabel, median, medianVat, range, madrid, valencia, granada) => ({
+  service,
+  n,
+  murciaMedian: fig(median, medianLabel, S5),
+  murciaMedianVat: fig(medianVat, medianLabel, S5),
+  murciaRange: fig(range, rangeLabel, S5),
+  madrid: madrid === null ? fig(null, "NOT FOUND in dossier", S5) : fig(madrid, MAD_VAL_LABEL, MAD),
+  valencia: valencia === null ? fig(null, "NOT FOUND in dossier", S5) : fig(valencia, MAD_VAL_LABEL, VAL),
+  granada: fig(granada.value, GRA_LABEL, GRA, { note: granada.note }),
+});
+const gridFig = (value, sec, extra) => fig(value, "PROPOSAL", `pricing-decision.md ${sec}`, extra);
+const RING_SRC = "murcia-market.md §1.7";
+const TRAVEL_SRC = "murcia-market.md §8.5";
+
 const market = {
   source: "murcia-market.md §5 (price map), §1.7 and §8.5 (rings); pricing-decision.md §4 (grids)",
   priceMap: [
-    { service: "Colchón individual", n: 4, murciaMedian: 52.5, murciaMedianVat: 57.0, murciaRange: [36, 59], madrid: [35, 60], valencia: [25, 55], granada: null, granadaNote: "desde €45, no size (Happy Clean)" },
-    { service: "Colchón matrimonio", n: 4, murciaMedian: 67, murciaMedianVat: 70.8, murciaRange: [60, 100], madrid: [55, 90], valencia: [60, 75], granada: null, granadaNote: "Clean-Home add-on only" },
-    { service: "Colchón king", n: 2, murciaMedian: null, murciaMedianVat: null, murciaRange: [69, 120], madrid: [75, 100], valencia: [65, 100], granada: null, granadaNote: "Clean-Home add-on only, +€35" },
-    { service: "Sofá 2 plazas", n: 5, murciaMedian: 79, murciaMedianVat: 79, murciaRange: [60, 90], madrid: [60, 97], valencia: [69, 89], granada: [79, 79], granadaNote: "Clean-Home" },
-    { service: "Sofá 3 plazas", n: 5, murciaMedian: 100, murciaMedianVat: 100, murciaRange: [85, 120], madrid: [90, 119], valencia: [85, 119], granada: [85, 85], granadaNote: "Clean-Home" },
-    { service: "Chaise longue / L", n: 5, murciaMedian: 110, murciaMedianVat: 110, murciaRange: [89, 180], madrid: [120, 175], valencia: [89, 190], granada: [89, 99], granadaNote: "Clean-Home" },
-    { service: "Sillón / butaca", n: 3, murciaMedian: 40, murciaMedianVat: 40, murciaRange: [30, 60], madrid: [42, 50], valencia: null, granada: null, granadaNote: "desde €30 (Happy Clean)" },
-    { service: "Silla", n: 3, murciaMedian: 10, murciaMedianVat: 10, murciaRange: [5, 20], madrid: null, valencia: null, granada: null, granadaNote: "desde €5 (Happy Clean)" },
+    priceRow("Colchón individual", 4, "Range FACT (4 sources)", MED, 52.5, 57.0, [36, 59], [35, 60], [25, 55], { value: null, note: "desde €45, no size (Happy Clean)" }),
+    priceRow("Colchón matrimonio", 4, "Range FACT (4 sources)", MED, 67, 70.8, [60, 100], [55, 90], [60, 75], { value: null, note: "Clean-Home add-on only" }),
+    priceRow("Colchón king", 2, "FACT (1 source), provisional per provider", "no median (n < 3)", null, null, [69, 120], [75, 100], [65, 100], { value: null, note: "Clean-Home add-on only, +€35" }),
+    priceRow("Sofá 2 plazas", 5, RANGE5, MED, 79, 79, [60, 90], [60, 97], [69, 89], { value: [79, 79], note: "Clean-Home" }),
+    priceRow("Sofá 3 plazas", 5, RANGE5, MED, 100, 100, [85, 120], [90, 119], [85, 119], { value: [85, 85], note: "Clean-Home" }),
+    priceRow("Chaise longue / L", 5, RANGE5, MED, 110, 110, [89, 180], [120, 175], [89, 190], { value: [89, 99], note: "Clean-Home" }),
+    priceRow("Sillón / butaca", 3, "Range FACT (3 sources)", MED, 40, 40, [30, 60], [42, 50], null, { value: null, note: "desde €30 (Happy Clean)" }),
+    priceRow("Silla", 3, "Range FACT (3 sources)", MED, 10, 10, [5, 20], null, null, { value: null, note: "desde €5 (Happy Clean)" }),
   ],
   grids: {
-    A: { "Colchón individual": 39, "Colchón matrimonio": 55, "Colchón king": 69, "Sofá 3 plazas": 72, "Sofá por plaza": 25, "Pedido mínimo": 55 },
-    B: { "Colchón individual": 49, "Colchón matrimonio": 69, "Colchón king": 89, "Sofá 3 plazas": 95, "Sofá por plaza": 32, "Pedido mínimo": 70 },
-    C: { "Colchón individual": [49, 65, 79], "Colchón matrimonio": [69, 89, 109], "Sofá 3 plazas": [95, 119, 145], "Pack Dormitorio": 149, "Pack Casa": 200, "Pedido mínimo": 79 },
+    A: {
+      "Colchón individual": gridFig(39, "§4.1"),
+      "Colchón matrimonio": gridFig(55, "§4.1"),
+      "Colchón king": gridFig(69, "§4.1"),
+      "Sofá 3 plazas": gridFig(72, "§4.1"),
+      "Sofá por plaza": gridFig(25, "§4.1"),
+      "Pedido mínimo": gridFig(55, "§4.1"),
+    },
+    B: {
+      "Colchón individual": gridFig(49, "§4.2"),
+      "Colchón matrimonio": gridFig(69, "§4.2"),
+      "Colchón king": gridFig(89, "§4.2"),
+      "Sofá 3 plazas": gridFig(95, "§4.2"),
+      "Sofá por plaza": gridFig(32, "§4.2"),
+      "Pedido mínimo": gridFig(70, "§4.2"),
+    },
+    C: {
+      "Colchón individual": gridFig([49, 65, 79], "§4.3"),
+      "Colchón matrimonio": gridFig([69, 89, 109], "§4.3"),
+      "Sofá 3 plazas": gridFig([95, 119, 145], "§4.3"),
+      "Pack Dormitorio": gridFig(149, "§4.3", { approx: true }),
+      "Pack Casa": gridFig(200, "§4.3", { approx: true }),
+      "Pedido mínimo": gridFig(79, "§4.3", { note: "or any pack" }),
+    },
   },
   rings: [
-    { ring: "R1", scope: "Urban core, 24 barrios", population: 138997, households: 49600, travel: [null, 3.5], travelNote: "core trips not routed; I6 €3.5 holds inside ≈10 km" },
-    { ring: "R2", scope: "Municipality + inner belt", population: 704814, households: 250700, travel: [2.8, 9.42], travelNote: "out-and-back at €0.175/km" },
-    { ring: "R3", scope: "Outer ring (surcharge or minimum order)", population: 666428, households: 248500, travel: [10.36, 27.55], travelNote: "out-and-back at €0.175/km" },
+    {
+      ring: "R1",
+      scope: "Urban core, 24 barrios",
+      population: fig(138997, "FACT (1 source), provisional", RING_SRC),
+      households: fig(49600, "ESTIMATE", RING_SRC, { approx: true }),
+      travel: fig([null, 3.5], "ESTIMATE", TRAVEL_SRC, { note: "core trips not routed; I6 €3.5 holds inside ≈10 km" }),
+    },
+    {
+      ring: "R2",
+      scope: "Municipality + inner belt",
+      population: fig(704814, "ESTIMATE", RING_SRC),
+      households: fig(250700, "ESTIMATE", RING_SRC, { approx: true }),
+      travel: fig([2.8, 9.42], "ESTIMATE", TRAVEL_SRC, { note: "out-and-back at €0.175/km" }),
+    },
+    {
+      ring: "R3",
+      scope: "Outer ring (surcharge or minimum order)",
+      population: fig(666428, "ESTIMATE", RING_SRC),
+      households: fig(248500, "ESTIMATE", RING_SRC, { approx: true }),
+      travel: fig([10.36, 27.55], "ESTIMATE", TRAVEL_SRC, { note: "out-and-back at €0.175/km" }),
+    },
   ],
 };
 
@@ -436,7 +511,7 @@ const out = [];
 out.push("# Murcia model — generated tables");
 out.push("");
 out.push(
-  "Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan.",
+  "Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan. Cash trough = lowest cash point to cover, including the Oct-2027 payment of the Jul–Sep IVA (a trough dated Oct-2027 is that payment).",
 );
 out.push("");
 out.push("## T0. Derived per-visit inputs");
@@ -543,7 +618,7 @@ for (const sk of Object.keys(SCEN)) {
   out.push("");
   out.push(
     table(
-      ["Year", "Visits/mo", "Pieces/mo", "Operators", "Utilisation %", "Gross", "Operator cost", "Machine", "Result", "Cash end", "Owner-state result", "Hire for next year"],
+      ["Year", "Visits/mo", "Pieces/mo", "Operators", "Utilisation %", "Gross", "Operator cost", "Machine", "Result", "Cash end", "Owner state holds", "Owner-state result", "Hire for next year"],
       lr.years.map((y) => [
         `Y${y.year}`,
         fmt(y.visits, 1),
@@ -555,14 +630,24 @@ for (const sk of Object.keys(SCEN)) {
         fmt(y.machine),
         fmt(y.result),
         fmt(y.cashEnd),
+        y.ownerStateHolds === null ? "—" : y.ownerStateHolds ? "yes" : "no",
         fmt(y.ownerStateResult),
         y.hireDecidedForNextYear ? "yes" : "no",
       ]),
     ),
   );
   out.push("");
+  const lapsed = lr.years
+    .filter((y) => y.ownerStateHolds === false && lr.ownerYear !== null && y.year > lr.ownerYear)
+    .map((y) => `Y${y.year}`);
   out.push(
-    `Founder→owner milestone (hired operators alone carry demand): ${lr.ownerYear === null ? "not within Y8" : `Y${lr.ownerYear}`}.`,
+    `Founder→owner milestone (hired operators alone carry demand), re-checked every year: ${
+      lr.ownerYear === null
+        ? "not within Y8"
+        : `first reached Y${lr.ownerYear}; holds in ${lr.ownerYears.map((y) => `Y${y}`).join(", ")}${
+            lapsed.length ? `; lapses in ${lapsed.join(", ")}` : ""
+          }`
+    }.`,
   );
   out.push("");
 }
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 60a0bfd..365aac3 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -133,7 +133,7 @@ case by someone who did the work, not as generated filler.
   label from the economic report line.
   Running the script twice must produce identical files. _Verify:_ `node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"`.
   Accept: Scenario: reproducible model — WHEN the script runs on a clean checkout THEN the tables and JSON are byte-identical to the committed ones (exit 0); every input row in `murcia-model.md` §1 has a label and a source file and section; the year-1 table starts at Oct-2026 and ends at Sep-2027.
-- [ ] **T9 — Model fix pass** (structural). In `murcia-model.mjs` and `murcia-model.md`,
+- [x] **T9 — Model fix pass** (structural). In `murcia-model.mjs` and `murcia-model.md`,
   close F-004 to F-008 at the lines the findings record names: (F-004) the cash trough
   per scenario includes the Oct-2027 payment of the Jul–Sep IVA, so it is the lowest
   cash point the founder must be able to cover; state it in §2; (F-005) §3 lists the
@@ -234,3 +234,4 @@ case by someone who did the work, not as generated filler.
 |---|---|---|---|---|---|---|---|
 | T1 | grep counts + numstat (structural) | docs | no package.json, no runner; baseline counts 0 / 0 (exit 1) | n/a (structural) | `grep -c "Addendum 2026-10-06"` → 2; `grep -c "business-report-murcia" README.md` → 2; numstat `20	0` | Triangulation skipped: structural docs task, verified by counts and 0-deletion numstat | none |
 | T2 | verify command + double-run sha256 (structural) | model script | no package.json, no runner; baseline verify `Error: Cannot find module '...\murcia-model.mjs'` (exit 1) | n/a (structural) | `node business/research/murcia-model.mjs && git diff --exit-code --stat -- …tables.md …data.json` → `exit 0` | Triangulation skipped: structural; outputs untracked so git diff is vacuous until commit — reproducibility shown by two runs with identical sha256 (tables `18129d61…`, json `88ad897d…`) | none |
+| T9 | verify command + double-run sha256 (structural) | model script | baseline verify on committed T2 outputs: empty `git status --short`, `exit 0` | n/a (structural) | verify → ` M …murcia-model-data.json` / ` M …murcia-model-tables.md` / `exit 0` (intended regeneration); A × conservador trough `−974 (Oct-2027)`, B × realista Y1 result `4,768` unchanged | Triangulation skipped: structural; two runs give identical sha256 (tables `257d0335…`, json `46c4e569…`) | none |
```
