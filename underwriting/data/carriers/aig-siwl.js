// AIG / Corebridge — transcribed from SimpliNow Legacy agent guide AGLC201192 REV0224. Medical rules come from the grid (decline = GI). Regenerate, don't hand-edit.
UW.addProduct({
 "id": "aig-siwl",
 "carrier": "AIG / Corebridge",
 "product": "SimpliNow Legacy (Max = Level / Legacy = Graded; else GI)",
 "type": "final_expense",
 "underwriting": "instant",
 "bestOutcome": "level",
 "guide": {
  "document": "SimpliNow Legacy Simplified Issue Whole Life agent guide",
  "revision": "AGLC201192 REV0224",
  "effective": "2024-02",
  "lastReviewed": "2026-10-10"
 },
 "issueAges": {
  "min": 50,
  "max": 80,
  "note": "Age last birthday",
  "source": "p. 6"
 },
 "faceAmount": {
  "min": 5000,
  "max": 35000,
  "bands": [
   {
    "min": 50,
    "max": 60,
    "face": 25000
   },
   {
    "min": 61,
    "max": 70,
    "face": 30000
   },
   {
    "min": 71,
    "max": 80,
    "face": 35000
   }
  ],
  "note": "Level (Max): $25k to age 60, $30k 61–70, $35k 71–80. Graded and GI: $25k. Limits include all existing AIG GIWL/SIWL coverage",
  "source": "p. 7, 9"
 },
 "tierLimits": {
  "source": "p. 7, 9",
  "level": {
   "name": "SimpliNow Legacy Max (Level)",
   "tobaccoAgeMax": 70,
   "fallback": "graded"
  },
  "graded": {
   "name": "SimpliNow Legacy (Graded)",
   "faceMax": 25000,
   "fallback": "gi"
  },
  "gi": {
   "name": "AIG Guaranteed Issue",
   "faceMax": 25000,
   "fallback": "decline"
  }
 },
 "statesNotAvailable": [
  "NY"
 ],
 "tobacco": {
  "note": "Tobacco rates. Level (Max) not available to tobacco users 71–80: Graded only",
  "source": "p. 7"
 },
 "build": {
  "rows": [
   {
    "h": 56,
    "min": 79,
    "max": {
     "level": 189,
     "graded": 203
    },
    "under": {
     "graded": 74
    }
   },
   {
    "h": 57,
    "min": 81,
    "max": {
     "level": 196,
     "graded": 210
    },
    "under": {
     "graded": 77
    }
   },
   {
    "h": 58,
    "min": 84,
    "max": {
     "level": 203,
     "graded": 217
    },
    "under": {
     "graded": 79
    }
   },
   {
    "h": 59,
    "min": 87,
    "max": {
     "level": 210,
     "graded": 225
    },
    "under": {
     "graded": 82
    }
   },
   {
    "h": 60,
    "min": 90,
    "max": {
     "level": 217,
     "graded": 232
    },
    "under": {
     "graded": 85
    }
   },
   {
    "h": 61,
    "min": 93,
    "max": {
     "level": 224,
     "graded": 240
    },
    "under": {
     "graded": 88
    }
   },
   {
    "h": 62,
    "min": 96,
    "max": {
     "level": 232,
     "graded": 248
    },
    "under": {
     "graded": 91
    }
   },
   {
    "h": 63,
    "min": 99,
    "max": {
     "level": 239,
     "graded": 256
    },
    "under": {
     "graded": 94
    }
   },
   {
    "h": 64,
    "min": 103,
    "max": {
     "level": 247,
     "graded": 265
    },
    "under": {
     "graded": 97
    }
   },
   {
    "h": 65,
    "min": 106,
    "max": {
     "level": 255,
     "graded": 273
    },
    "under": {
     "graded": 100
    }
   },
   {
    "h": 66,
    "min": 109,
    "max": {
     "level": 263,
     "graded": 281
    },
    "under": {
     "graded": 103
    }
   },
   {
    "h": 67,
    "min": 112,
    "max": {
     "level": 271,
     "graded": 290
    },
    "under": {
     "graded": 106
    }
   },
   {
    "h": 68,
    "min": 116,
    "max": {
     "level": 279,
     "graded": 299
    },
    "under": {
     "graded": 109
    }
   },
   {
    "h": 69,
    "min": 119,
    "max": {
     "level": 287,
     "graded": 307
    },
    "under": {
     "graded": 112
    }
   },
   {
    "h": 70,
    "min": 123,
    "max": {
     "level": 296,
     "graded": 316
    },
    "under": {
     "graded": 116
    }
   },
   {
    "h": 71,
    "min": 126,
    "max": {
     "level": 304,
     "graded": 326
    },
    "under": {
     "graded": 119
    }
   },
   {
    "h": 72,
    "min": 130,
    "max": {
     "level": 313,
     "graded": 335
    },
    "under": {
     "graded": 122
    }
   },
   {
    "h": 73,
    "min": 133,
    "max": {
     "level": 321,
     "graded": 344
    },
    "under": {
     "graded": 126
    }
   },
   {
    "h": 74,
    "min": 137,
    "max": {
     "level": 330,
     "graded": 354
    },
    "under": {
     "graded": 129
    }
   },
   {
    "h": 75,
    "min": 141,
    "max": {
     "level": 339,
     "graded": 363
    },
    "under": {
     "graded": 133
    }
   },
   {
    "h": 76,
    "min": 145,
    "max": {
     "level": 348,
     "graded": 373
    },
    "under": {
     "graded": 136
    }
   },
   {
    "h": 77,
    "min": 148,
    "max": {
     "level": 358,
     "graded": 383
    },
    "under": {
     "graded": 140
    }
   },
   {
    "h": 78,
    "min": 152,
    "max": {
     "level": 367,
     "graded": 393
    },
    "under": {
     "graded": 144
    }
   },
   {
    "h": 79,
    "min": 156,
    "max": {
     "level": 376,
     "graded": 403
    },
    "under": {
     "graded": 147
    }
   },
   {
    "h": 80,
    "min": 160,
    "max": {
     "level": 386,
     "graded": 413
    },
    "under": {
     "graded": 151
    }
   },
   {
    "h": 81,
    "min": 164,
    "max": {
     "level": 396,
     "graded": 424
    },
    "under": {
     "graded": 155
    }
   },
   {
    "h": 82,
    "min": 168,
    "max": {
     "level": 406,
     "graded": 434
    },
    "under": {
     "graded": 159
    }
   }
  ],
  "overweight": "gi",
  "underweight": "gi",
  "source": "p. 7",
  "note": "Level (Max) range is narrower than Graded; outside the Graded range = GI"
 },
 "notes": "100% instant decision. Knock-out questions and a second set of health questions are on the e-app (not printed in this guide); the medical rules come from your grid, where \"decline\" means the client goes to AIG Guaranteed Issue (no health questions, graded 2 yrs, ages 50–80, $25k max). If answers cannot be validated by the database check the client is declined to GI. Not available to foreign nationals. Replacements allowed on Level only.",
 "conditions": {},
 "medications": {}
});
