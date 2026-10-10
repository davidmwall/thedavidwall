// AIG / Corebridge — transcribed from SimpliNow Legacy agent guide AGLC201192 REV0224. Every guide "Decline" = AIG Guaranteed Issue. Regenerate, don't hand-edit.
UW.addProduct({
 "id": "aig-siwl",
 "carrier": "AIG / Corebridge",
 "product": "SimpliNow Legacy (Max = Level / Legacy = Graded; else GI)",
 "type": "final_expense",
 "underwriting": "instant",
 "bestOutcome": "level",
 "guide": {
  "document": "SimpliNow Legacy Underwriting Guide (medical) + product guide (ages, face, build)",
  "revision": "AGLC201453 REV0424 / AGLC201192 REV0224",
  "effective": "2024-04",
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
 "notes": "100% instant decision, no underwriter. Every guide \"Decline\" is shown as AIG Guaranteed Issue (no health questions, graded 2 yrs, ages 50–80, $25k max), per the agent. Time frames are lookbacks: a condition older than its window is not asked. Combinations of conditions can be worse than listed; multiple medications/conditions (e.g. diabetes on Metformin and Jardiance; depression on high-dose Abilify, Lamictal and Celexa; cerebrovascular + PAD on aspirin and Pletal) = Decline (= GI). Many cancer drugs also decline. U.S. citizens and green card holders only. Replacements allowed on Level only.",
 "conditions": {
  "alzheimers_dementia": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4, 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "mental_incapacity": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4, 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "rheumatoid_arthritis": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Level"
  },
  "ra_mild": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Level"
  },
  "ra_severe": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Level"
  },
  "psoriatic_arthritis": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Level"
  },
  "mds": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "bone_marrow_transplant": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "aneurysm_cerebral_corrected": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 4",
   "note": "Brain aneurysm repaired by surgery: last 6 months GI, last 24 months Level"
  },
  "aneurysm_cerebral_uncorrected": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "withinYears": 2,
     "outcome": "graded"
    }
   ],
   "source": "p. 4",
   "note": "Brain aneurysm without surgery: last 6 months GI, last 24 months Graded"
  },
  "huntingtons": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "als": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "ms": {
   "rules": [
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 4",
   "note": "Ever: Graded"
  },
  "parkinsons": {
   "rules": [
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 4",
   "note": "Ever: Graded"
  },
  "cancer_bladder": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Graded"
  },
  "cancer_bone": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 4",
   "note": "Last 48 months: Graded"
  },
  "cancer_breast": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_cervical": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_colorectal": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_endometrial": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_kidney": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "melanoma": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_prostate": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_testicular": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_thyroid": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "level"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "Stage II",
     "withinYears": 4
    }
   ],
   "source": "p. 4-5",
   "note": "Stage I last 48 months: Level; Stage II last 48 months: Graded"
  },
  "cancer_brain": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_carcinoid": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_esophageal": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_head_neck": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_leukemia": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_liver": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_lung": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_lymphoma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "hodgkins": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_myeloma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_ovarian": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_pancreas": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_sarcoma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_small_intestine": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer_stomach": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 4-5",
   "note": "Last 24 months: Decline (= GI). Not asked after 24 months"
  },
  "cancer": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 5",
   "note": "Other cancer not listed: last 48 months Graded"
  },
  "cancer_metastatic": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 4",
   "note": "Metastatic, or recurrent cancer of the same type (Stage III/IV), ever: Guide says Decline = AIG Guaranteed Issue"
  },
  "cancer_active": {
   "rules": [
    {
     "outcome": "graded"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "brain, carcinoid, esophageal, head/neck, leukemia, liver, lung, lymphoma, myeloma, ovarian, pancreas, sarcoma, small intestine or stomach"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "Stage III/IV"
    }
   ],
   "source": "p. 4-5",
   "note": "Add the cancer type for an exact answer"
  },
  "cancer_untreated": {
   "rules": [
    {
     "outcome": "graded"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "brain, carcinoid, esophageal, head/neck, leukemia, liver, lung, lymphoma, myeloma, ovarian, pancreas, sarcoma, small intestine or stomach"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "Stage III/IV"
    }
   ],
   "source": "p. 4-5",
   "note": "Add the cancer type for an exact answer"
  },
  "scleroderma": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 5"
  },
  "prior_decline": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "gi"
    }
   ],
   "source": "p. 5",
   "note": "Declined for life insurance in the last 12 months"
  },
  "amputation_disease": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "if due to diabetic complications"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5"
  },
  "diabetes_oral": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "cad",
      "heart_attack",
      "heart_attacks_multiple",
      "heart_stent",
      "heart_bypass",
      "cardiac_procedure",
      "angina",
      "heart_blockage"
     ],
     "note": "diabetes with stroke or coronary disease, ever"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "A1C 10+"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "A1C 8.7–9.9"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "A1C 8.6 or less: Level without insulin, Graded with insulin; 8.7–9.9 Graded; 10+ Decline (= GI). Amputation from diabetes, or hospitalized for diabetes in the last 24 months: GI"
  },
  "diabetes_uncomplicated": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "cad",
      "heart_attack",
      "heart_attacks_multiple",
      "heart_stent",
      "heart_bypass",
      "cardiac_procedure",
      "angina",
      "heart_blockage"
     ],
     "note": "diabetes with stroke or coronary disease, ever"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "A1C 10+"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "A1C 8.7–9.9"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "A1C 8.6 or less: Level without insulin, Graded with insulin; 8.7–9.9 Graded; 10+ Decline (= GI). Amputation from diabetes, or hospitalized for diabetes in the last 24 months: GI"
  },
  "diabetes_insulin": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "cad",
      "heart_attack",
      "heart_attacks_multiple",
      "heart_stent",
      "heart_bypass",
      "cardiac_procedure",
      "angina",
      "heart_blockage"
     ],
     "note": "diabetes with stroke or coronary disease, ever"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "A1C 10+"
    },
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 5",
   "note": "A1C 8.6 or less: Level without insulin, Graded with insulin; 8.7–9.9 Graded; 10+ Decline (= GI). Amputation from diabetes, or hospitalized for diabetes in the last 24 months: GI"
  },
  "diabetes_complications": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "cad",
      "heart_attack",
      "heart_attacks_multiple",
      "heart_stent",
      "heart_bypass",
      "cardiac_procedure",
      "angina",
      "heart_blockage"
     ],
     "note": "diabetes with stroke or coronary disease, ever"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "A1C 10+, diabetic amputation, or hospitalized for diabetes in 24 months"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "A1C 8.7–9.9 or on insulin"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "A1C 8.6 or less: Level without insulin, Graded with insulin; 8.7–9.9 Graded; 10+ Decline (= GI). Amputation from diabetes, or hospitalized for diabetes in the last 24 months: GI"
  },
  "diabetic_coma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5",
   "note": "Hospitalized due to diabetes in the last 24 months"
  },
  "illegal_drugs": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5",
   "note": "Narcotics without a prescription, last 24 months"
  },
  "drug_abuse": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "narcotics without a prescription (amphetamines, hallucinogens, heroin, cocaine)",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "graded"
    }
   ],
   "source": "p. 5",
   "note": "Substance abuse last 24 months: Graded"
  },
  "alcohol_abuse": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "graded"
    }
   ],
   "source": "p. 5",
   "note": "Substance abuse last 24 months: Graded"
  },
  "dui": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5"
  },
  "dui_multiple": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5"
  },
  "license_suspended_dui": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5"
  },
  "felony": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "gi"
    }
   ],
   "source": "p. 5"
  },
  "incarcerated": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 5",
   "note": "Currently"
  },
  "angina": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "Angina treated with medication: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "heart_stent": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "CAD with angioplasty/stent: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "cardiac_procedure": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "CAD with angioplasty/stent: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "heart_bypass": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "CAD with bypass: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "heart_attack": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "Heart attack: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "heart_attacks_multiple": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    },
    {
     "outcome": "graded",
     "tobacco": "yes",
     "withinYears": 2
    },
    {
     "withinYears": 2,
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "Heart attack: last 6 months GI; last 24 months Level non-tobacco / Graded tobacco"
  },
  "afib": {
   "rules": [
    {
     "outcome": "graded",
     "conditional": true,
     "note": "chronic AFib diagnosed in the last 24 months",
     "withinYears": 2
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "not on a daily blood thinner"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "Chronic AFib diagnosed in the last 24 months: Graded. Otherwise: on a daily blood thinner (Xarelto, Eliquis, Pradaxa, Coumadin) = Level; NOT on one = Graded (as written)"
  },
  "arrhythmia": {
   "rules": [
    {
     "outcome": "graded",
     "conditional": true,
     "note": "chronic AFib diagnosed in the last 24 months",
     "withinYears": 2
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "not on a daily blood thinner"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 5",
   "note": "Chronic AFib diagnosed in the last 24 months: Graded. Otherwise: on a daily blood thinner (Xarelto, Eliquis, Pradaxa, Coumadin) = Level; NOT on one = Graded (as written)"
  },
  "tia_multiple": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Recurrent TIAs, ever"
  },
  "stroke": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "gi"
    },
    {
     "withinYears": 2,
     "outcome": "graded"
    }
   ],
   "source": "p. 6"
  },
  "tia": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "gi"
    }
   ],
   "source": "p. 6"
  },
  "hiv_aids": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "kidney_failure": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Advanced or end-stage renal disease or needing dialysis, ever"
  },
  "dialysis": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Advanced or end-stage renal disease or needing dialysis, ever"
  },
  "kidney_disease_advanced": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Advanced or end-stage renal disease or needing dialysis, ever"
  },
  "kidney_disease": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "Chronic kidney disease / insufficiency: last 48 months Graded"
  },
  "kidney_disease_early": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "Chronic kidney disease / insufficiency: last 48 months Graded"
  },
  "kidney_disease_stage3": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "Chronic kidney disease / insufficiency: last 48 months Graded"
  },
  "hepatitis_b": {
   "rules": [
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "Ever: Graded"
  },
  "cirrhosis": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "cirrhosis_early": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "cirrhosis_advanced": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "copd": {
   "rules": [
    {
     "outcome": "gi",
     "tobacco": "yes"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "hospitalized more than once in the past 24 months"
    },
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "COPD: tobacco user GI; hospitalized 2+ times in 24 months GI; otherwise Graded"
  },
  "chronic_bronchitis": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "hospitalized more than once in the past 24 months"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "Guide lists only the hospitalization rule for these (COPD itself is Graded)"
  },
  "emphysema": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "hospitalized more than once in the past 24 months"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 6",
   "note": "Guide lists only the hospitalization rule for these (COPD itself is Graded)"
  },
  "lupus": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6"
  },
  "bipolar": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6"
  },
  "schizophrenia": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "hospitalized in the last 36 months",
     "withinYears": 3
    },
    {
     "outcome": "graded"
    }
   ],
   "source": "p. 6",
   "note": "Ever: Graded; hospitalized in the last 36 months: GI"
  },
  "psych_hospitalization": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "psychotic event or schizophrenia",
     "withinYears": 3
    }
   ],
   "source": "p. 6",
   "note": "Hospitalized for a psychotic event or schizophrenia in the last 36 months: GI"
  },
  "suicide_attempt": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "dermatomyositis": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6"
  },
  "polymyositis": {
   "rules": [
    {
     "withinYears": 4,
     "outcome": "graded"
    }
   ],
   "source": "p. 6"
  },
  "organ_transplant": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "kidney_transplant": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 6",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "unexplained_weight_loss": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "graded"
    }
   ],
   "source": "p. 7"
  },
  "adl_assistance": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "bedridden": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "hospitalized_now": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "wheelchair": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "wheelchair_confined": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "paraplegia": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "quadriplegia": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently: Decline (= GI)"
  },
  "home_health_care": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently, or advised to: Decline (= GI)"
  },
  "hospice": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently, or advised to: Decline (= GI)"
  },
  "nursing_home": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently, or advised to: Decline (= GI)"
  },
  "skilled_care_advised": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Currently, or advised to: Decline (= GI)"
  },
  "oxygen": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Requires oxygen currently (other than for sleep apnea)"
  },
  "sleep_apnea_oxygen": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 7",
   "note": "Oxygen for sleep apnea is excluded from the oxygen question"
  },
  "sickle_cell": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  },
  "terminal_illness": {
   "rules": [
    {
     "outcome": "gi"
    }
   ],
   "source": "p. 7",
   "note": "Guide says Decline = AIG Guaranteed Issue"
  }
 },
 "medications": {
  "plavix": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "chf",
      "heart_failure_other"
     ],
     "note": "with stroke or heart failure"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "if heart attack / CAD surgery very recent"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Decline (= GI) if heart attack / CAD surgery very recent, or with stroke or heart failure"
  },
  "brilinta": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "chf",
      "heart_failure_other"
     ],
     "note": "with stroke or heart failure"
    },
    {
     "outcome": "gi",
     "conditional": true,
     "note": "if heart attack / CAD surgery very recent"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Decline (= GI) if heart attack / CAD surgery very recent, or with stroke or heart failure"
  },
  "nitroglycerin": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "chf",
      "heart_failure_other"
     ],
     "note": "with stroke or heart failure"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Ranexa, Imdur, ISMO, Monoket, Nitrostat: Decline (= GI) with a history of stroke or heart failure"
  },
  "rx_ismo": {
   "rules": [
    {
     "outcome": "gi",
     "withConditions": [
      "stroke",
      "chf",
      "heart_failure_other"
     ],
     "note": "with stroke or heart failure"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Ranexa, Imdur, ISMO, Monoket, Nitrostat: Decline (= GI) with a history of stroke or heart failure"
  },
  "serious_copd_inhalers": {
   "rules": [
    {
     "outcome": "gi",
     "tobacco": "yes"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Daliresp, Trelegy, Breo Ellipta: Decline (= GI) with tobacco use"
  },
  "rx_breo_ellipta": {
   "rules": [
    {
     "outcome": "gi",
     "tobacco": "yes"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 10",
   "note": "Daliresp, Trelegy, Breo Ellipta: Decline (= GI) with tobacco use"
  },
  "entresto": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "chf_meds": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_corlanor": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_marinol": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_ingrezza": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_tyvaso": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_uptravi": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_ventavis": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_flolan": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_ofev": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_esbriet": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "rx_nuplazid": {
   "outcome": "gi",
   "source": "p. 10",
   "note": "Decline (= GI)"
  },
  "donepezil": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "suboxone": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "antabuse": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_campral": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_duragesic": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_fentanyl_citrate": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_butrans": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_ms_contin": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_methadose": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Decline (= GI)"
  },
  "rx_lupron": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "Lupron in males for prostate cancer: Decline (= GI)"
  },
  "rx_depo_provera": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "in males for prostate cancer"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 11"
  },
  "rx_epogen": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For low blood counts: Decline (= GI)"
  },
  "rx_neupogen": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For low blood counts: Decline (= GI)"
  },
  "rx_promacta": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For low blood counts: Decline (= GI)"
  },
  "rx_megestrol": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For cachexia: Decline (= GI)"
  },
  "kidney_failure_meds": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For complications of chronic kidney disease (calcitriol, sevelamer, Renvela, Zemplar): Decline (= GI)"
  },
  "kidney_binders": {
   "outcome": "gi",
   "source": "p. 11",
   "note": "For complications of chronic kidney disease (calcitriol, sevelamer, Renvela, Zemplar): Decline (= GI)"
  },
  "opioids": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "long-term daily potent opioids (frequent high-dose Percocet, OxyContin, oxycodone)"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 11"
  },
  "rx_oxycontin": {
   "rules": [
    {
     "outcome": "gi",
     "conditional": true,
     "note": "long-term daily potent opioids (frequent high-dose Percocet, OxyContin, oxycodone)"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 11"
  }
 }
});
