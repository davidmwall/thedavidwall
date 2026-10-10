// American Amicable — transcribed from the Senior Choice Agent Guide 3079(7/20). Regenerate, don't hand-edit.
UW.addProduct({
 "id": "amam-senior-choice",
 "carrier": "American Amicable",
 "product": "Senior Choice (Immediate / Graded / Return of Premium)",
 "type": "final_expense",
 "underwriting": "simplified",
 "bestOutcome": "level",
 "guide": {
  "document": "American Amicable Senior Choice Agent Guide (underwriting guidelines, Rx reference, impairment guide)",
  "revision": "3079(7/20) CN14-001",
  "effective": "2020-07",
  "lastReviewed": "2026-10-10"
 },
 "issueAges": {
  "min": 50,
  "max": 85,
  "note": "Age last birthday. MO: Graded and ROP 50–75; NJ: Graded and ROP 50–76",
  "source": "p. 5, 11"
 },
 "faceAmount": {
  "min": 2500,
  "max": 35000,
  "bands": [
   {
    "min": 50,
    "max": 75,
    "face": 35000
   },
   {
    "min": 76,
    "max": 85,
    "face": 20000
   }
  ],
  "note": "Immediate $35k to 75, $20k 76–85; Graded and ROP $20k; minimum $5,000 in WA",
  "source": "p. 5"
 },
 "tierLimits": {
  "source": "p. 5",
  "graded": {
   "name": "Graded",
   "faceMax": 20000,
   "fallback": "modified"
  },
  "modified": {
   "name": "Return of Premium",
   "faceMax": 20000,
   "fallback": "decline"
  }
 },
 "tobacco": {
  "note": "Tobacco rates (occasional cigar or pipe excluded)",
  "source": "p. 7"
 },
 "build": {
  "rows": [
   {
    "h": 53,
    "min": 82,
    "max": {
     "level": 173,
     "graded": 180,
     "modified": 190
    },
    "under": {
     "modified": 77
    },
    "note": "not programmed in the mobile app: refers to Home Office"
   },
   {
    "h": 54,
    "min": 84,
    "max": {
     "level": 180,
     "graded": 188,
     "modified": 198
    },
    "under": {
     "modified": 79
    },
    "note": "not programmed in the mobile app: refers to Home Office"
   },
   {
    "h": 55,
    "min": 86,
    "max": {
     "level": 187,
     "graded": 196,
     "modified": 206
    },
    "under": {
     "modified": 81
    },
    "note": "not programmed in the mobile app: refers to Home Office"
   },
   {
    "h": 56,
    "min": 88,
    "max": {
     "level": 197,
     "graded": 204,
     "modified": 214
    },
    "under": {
     "modified": 83
    }
   },
   {
    "h": 57,
    "min": 90,
    "max": {
     "level": 204,
     "graded": 212,
     "modified": 222
    },
    "under": {
     "modified": 85
    }
   },
   {
    "h": 58,
    "min": 92,
    "max": {
     "level": 211,
     "graded": 220,
     "modified": 230
    },
    "under": {
     "modified": 87
    }
   },
   {
    "h": 59,
    "min": 94,
    "max": {
     "level": 218,
     "graded": 228,
     "modified": 238
    },
    "under": {
     "modified": 89
    }
   },
   {
    "h": 60,
    "min": 96,
    "max": {
     "level": 225,
     "graded": 236,
     "modified": 246
    },
    "under": {
     "modified": 91
    }
   },
   {
    "h": 61,
    "min": 99,
    "max": {
     "level": 233,
     "graded": 244,
     "modified": 254
    },
    "under": {
     "modified": 94
    }
   },
   {
    "h": 62,
    "min": 101,
    "max": {
     "level": 241,
     "graded": 252,
     "modified": 262
    },
    "under": {
     "modified": 96
    }
   },
   {
    "h": 63,
    "min": 105,
    "max": {
     "level": 248,
     "graded": 260,
     "modified": 271
    },
    "under": {
     "modified": 100
    }
   },
   {
    "h": 64,
    "min": 107,
    "max": {
     "level": 256,
     "graded": 268,
     "modified": 280
    },
    "under": {
     "modified": 102
    }
   },
   {
    "h": 65,
    "min": 110,
    "max": {
     "level": 264,
     "graded": 276,
     "modified": 288
    },
    "under": {
     "modified": 105
    }
   },
   {
    "h": 66,
    "min": 112,
    "max": {
     "level": 273,
     "graded": 285,
     "modified": 297
    },
    "under": {
     "modified": 107
    }
   },
   {
    "h": 67,
    "min": 116,
    "max": {
     "level": 281,
     "graded": 294,
     "modified": 306
    },
    "under": {
     "modified": 111
    }
   },
   {
    "h": 68,
    "min": 119,
    "max": {
     "level": 289,
     "graded": 303,
     "modified": 316
    },
    "under": {
     "modified": 114
    }
   },
   {
    "h": 69,
    "min": 123,
    "max": {
     "level": 298,
     "graded": 312,
     "modified": 325
    },
    "under": {
     "modified": 118
    }
   },
   {
    "h": 70,
    "min": 126,
    "max": {
     "level": 307,
     "graded": 321,
     "modified": 335
    },
    "under": {
     "modified": 121
    }
   },
   {
    "h": 71,
    "min": 131,
    "max": {
     "level": 315,
     "graded": 330,
     "modified": 344
    },
    "under": {
     "modified": 126
    }
   },
   {
    "h": 72,
    "min": 135,
    "max": {
     "level": 324,
     "graded": 339,
     "modified": 354
    },
    "under": {
     "modified": 130
    }
   },
   {
    "h": 73,
    "min": 139,
    "max": {
     "level": 334,
     "graded": 349,
     "modified": 364
    },
    "under": {
     "modified": 134
    }
   },
   {
    "h": 74,
    "min": 142,
    "max": {
     "level": 343,
     "graded": 359,
     "modified": 374
    },
    "under": {
     "modified": 137
    }
   },
   {
    "h": 75,
    "min": 146,
    "max": {
     "level": 352,
     "graded": 368,
     "modified": 384
    },
    "under": {
     "modified": 141
    }
   },
   {
    "h": 76,
    "min": 149,
    "max": {
     "level": 361,
     "graded": 378,
     "modified": 394
    },
    "under": {
     "modified": 144
    }
   },
   {
    "h": 77,
    "min": 152,
    "max": {
     "level": 370,
     "graded": 388,
     "modified": 404
    },
    "under": {
     "modified": 147
    }
   },
   {
    "h": 78,
    "min": 156,
    "max": {
     "level": 379,
     "graded": 398,
     "modified": 414
    },
    "under": {
     "modified": 151
    }
   },
   {
    "h": 79,
    "min": 160,
    "max": {
     "level": 388,
     "graded": 408,
     "modified": 424
    },
    "under": {
     "modified": 155
    }
   },
   {
    "h": 80,
    "min": 164,
    "max": {
     "level": 397,
     "graded": 418,
     "modified": 434
    },
    "under": {
     "modified": 159
    }
   },
   {
    "h": 81,
    "min": 168,
    "max": {
     "level": 406,
     "graded": 428,
     "modified": 440
    },
    "under": {
     "modified": 162
    }
   }
  ],
  "source": "p. 14",
  "note": "Over the ROP max or under the ROP min = no coverage"
 },
 "notes": "Questions 1–3 yes = no coverage; 4–7 = Return of Premium (2-yr graded, returns premium + 10%); 8 = Graded (30% yr 1, 70% yr 2). Rx guide: \"Rx Fill Within\" = time since last fill, or since first fill where noted (heart meds). Not processed if 2 policies lapsed/cancelled in 12 months or 3+ in 5 years. State availability: see the State Approval Grid.",
 "conditions": {
  "adl_assistance": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "bedridden": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "home_health_care": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "hospice": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "hospitalized_now": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "nursing_home": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "wheelchair": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "wheelchair_confined": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "Currently: No Coverage (questions 1–3)"
  },
  "hiv_aids": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "alzheimers_dementia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "amputation_disease": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "als": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "chf": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "heart_failure_other": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "dialysis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "liver_failure": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "mental_incapacity": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "organ_transplant": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "kidney_transplant": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "organ_transplant_pending": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "terminal_illness": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34-35",
   "note": "No Coverage (questions 1–3)"
  },
  "cancer_active": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34",
   "note": "Currently have cancer: No Coverage (questions 1–3)"
  },
  "cancer_untreated": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 34",
   "note": "Currently have cancer: No Coverage (questions 1–3)"
  },
  "alcohol_abuse": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Abuse, treatment or advised to stop within 2 years: Return of Premium"
  },
  "drug_abuse": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Abuse, treatment or advised to stop within 2 years: Return of Premium"
  },
  "illegal_drugs": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Abuse, treatment or advised to stop within 2 years: Return of Premium"
  },
  "aneurysm": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "aneurysm_aaa_uncorrected": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "aneurysm_aaa_corrected": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "aneurysm_cerebral_uncorrected": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "aneurysm_cerebral_corrected": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "aneurysm_thoracic_corrected": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34"
  },
  "angina": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_attack": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_attacks_multiple": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_bypass": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_stent": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "cardiac_procedure": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_surgery": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_valve": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "heart_valve_replacement": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "circulatory_surgery": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "stroke": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "tia": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium; within 3 years: Graded; after 3 years: Immediate"
  },
  "cancer": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_breast": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_testicular": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_cervical": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_prostate": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_thyroid": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_bladder": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_kidney": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_colorectal": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "melanoma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "hodgkins": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_bone": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_brain": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_carcinoid": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_endometrial": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_esophageal": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_head_neck": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_leukemia": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_liver": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_lung": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_lymphoma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_myeloma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_ovarian": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_pancreas": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_sarcoma": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_small_intestine": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_stomach": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "withinYears": 3,
     "outcome": "modified",
     "conditional": true,
     "note": "more than one occurrence in a lifetime (any time)"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "cancer_metastatic": {
   "rules": [
    {
     "outcome": "modified",
     "note": "more than one occurrence"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if currently has cancer"
    }
   ],
   "source": "p. 34",
   "note": "Cancer (excluding basal cell skin cancer): diagnosed/treated/medication within 2 yrs ROP, within 3 yrs Graded. More than one occurrence in a lifetime: ROP"
  },
  "skin_cancer_basal": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 34",
   "note": "Basal cell skin cancer is excluded"
  },
  "cardiomyopathy": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "kidney_disease": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "kidney_disease_early": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "kidney_disease_stage3": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "kidney_disease_advanced": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "kidney_failure": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "polycystic_kidney": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "diabetes_complications": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "diabetic_coma": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Ever (questions 4–5, 7a): Return of Premium"
  },
  "hepatitis": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34",
   "note": "Chronic hepatitis within 2 years: Return of Premium"
  },
  "hepatitis_b": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34",
   "note": "Chronic hepatitis within 2 years: Return of Premium"
  },
  "hepatitis_c": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "cirrhosis": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "cirrhosis_early": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "cirrhosis_advanced": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "copd": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "emphysema": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "chronic_bronchitis": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 34-35"
  },
  "pancreatitis": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium (chronic pancreatitis / systemic lupus)"
  },
  "lupus": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Within 2 years: Return of Premium (chronic pancreatitis / systemic lupus)"
  },
  "defibrillator": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Inserted within 2 years: Return of Premium"
  },
  "pacemaker": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified"
    }
   ],
   "source": "p. 34-35",
   "note": "Inserted within 2 years: Return of Premium"
  },
  "diabetes_insulin": {
   "rules": [
    {
     "dxAgeBelow": 50,
     "outcome": "modified",
     "note": "insulin started before age 50 (enter years since insulin started)"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 34",
   "note": "Insulin shots before age 50, insulin shock, diabetic coma, retinopathy, nephropathy or neuropathy: Return of Premium (question 4)"
  },
  "diabetes_oral": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 34",
   "note": "Diabetes without complications: Immediate"
  },
  "diabetes_uncomplicated": {
   "rules": [
    {
     "outcome": "level"
    }
   ],
   "source": "p. 34",
   "note": "Diabetes without complications: Immediate"
  },
  "tests_pending": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 35",
   "note": "Recommended in the past 2 years and not completed or results pending: Return of Premium"
  },
  "surgery_pending": {
   "rules": [
    {
     "outcome": "modified"
    }
   ],
   "source": "p. 35",
   "note": "Recommended in the past 2 years and not completed or results pending: Return of Premium"
  },
  "liver_disease": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "ms": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "muscular_dystrophy": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "paralysis": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "paraplegia": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "quadriplegia": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "parkinsons": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "seizures": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "ulcerative_colitis": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded"
    }
   ],
   "source": "p. 35",
   "note": "Diagnosed, treated or hospitalized within 3 years: Graded"
  },
  "oxygen": {
   "rules": [
    {
     "outcome": "decline",
     "note": "currently uses oxygen"
    }
   ],
   "source": "p. 35",
   "note": "Currently using oxygen: No Coverage. Used in the past 2 years but not now: Return of Premium"
  }
 },
 "medications": {
  "antipsychotic": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 18 Rx guide (Abilify); p. 23 Rx guide (Haloperidol); p. 30 Rx guide (Risperdal); p. 30 Rx guide (Risperidone); p. 30 Rx guide (Seroquel); p. 33 Rx guide (Zyprexa)"
  },
  "rx_accupril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Accupril)"
  },
  "rx_accuretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Accuretic)"
  },
  "rx_acebutolol_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Acebutolol HCL)"
  },
  "rx_aceon": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Aceon)"
  },
  "rx_actoplus": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 18 Rx guide (Actoplus)"
  },
  "rx_actos": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 18 Rx guide (Actos)"
  },
  "rx_advair": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 18 Rx guide (Advair)",
   "note": "time = since the last fill"
  },
  "rx_aggrenox": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Stroke / TIA"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 18 Rx guide (Aggrenox)",
   "note": "time = since the last fill"
  },
  "albuterol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 18 Rx guide (Albuterol); p. 29 Rx guide (Proventil); p. 33 Rx guide (Ventolin)",
   "note": "time = since the last fill"
  },
  "rx_aldactazide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Aldactazide)"
  },
  "rx_aldactone": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Aldactone)"
  },
  "rx_allopurinol": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Gout"
    }
   ],
   "source": "p. 18 Rx guide (Allopurinol)"
  },
  "rx_altace": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Altace)"
  },
  "rx_amantadine_hcl": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 18 Rx guide (Amantadine HCL)"
  },
  "glipizide": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 18 Rx guide (Amaryl); p. 23 Rx guide (Glipizide); p. 23 Rx guide (Glyburide)"
  },
  "rx_ambisome": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 18 Rx guide (Ambisome)"
  },
  "rx_amiloride_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Amiloride HCL)"
  },
  "rx_amlodipine_besylate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 18 Rx guide (Amlodipine Besylate/Benazepril)"
  },
  "rx_amyl_nitrate": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Amyl Nitrate)",
   "note": "time = since the last fill"
  },
  "antabuse": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 19 Rx guide (Antabuse); p. 22 Rx guide (Disulfiram)",
   "note": "time = since the last fill"
  },
  "rx_apokyn": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 19 Rx guide (Apokyn)"
  },
  "rx_apresoline": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Apresoline)"
  },
  "rx_aptivus": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 19 Rx guide (Aptivus)"
  },
  "rx_aranesp": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 19 Rx guide (Aranesp)"
  },
  "donepezil": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s / Dementia"
    }
   ],
   "source": "p. 19 Rx guide (Aricept); p. 23 Rx guide (Exelon); p. 27 Rx guide (Namenda); p. 29 Rx guide (Razadyne)"
  },
  "rx_arimidex": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 19 Rx guide (Arimidex)",
   "note": "time = since the last fill"
  },
  "rx_atacand": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Atacand)"
  },
  "rx_atamet": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 19 Rx guide (Atamet)"
  },
  "rx_atenolol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Atenolol)"
  },
  "rx_atgam": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 19 Rx guide (Atgam)"
  },
  "rx_atripla": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 19 Rx guide (Atripla)"
  },
  "rx_atrovent": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Allergies"
    }
   ],
   "source": "p. 19 Rx guide (Atrovent/Atrovent HFA)"
  },
  "rx_atrovent_nasal": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for COPD"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 19 Rx guide (Atrovent (Nasal))",
   "note": "time = since the last fill"
  },
  "rx_avalide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Avalide)"
  },
  "rx_avandia": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 19 Rx guide (Avandia)"
  },
  "rx_avapro": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 19 Rx guide (Avapro)"
  },
  "rx_avonex": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Multiple Sclerosis"
    }
   ],
   "source": "p. 19 Rx guide (Avonex)"
  },
  "rx_azasan": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Rheumatoid Arthritis"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Organ / Tissue Transplant"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Systemic Lupus"
    }
   ],
   "source": "p. 19 Rx guide (Azasan)"
  },
  "rx_azathioprine": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Rheumatoid Arthritis"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Organ / Tissue Transplant"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Systemic Lupus"
    }
   ],
   "source": "p. 19 Rx guide (Azathioprine)"
  },
  "rx_azilect": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 19 Rx guide (Azilect)"
  },
  "rx_azmacort": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 19 Rx guide (Azmacort)",
   "note": "time = since the last fill"
  },
  "rx_azor": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Azor)"
  },
  "rx_baclofen": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Multiple Sclerosis"
    }
   ],
   "source": "p. 20 Rx guide (Baclofen)"
  },
  "rx_baraclude": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 20 Rx guide (Baraclude)",
   "note": "time = since the last fill"
  },
  "rx_benazepril_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Benazepril HCL)"
  },
  "rx_benicar": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Benicar)"
  },
  "lupus_meds": {
   "rules": [
    {
     "outcome": "modified",
     "note": "taken for Systemic Lupus"
    }
   ],
   "source": "p. 20 Rx guide (Benlysta)"
  },
  "rx_benztropine_mesylate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 20 Rx guide (Benztropine Mesylate)"
  },
  "rx_betapace": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Heart Arrhythmia"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Betapace)"
  },
  "rx_betaseron": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Multiple Sclerosis"
    }
   ],
   "source": "p. 20 Rx guide (Betaseron)"
  },
  "rx_betaxolol_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Betaxolol HCL)"
  },
  "chf_meds": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (BiDil); p. 24 Rx guide (Inspra)"
  },
  "rx_bisoprolol_fumarate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Bisoprolol Fumarate)"
  },
  "rx_bromocriptine_mesylate": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 20 Rx guide (Bromocriptine Mesylate)"
  },
  "rx_bumetadine": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Bumetadine)"
  },
  "furosemide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Bumex); p. 23 Rx guide (Furosemide); p. 25 Rx guide (Lasix); p. 32 Rx guide (Torsemide)"
  },
  "rx_buprenex": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 20 Rx guide (Buprenex)",
   "note": "time = since the last fill"
  },
  "rx_bystolic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Bystolic)"
  },
  "kidney_binders": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 20 Rx guide (Calcium Acetate); p. 29 Rx guide (Phoslo); p. 30 Rx guide (Renvela)"
  },
  "rx_campath": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 20 Rx guide (Campath)",
   "note": "time = since the last fill"
  },
  "rx_campral": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 20 Rx guide (Campral)",
   "note": "time = since the last fill"
  },
  "rx_capoten": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Capoten); p. 20 Rx guide (Captopril)"
  },
  "rx_capozide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 20 Rx guide (Capozide)"
  },
  "rx_carbamazepine": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 20 Rx guide (Carbamazepine)",
   "note": "time = since the last fill"
  },
  "rx_carbatrol": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 21 Rx guide (Carbatrol)",
   "note": "time = since the last fill"
  },
  "rx_carbidopa": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 21 Rx guide (Carbidopa)"
  },
  "lisinopril": {
   "rules": [
    {
     "outcome": "level",
     "note": "mildest use across the brands in this entry"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 21 Rx guide (Carvedilol); p. 23 Rx guide (HCTZ); p. 23 Rx guide (HCTZ/Triamterene); p. 26 Rx guide (Lisinopril)",
   "note": "brands in this entry differ on the chart; check the specific drug"
  },
  "rx_casodex": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 21 Rx guide (Casodex)",
   "note": "time = since the last fill"
  },
  "rx_celebrex": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arthritis"
    }
   ],
   "source": "p. 21 Rx guide (Celebrex)"
  },
  "rx_cellcept": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 21 Rx guide (Cellcept)"
  },
  "plavix": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Stroke/TIA/Heart Attack"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 21 Rx guide (Clopidogrel); p. 29 Rx guide (Plavix)",
   "note": "time = since the drug was FIRST prescribed"
  },
  "rx_cogentin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 21 Rx guide (Cogentin)"
  },
  "rx_cognex": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s/Dementia"
    }
   ],
   "source": "p. 21 Rx guide (Cognex)"
  },
  "rx_combivent": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for COPD"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 21 Rx guide (Combivent)",
   "note": "time = since the last fill"
  },
  "rx_combivir": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 21 Rx guide (Combivir)"
  },
  "rx_complera": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 21 Rx guide (Complera)"
  },
  "rx_copaxone": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Multiple Sclerosis"
    }
   ],
   "source": "p. 21 Rx guide (Copaxone)"
  },
  "rx_copegus": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis C"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 21 Rx guide (Copegus)",
   "note": "time = since the last fill"
  },
  "rx_cordarone": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arrhythmia"
    }
   ],
   "source": "p. 21 Rx guide (Cordarone)"
  },
  "rx_coreg": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 21 Rx guide (Coreg)"
  },
  "rx_corgard": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 21 Rx guide (Corgard)"
  },
  "rx_corzide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 21 Rx guide (Corzide)"
  },
  "warfarin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Pulmonary Embolism"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for Cardiac Valve Replacement/ TIA/Stroke/Heart Attack",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Cardiac Valve Replacement/ TIA/Stroke/Heart Attack"
    }
   ],
   "source": "p. 21 Rx guide (Coumadin); p. 33 Rx guide (Warfarin)",
   "note": "time = since the drug was FIRST prescribed"
  },
  "rx_cozaar": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 21 Rx guide (Cozaar)"
  },
  "rx_cyclosporine": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 21 Rx guide (Cyclosporine)"
  },
  "rx_cyclosporine_modified": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 21 Rx guide (Cyclosporine Modified)"
  },
  "rx_cytoxan": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 22 Rx guide (Cytoxan)",
   "note": "time = since the last fill"
  },
  "rx_demadex": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Demadex)"
  },
  "rx_depacon": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 22 Rx guide (Depacon)",
   "note": "time = since the last fill"
  },
  "rx_depade": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 22 Rx guide (Depade)",
   "note": "time = since the last fill"
  },
  "rx_depakene": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 22 Rx guide (Depakene)",
   "note": "time = since the last fill"
  },
  "anticonvulsant": {
   "rules": [
    {
     "outcome": "level",
     "note": "mildest use across the brands in this entry"
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizure Disorder",
     "conditional": true
    },
    {
     "outcome": "graded",
     "note": "taken for Seizure Disorder",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures",
     "conditional": true
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 22 Rx guide (Depakote); p. 22 Rx guide (Dilantin); p. 25 Rx guide (Lamictal); p. 31 Rx guide (Tegretol)",
   "note": "time = since the last fill; brands in this entry differ on the chart; check the specific drug"
  },
  "rx_diabeta": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 22 Rx guide (Diabeta)"
  },
  "rx_diabinese": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 22 Rx guide (Diabinese)"
  },
  "rx_digitek": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Atrial Fibrillation"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Digitek)"
  },
  "digoxin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Atrial Fibrillation"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Digoxin); p. 25 Rx guide (Lanoxin)"
  },
  "rx_dilatrate_sr": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Dilatrate SR)",
   "note": "time = since the last fill"
  },
  "rx_dilor": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 22 Rx guide (Dilor)",
   "note": "time = since the last fill"
  },
  "rx_diovan": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Diovan)"
  },
  "rx_methadose": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Opioid Dependence"
    }
   ],
   "source": "p. 22 Rx guide (Dolophine); p. 26 Rx guide (Methadose)",
   "note": "time = since the last fill"
  },
  "rx_donepezil_hcl": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s / Dementia"
    }
   ],
   "source": "p. 22 Rx guide (Donepezil HCL)"
  },
  "rx_duoneb": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for COPD"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 22 Rx guide (Duoneb)",
   "note": "time = since the last fill"
  },
  "rx_dyazide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Dyazide)"
  },
  "rx_dynacirc": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Hypertension"
    }
   ],
   "source": "p. 22 Rx guide (Dynacirc)"
  },
  "rx_dyrenium": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Dyrenium)"
  },
  "rx_edecrin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 22 Rx guide (Edecrin)"
  },
  "rx_edurant": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 22 Rx guide (Edurant)"
  },
  "rx_eldepryl": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 22 Rx guide (Eldepryl)"
  },
  "rx_emtriva": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 23 Rx guide (Emtriva)"
  },
  "rx_enalapril_maleate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 23 Rx guide (Enalapril Maleate); p. 23 Rx guide (Enalaprilat)"
  },
  "rx_epitol": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 23 Rx guide (Epitol)",
   "note": "time = since the last fill"
  },
  "rx_epivir": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 23 Rx guide (Epivir)"
  },
  "rx_eskalith": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Bipolar Disorder"
    }
   ],
   "source": "p. 23 Rx guide (Eskalith)"
  },
  "rx_esmolol_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 23 Rx guide (Esmolol HCL)"
  },
  "rx_exforge": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 23 Rx guide (Exforge)"
  },
  "rx_femara": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 23 Rx guide (Femara)",
   "note": "time = since the last fill"
  },
  "rx_foscavir": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 23 Rx guide (Foscavir)"
  },
  "rx_fosinopril_sodium": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 23 Rx guide (Fosinopril Sodium)"
  },
  "rx_fosrenol": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 23 Rx guide (Fosrenol)"
  },
  "gabapentin": {
   "rules": [
    {
     "outcome": "level",
     "note": "mildest use across the brands in this entry"
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "if taken for Seizures",
     "conditional": true
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 23 Rx guide (Gabapentin); p. 26 Rx guide (Lyrica); p. 27 Rx guide (Neurontin)",
   "note": "time = since the last fill; brands in this entry differ on the chart; check the specific drug"
  },
  "rx_galantamine": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s / Dementia"
    }
   ],
   "source": "p. 23 Rx guide (Galantamine)"
  },
  "rx_gleevec": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 23 Rx guide (Gleevec)",
   "note": "time = since the last fill"
  },
  "metformin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 23 Rx guide (Glucophage); p. 26 Rx guide (Metformin)"
  },
  "rx_glucotrol": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 23 Rx guide (Glucotrol)"
  },
  "rx_glynase": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 23 Rx guide (Glynase)"
  },
  "rx_haldol": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 23 Rx guide (Haldol)"
  },
  "rx_hectoral": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 24 Rx guide (Hectoral)"
  },
  "rx_heparin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Pulmonary Embolism / Thrombosis"
    }
   ],
   "source": "p. 24 Rx guide (Heparin)"
  },
  "rx_hepsera": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 24 Rx guide (Hepsera)",
   "note": "time = since the last fill"
  },
  "rx_hizentra": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Immunodeficiency"
    }
   ],
   "source": "p. 24 Rx guide (Hizentra)"
  },
  "rx_humalog": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 24 Rx guide (Humalog)"
  },
  "rx_humulin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 24 Rx guide (Humulin)"
  },
  "rx_hydralazine_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Hydralazine HCL)"
  },
  "rx_hydroxyurea": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 24 Rx guide (Hydroxyurea)",
   "note": "time = since the last fill"
  },
  "rx_hydergine": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s /Dementia"
    }
   ],
   "source": "p. 24 Rx guide (Hydergine)"
  },
  "immunosuppressant": {
   "rules": [
    {
     "outcome": "level",
     "note": "mildest use across the brands in this entry"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Systemic Lupus"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for Cancer",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Cancer"
    }
   ],
   "source": "p. 24 Rx guide (Hydroxychloroquine); p. 26 Rx guide (Methotrexate); p. 29 Rx guide (Plaquenil)",
   "note": "brands in this entry differ on the chart; check the specific drug"
  },
  "rx_hyzaar": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Hyzaar)"
  },
  "nitroglycerin": {
   "rules": [
    {
     "outcome": "level",
     "note": "mildest use across the brands in this entry"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Imdur); p. 28 Rx guide (Nitroglycerine/Nitrota b/Nitroquick/Nitrostat)",
   "note": "time = since the last fill; brands in this entry differ on the chart; check the specific drug"
  },
  "rx_imuran": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Rheumatoid Arthritis"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Organ / Tissue Transplant"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Systemic Lupus"
    }
   ],
   "source": "p. 24 Rx guide (Imuran)"
  },
  "rx_inamrinone": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Inamrinone)"
  },
  "rx_inderal": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Inderal)"
  },
  "rx_inderide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Inderide)"
  },
  "rx_innopran_xl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 24 Rx guide (Innopran XL)"
  },
  "rx_insulin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 24 Rx guide (Insulin)"
  },
  "rx_intron_a": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 24 Rx guide (Intron-A)",
   "note": "time = since the last fill"
  },
  "rx_invirase": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 25 Rx guide (Invirase)"
  },
  "rx_ipratropium_bromide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Allergies"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 25 Rx guide (Ipratropium Bromide)",
   "note": "time = since the last fill"
  },
  "rx_isordil": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Isordil)",
   "note": "time = since the last fill"
  },
  "rx_isosorbide_dinitrate": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Isosorbide Dinitrate/Mononitrate)",
   "note": "time = since the last fill"
  },
  "rx_janumet": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 25 Rx guide (Janumet)"
  },
  "rx_januvia": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 25 Rx guide (Januvia)"
  },
  "rx_kaletra": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 25 Rx guide (Kaletra)"
  },
  "rx_kemadrin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 25 Rx guide (Kemadrin)"
  },
  "rx_kerlone": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Kerlone)"
  },
  "rx_labetaolol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Labetaolol)"
  },
  "rx_lamtrogine": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 25 Rx guide (Lamtrogine)",
   "note": "time = since the last fill"
  },
  "rx_lanoxicaps": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Atrial Fibrillation"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Lanoxicaps)"
  },
  "rx_lantus": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 25 Rx guide (Lantus)"
  },
  "rx_larodopa": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 25 Rx guide (Larodopa)"
  },
  "rx_leukeran": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 25 Rx guide (Leukeran)",
   "note": "time = since the last fill"
  },
  "rx_levatol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 25 Rx guide (Levatol)"
  },
  "rx_levemir": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 25 Rx guide (Levemir)"
  },
  "rx_levocarnitine": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 25 Rx guide (Levocarnitine)"
  },
  "carbidopa": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 26 Rx guide (Levodopa); p. 30 Rx guide (Sinemet/Sinemet CR)"
  },
  "rx_lexiva": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 26 Rx guide (Lexiva)"
  },
  "rx_lexxel": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Lexxel)"
  },
  "statin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Cholesterol"
    }
   ],
   "source": "p. 26 Rx guide (Lipitor)"
  },
  "lithium": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Bipolar Disorder"
    }
   ],
   "source": "p. 26 Rx guide (Lithium)"
  },
  "rx_lodosyn": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 26 Rx guide (Lodosyn)"
  },
  "rx_losartan_potassium": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Losartan Potassium)"
  },
  "rx_lotensin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Lotensin)"
  },
  "rx_loxapine": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 26 Rx guide (Loxapine)"
  },
  "rx_loxitane": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 26 Rx guide (Loxitane)"
  },
  "rx_lupron": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 26 Rx guide (Lupron)",
   "note": "time = since the last fill"
  },
  "rx_mavik": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Mavik)"
  },
  "rx_maxzide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Maxzide)"
  },
  "rx_mellaril": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 26 Rx guide (Mellaril)"
  },
  "rx_mepron": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 26 Rx guide (Mepron)"
  },
  "rx_methadone": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Opioid Dependence"
    }
   ],
   "source": "p. 26 Rx guide (Methadone)",
   "note": "time = since the last fill"
  },
  "rx_metolazone": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Metolazone)"
  },
  "rx_metoprolol_hctz": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Metoprolol HCTZ)"
  },
  "rx_metoprolol_tartrate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Metoprolol Tartrate/Succinate)"
  },
  "rx_micardis": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 26 Rx guide (Micardis)"
  },
  "rx_micronase": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 26 Rx guide (Micronase)"
  },
  "rx_midamor": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Midamor)"
  },
  "rx_milrinone": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Milrinone)"
  },
  "rx_minitran": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Minitran)",
   "note": "time = since the last fill"
  },
  "rx_mirapex": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 27 Rx guide (Mirapex)"
  },
  "rx_moban": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 27 Rx guide (Moban)"
  },
  "rx_moduretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Moduretic)"
  },
  "rx_moexipril_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Moexipril HCL)"
  },
  "rx_ismo": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Monoket)",
   "note": "time = since the last fill"
  },
  "rx_monopril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Monopril)"
  },
  "rx_mykrok": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Mykrok)"
  },
  "rx_mysoline": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Seizure Disorder"
    }
   ],
   "source": "p. 27 Rx guide (Mysoline)"
  },
  "rx_nadolol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Nadolol)"
  },
  "rx_narcan": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 27 Rx guide (Naloxone); p. 27 Rx guide (Narcan)",
   "note": "time = since the last fill"
  },
  "suboxone": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 27 Rx guide (Naltrexone); p. 31 Rx guide (Suboxone); p. 33 Rx guide (Vivitrol)",
   "note": "time = since the last fill"
  },
  "rx_natrecor": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Natrecor)"
  },
  "rx_navane": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 27 Rx guide (Navane)"
  },
  "rx_nimodipine": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Stroke/TIA/Heart Attack"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 27 Rx guide (Nimodipine); p. 27 Rx guide (Nimotop)",
   "note": "time = since the drug was FIRST prescribed"
  },
  "rx_nitrek": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 27 Rx guide (Nitrek)",
   "note": "time = since the last fill"
  },
  "rx_nitro_bid": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Nitro-bid)",
   "note": "time = since the last fill"
  },
  "rx_nitro_dur": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Nitro-dur)",
   "note": "time = since the last fill"
  },
  "rx_nitrol": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Nitrol)",
   "note": "time = since the last fill"
  },
  "rx_nitromist": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Nitromist)",
   "note": "time = since the last fill"
  },
  "rx_normodyne": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Normodyne)"
  },
  "rx_norpace": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arrhythmia"
    }
   ],
   "source": "p. 28 Rx guide (Norpace)"
  },
  "rx_norvir": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 28 Rx guide (Norvir)"
  },
  "rx_novolin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 28 Rx guide (Novolin)"
  },
  "rx_novolog": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 28 Rx guide (Novolog)"
  },
  "amiodarone": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arrythmia"
    }
   ],
   "source": "p. 28 Rx guide (Pacerone)"
  },
  "rx_parcopa": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 28 Rx guide (Parcopa)"
  },
  "rx_parlodel": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 28 Rx guide (Parlodel)"
  },
  "rx_paxil": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Depressive Disorder"
    }
   ],
   "source": "p. 28 Rx guide (Paxil)"
  },
  "hepatitis_meds": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis C"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 28 Rx guide (Pegasys); p. 30 Rx guide (Ribavirin)",
   "note": "time = since the last fill"
  },
  "rx_peg_intron": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis C"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 28 Rx guide (Peg-Intron)",
   "note": "time = since the last fill"
  },
  "rx_pentam_300": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 28 Rx guide (Pentam 300)"
  },
  "rx_pentamidine_isethionate": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 28 Rx guide (Pentamidine Isethionate)"
  },
  "rx_pepcid": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Stomach Disorder"
    }
   ],
   "source": "p. 28 Rx guide (Pepcid)"
  },
  "rx_pergolide_mesylate": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 28 Rx guide (Pergolide Mesylate)"
  },
  "rx_perindopril_erbumine": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 28 Rx guide (Perindopril Erbumine)"
  },
  "rx_permax": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 28 Rx guide (Permax)"
  },
  "rx_phenobarbital": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    }
   ],
   "source": "p. 29 Rx guide (Phenobarbital)",
   "note": "time = since the last fill"
  },
  "rx_pindolol": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Pindolol)"
  },
  "rx_prandin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 29 Rx guide (Prandin)"
  },
  "rx_primacor": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Primacor)"
  },
  "rx_prinivil": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Prinivil)"
  },
  "rx_prinzide": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Prinzide)"
  },
  "rx_prograf": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 29 Rx guide (Prograf)"
  },
  "rx_proleukin": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 29 Rx guide (Proleukin)",
   "note": "time = since the last fill"
  },
  "rx_prolixin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 29 Rx guide (Prolixin)"
  },
  "rx_propanolol_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Propanolol HCL)"
  },
  "antidepressant": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Depressive Disorder"
    }
   ],
   "source": "p. 29 Rx guide (Prozac); p. 33 Rx guide (Zoloft)"
  },
  "rx_quinapril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Quinapril)"
  },
  "rx_quinaretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Quinaretic)"
  },
  "rx_ramipril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 29 Rx guide (Ramipril)"
  },
  "rx_rapamune": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 29 Rx guide (Rapamune)"
  },
  "rx_rebetol": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis C"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 29 Rx guide (Rebetol); p. 29 Rx guide (Rebetron)",
   "note": "time = since the last fill"
  },
  "rx_rebif": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Multiple Sclerosis"
    }
   ],
   "source": "p. 30 Rx guide (Rebif)"
  },
  "rx_reminyl": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s / Dementia"
    }
   ],
   "source": "p. 30 Rx guide (Reminyl)"
  },
  "rx_renagel": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 30 Rx guide (Renagel)"
  },
  "rx_requip": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 30 Rx guide (Requip)"
  },
  "als_meds": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for ALS (Lou Gehrig's Disease)"
    }
   ],
   "source": "p. 30 Rx guide (Rilutek)"
  },
  "rx_rituxan": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Rheumatoid Arthritis"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for Cancer",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Cancer"
    }
   ],
   "source": "p. 30 Rx guide (Rituxan)",
   "note": "time = since the last fill"
  },
  "rx_rivastigmine_tartrate": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Alzheimer’s / Dementia"
    }
   ],
   "source": "p. 30 Rx guide (Rivastigmine Tartrate)"
  },
  "rx_ropinirole": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 30 Rx guide (Ropinirole)"
  },
  "rx_rythmol": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arrhythmia"
    }
   ],
   "source": "p. 30 Rx guide (Rythmol)"
  },
  "rx_sectral": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 30 Rx guide (Sectral)"
  },
  "rx_serevent": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 30 Rx guide (Serevent)",
   "note": "time = since the last fill"
  },
  "rx_sodium_edecrin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 30 Rx guide (Sodium Edecrin)"
  },
  "rx_soltalol_hydrochloride": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 30 Rx guide (Soltalol Hydrochloride)"
  },
  "rx_sotalol_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 30 Rx guide (Sotalol HCL)"
  },
  "spiriva": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for COPD"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 30 Rx guide (Spiriva)",
   "note": "time = since the last fill"
  },
  "rx_spironolactone": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 31 Rx guide (Spironolactone)"
  },
  "rx_sprycel": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 31 Rx guide (Sprycel)",
   "note": "time = since the last fill"
  },
  "rx_stalevo": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 31 Rx guide (Stalevo)"
  },
  "rx_starlix": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 31 Rx guide (Starlix)"
  },
  "rx_subutex": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Alcohol / Drugs"
    }
   ],
   "source": "p. 31 Rx guide (Subutex)",
   "note": "time = since the last fill"
  },
  "rx_sustiva": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 31 Rx guide (Sustiva)"
  },
  "rx_symbicort": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 31 Rx guide (Symbicort)",
   "note": "time = since the last fill"
  },
  "rx_symmetrel": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 31 Rx guide (Symmetrel)"
  },
  "rx_tambocor": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Arrhythmia"
    }
   ],
   "source": "p. 31 Rx guide (Tambocor)"
  },
  "rx_tamoxifen": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 31 Rx guide (Tamoxifen)",
   "note": "time = since the last fill"
  },
  "rx_tarka": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 31 Rx guide (Tarka)"
  },
  "rx_tasmar": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 31 Rx guide (Tasmar)"
  },
  "rx_tenoretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 31 Rx guide (Tenoretic)"
  },
  "rx_tenormin": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 31 Rx guide (Tenormin)"
  },
  "rx_teveten": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 31 Rx guide (Teveten)"
  },
  "rx_theodur": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 31 Rx guide (Theodur)",
   "note": "time = since the last fill"
  },
  "rx_theophylline": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 31 Rx guide (Theophylline)",
   "note": "time = since the last fill"
  },
  "rx_thioridazine": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 31 Rx guide (Thioridazine)"
  },
  "rx_thiothixene": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 31 Rx guide (Thiothixene)"
  },
  "rx_thorazine": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Psychotic Disorder"
    }
   ],
   "source": "p. 31 Rx guide (Thorazine)"
  },
  "rx_tolazamide": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 31 Rx guide (Tolazamide)"
  },
  "rx_tolbutamide": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 31 Rx guide (Tolbutamide)"
  },
  "rx_tolinase": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes *"
    }
   ],
   "source": "p. 32 Rx guide (Tolinase)"
  },
  "rx_toprol_xl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Toprol XL)"
  },
  "rx_trandate": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Trandate)"
  },
  "rx_trandolapril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Trandolapril)"
  },
  "rx_tresiba_insulin": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Diabetes*"
    }
   ],
   "source": "p. 32 Rx guide (Tresiba (Insulin))"
  },
  "rx_trimterene": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Trimterene)"
  },
  "rx_triamterene": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Triamterene/HCTZ)"
  },
  "rx_tribenzor": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Tribenzor)"
  },
  "rx_trihexyphenidyl_hcl": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Other Use"
    },
    {
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for Parkinson’s"
    }
   ],
   "source": "p. 32 Rx guide (Trihexyphenidyl HCL)"
  },
  "hiv_meds": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 32 Rx guide (Truvada)"
  },
  "rx_twynsta": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Twynsta)"
  },
  "rx_tyzeka": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Liver Disorder / Hepatitis"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 32 Rx guide (Tyzeka)",
   "note": "time = since the last fill"
  },
  "rx_uniretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Uniretic)"
  },
  "rx_univasc": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Univasc)"
  },
  "rx_valcyte": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 32 Rx guide (Valcyte)"
  },
  "rx_valproic_acid": {
   "rules": [
    {
     "withinYears": 3,
     "outcome": "graded",
     "note": "taken for Seizures"
    },
    {
     "outcome": "modified",
     "conditional": true,
     "note": "if taken for Diabetic Neuropathy #"
    }
   ],
   "source": "p. 32 Rx guide (Valproic Acid)",
   "note": "time = since the last fill"
  },
  "rx_valstar": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 32 Rx guide (Valstar)",
   "note": "time = since the last fill"
  },
  "rx_valturna": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Valturna)"
  },
  "rx_vascor": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Angina"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 32 Rx guide (Vascor)",
   "note": "time = since the last fill"
  },
  "rx_vaseretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Vaseretic)"
  },
  "rx_vasotec": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 32 Rx guide (Vasotec)"
  },
  "rx_viaspan": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for Organ / Tissue Transplant"
    }
   ],
   "source": "p. 33 Rx guide (Viaspan)"
  },
  "rx_viracept": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 33 Rx guide (Viracept); p. 33 Rx guide (Viramune)"
  },
  "rx_viread": {
   "rules": [
    {
     "outcome": "decline",
     "note": "taken for AIDS"
    }
   ],
   "source": "p. 33 Rx guide (Viread)"
  },
  "rx_visken": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Visken)"
  },
  "rx_xeloda": {
   "rules": [
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "taken for Cancer"
    },
    {
     "withinYears": 3,
     "outcome": "graded"
    },
    {
     "outcome": "level"
    }
   ],
   "source": "p. 33 Rx guide (Xeloda)",
   "note": "time = since the last fill"
  },
  "rx_xopenex": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Asthma"
    },
    {
     "withinYears": 2,
     "outcome": "modified",
     "note": "if taken for COPD / Emphysema",
     "conditional": true
    },
    {
     "withinYears": 3,
     "outcome": "graded",
     "conditional": true,
     "note": "if taken for COPD / Emphysema"
    }
   ],
   "source": "p. 33 Rx guide (Xopenex)",
   "note": "time = since the last fill"
  },
  "rx_zantac": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Stomach Disorder"
    }
   ],
   "source": "p. 33 Rx guide (Zantac)"
  },
  "rx_zaroxolyn": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Zaroxolyn)"
  },
  "rx_zebeta": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Zebeta)"
  },
  "rx_zelapar": {
   "rules": [
    {
     "outcome": "graded",
     "note": "taken for Parkinson’s"
    }
   ],
   "source": "p. 33 Rx guide (Zelapar)"
  },
  "kidney_failure_meds": {
   "rules": [
    {
     "outcome": "modified",
     "note": "if taken for Renal Insufficiency / Failure"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for Kidney Dialysis"
    }
   ],
   "source": "p. 33 Rx guide (Zemplar)"
  },
  "rx_zestoretic": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Zestoretic)"
  },
  "rx_zestril": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Zestril)"
  },
  "rx_ziac": {
   "rules": [
    {
     "outcome": "level",
     "note": "if taken for Hypertension"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "if taken for CHF"
    }
   ],
   "source": "p. 33 Rx guide (Ziac)"
  },
  "rx_zocor": {
   "rules": [
    {
     "outcome": "level",
     "note": "taken for Cholesterol"
    }
   ],
   "source": "p. 33 Rx guide (Zocor)"
  }
 }
});
