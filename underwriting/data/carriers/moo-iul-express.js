// Mutual of Omaha — transcribed from Brokerage Underwriting Guidelines, form 417212_0521 (May 2021).
UW.addProduct({
  "id": "moo-iul-express",
  "preferGrid": true,
  "carrier": "Mutual of Omaha",
  "product": "IUL Express (IULE)",
  "type": "iul",
  "underwriting": "simplified",
  "bestOutcome": "standard",
  "guide": {
    "document": "Mutual of Omaha Brokerage Underwriting Guidelines — Life",
    "revision": "Form 417212_0521 (as of May 2021)",
    "effective": "2021-05",
    "lastReviewed": "2026-10-10"
  },
  "issueAges": {
    "min": 18,
    "max": 70,
    "note": "Tobacco users 18–65; nontobacco 18–70",
    "source": "p. 26–27"
  },
  "faceAmount": {
    "min": 25000,
    "max": 300000,
    "note": "Ages 18–50 up to $300k; 51–60 up to $250k; 61–70 up to $150k (combined with TLE/CWL)",
    "source": "p. 26–27"
  },
  "tobacco": {
    "note": "Tobacco users eligible only through age 65",
    "source": "p. 27"
  },
  "build": {
    "source": "p. 28–29",
    "rows": [
      {
        "h": 56,
        "min": 74,
        "max": {
          "standard": 197
        }
      },
      {
        "h": 57,
        "min": 77,
        "max": {
          "standard": 202
        }
      },
      {
        "h": 58,
        "min": 79,
        "max": {
          "standard": 208
        }
      },
      {
        "h": 59,
        "min": 82,
        "max": {
          "standard": 214
        }
      },
      {
        "h": 60,
        "min": 85,
        "max": {
          "standard": 220
        }
      },
      {
        "h": 61,
        "min": 88,
        "max": {
          "standard": 226
        }
      },
      {
        "h": 62,
        "min": 91,
        "max": {
          "standard": 232
        }
      },
      {
        "h": 63,
        "min": 94,
        "max": {
          "standard": 238
        }
      },
      {
        "h": 64,
        "min": 97,
        "max": {
          "standard": 245
        }
      },
      {
        "h": 65,
        "min": 100,
        "max": {
          "standard": 251
        }
      },
      {
        "h": 66,
        "min": 103,
        "max": {
          "standard": 258
        }
      },
      {
        "h": 67,
        "min": 106,
        "max": {
          "standard": 265
        }
      },
      {
        "h": 68,
        "min": 109,
        "max": {
          "standard": 274
        }
      },
      {
        "h": 69,
        "min": 112,
        "max": {
          "standard": 282
        }
      },
      {
        "h": 70,
        "min": 115,
        "max": {
          "standard": 289
        }
      },
      {
        "h": 71,
        "min": 119,
        "max": {
          "standard": 298
        }
      },
      {
        "h": 72,
        "min": 122,
        "max": {
          "standard": 305
        }
      },
      {
        "h": 73,
        "min": 126,
        "max": {
          "standard": 313
        }
      },
      {
        "h": 74,
        "min": 129,
        "max": {
          "standard": 321
        }
      },
      {
        "h": 75,
        "min": 133,
        "max": {
          "standard": 329
        }
      },
      {
        "h": 76,
        "min": 136,
        "max": {
          "standard": 338
        }
      },
      {
        "h": 77,
        "min": 140,
        "max": {
          "standard": 347
        }
      },
      {
        "h": 78,
        "min": 143,
        "max": {
          "standard": 358
        }
      },
      {
        "h": 79,
        "min": 147,
        "max": {
          "standard": 367
        }
      },
      {
        "h": 80,
        "min": 151,
        "max": {
          "standard": 376
        }
      },
      {
        "h": 81,
        "min": 154,
        "max": {
          "standard": 385
        }
      },
      {
        "h": 82,
        "min": 158,
        "max": {
          "standard": 395
        }
      }
    ]
  },
  "conditions": {
    "alcohol_abuse": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "decline",
          "note": "alcoholism treatment: postponed 2 years"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Current excessive use: decline. After treatment, no current use: Standard–Table 8"
    },
    "alzheimers_dementia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 32; p. 35"
    },
    "sickle_cell": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 30; p. 40"
    },
    "aneurysm_aaa_uncorrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 32",
      "note": "Aortic aneurysm unoperated: Table 6 to Decline"
    },
    "aneurysm_aaa_corrected": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "surgery: stable 6 months first"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Aortic aneurysm surgery, stable 6 months: Table 2–6"
    },
    "aneurysm_thoracic_corrected": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "surgery: stable 6 months first"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Aortic aneurysm surgery, stable 6 months: Table 2–6"
    },
    "angina": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Table 2–8; unstable angina under 40: decline"
    },
    "anxiety": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "if not mild / well-controlled; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Mild or well-controlled: Standard; others Standard–Table 4"
    },
    "depression_anxiety": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "if not mild / well-controlled; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 32",
      "note": "Mild or well-controlled: Standard; others Standard–Table 4"
    },
    "afib": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32; p. 33",
      "note": "Standard–Decline"
    },
    "arrhythmia": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32; p. 33",
      "note": "Standard–Decline"
    },
    "osteoarthritis": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 32"
    },
    "asthma": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 33",
      "note": "Mild intermittent"
    },
    "asthma_chronic": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 33",
      "note": "Persistent: Table 2–Decline"
    },
    "asthma_severe": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 30",
      "note": "Chronic severe asthma: automatic decline"
    },
    "skin_cancer_basal": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 33",
      "note": "Max 4 excisions, complete resolution"
    },
    "bipolar": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 33",
      "note": "Stable: Table 2–8"
    },
    "high_blood_pressure": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 33; p. 36",
      "note": "Controlled"
    },
    "high_cholesterol": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 36",
      "note": "Hyperlipidemia controlled"
    },
    "chronic_bronchitis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if severe (Table 4–Decline)",
          "conditional": true
        }
      ],
      "source": "p. 33",
      "note": "Mild–moderate: Standard–Table 3"
    },
    "cancer": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "decline",
          "note": "most malignancies postponed 2–5 years"
        },
        {
          "outcome": "refer",
          "note": "individual consideration"
        },
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "postponement may run to 5 years",
          "conditional": true
        }
      ],
      "source": "p. 34"
    },
    "cancer_active": {
      "rules": [
        {
          "outcome": "decline",
          "note": "postponed during treatment / 2–5 years after"
        }
      ],
      "source": "p. 34"
    },
    "cancer_untreated": {
      "rules": [
        {
          "outcome": "decline",
          "note": "postponed during treatment / 2–5 years after"
        }
      ],
      "source": "p. 34"
    },
    "chf": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 34; p. 36"
    },
    "cardiomyopathy": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34",
      "note": "Table 4–Decline"
    },
    "pacemaker": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 30",
      "note": "Automatic decline for Express"
    },
    "cerebral_palsy": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if severe",
          "conditional": true
        }
      ],
      "source": "p. 34",
      "note": "Mild–moderate: Standard–Table 3"
    },
    "stroke": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "1 year since event first"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "multiple episodes, complications, or rated above Table 4",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 41",
      "note": "p. 34: single episode, stable 1 year Standard–Table 8. p. 41: Table 4 plus flat extra–Decline"
    },
    "copd": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 35",
      "note": "Standard–Table 8"
    },
    "emphysema": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 35",
      "note": "Standard–Table 8"
    },
    "cirrhosis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 34"
    },
    "cirrhosis_early": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 34"
    },
    "cirrhosis_advanced": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 34"
    },
    "drug_abuse": {
      "rules": [
        {
          "withinYears": 3,
          "outcome": "decline",
          "note": "postponed 3 years"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 35",
      "note": "Then Standard–Table 8"
    },
    "illegal_drugs": {
      "rules": [
        {
          "withinYears": 3,
          "outcome": "decline",
          "note": "postponed 3 years"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 35",
      "note": "Then Standard–Table 8"
    },
    "ulcerative_colitis": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "1 year since diagnosis or major attack"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 34; p. 41",
      "note": "Table 2–8"
    },
    "crohns_colitis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 35",
      "note": "Standard–Table 8"
    },
    "cystic_fibrosis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "downs_syndrome": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "huntingtons": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "dialysis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "kidney_failure": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "kidney_transplant": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "quadriplegia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "muscular_dystrophy": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "hodgkins": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "amputation_disease": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "pancreatitis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 30, 35–40",
      "note": "Decline (p. 30 automatic declines: muscular dystrophy, Hodgkin's, amputation by disease, chronic pancreatitis)"
    },
    "depression": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 3; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 35",
      "note": "Controlled with medication"
    },
    "diabetes_oral": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "diagnosed before age 50, or over 50 with Table 2+ build, tobacco or PVD (p. 30)",
          "conditional": true
        }
      ],
      "source": "p. 30; p. 35",
      "note": "Type II over age 20: Standard–Table 8"
    },
    "diabetes_uncomplicated": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "diagnosed before age 50, or over 50 with Table 2+ build, tobacco or PVD (p. 30)",
          "conditional": true
        }
      ],
      "source": "p. 30; p. 35",
      "note": "Type II over age 20: Standard–Table 8"
    },
    "diabetes_insulin": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "diagnosed before age 50, or over 50 with Table 2+ build, tobacco or PVD (p. 30)",
          "conditional": true
        }
      ],
      "source": "p. 30; p. 35",
      "note": "Type I over age 20: Table 2–8"
    },
    "diabetes_complications": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 30"
    },
    "seizures": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 35",
      "note": "Epilepsy / convulsions: Table 2–8"
    },
    "encephalitis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless recovered",
          "conditional": true
        }
      ],
      "source": "p. 35"
    },
    "gastric_bypass": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "postponed 1 year"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        }
      ],
      "source": "p. 36",
      "note": "Then Table 2–4"
    },
    "hepatitis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 36",
      "note": "Chronic hepatitis: Standard–Decline"
    },
    "hepatitis_b": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 36",
      "note": "Chronic hepatitis: Standard–Decline"
    },
    "hepatitis_c": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 36",
      "note": "Chronic hepatitis: Standard–Decline"
    },
    "kidney_stones": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 4; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 37"
    },
    "lupus_discoid": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 37",
      "note": "No evidence of systemic lupus over 6 months"
    },
    "lupus": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "1 year since diagnosis"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 37; p. 41",
      "note": "SLE, no complications, over age 20: Table 2–8 (p. 37: Standard–Decline)"
    },
    "melanoma": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 38",
      "note": "Surgery & confirmed pathology: Standard–Decline"
    },
    "mental_incapacity": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if severe",
          "conditional": true
        }
      ],
      "source": "p. 38",
      "note": "Mild, no complications, over age 8: Standard–Table 2"
    },
    "ms": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 38",
      "note": "Table 2–Decline"
    },
    "heart_attack": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 38",
      "note": "Myocardial infarction over age 40: Table 4–Decline"
    },
    "narcolepsy": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "onset over 6 months ago first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 4; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 38"
    },
    "paraplegia": {
      "rules": [
        {
          "outcome": "refer",
          "note": "individual consideration"
        }
      ],
      "source": "p. 39"
    },
    "parkinsons": {
      "rules": [
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "if marked or severe",
          "conditional": true
        }
      ],
      "source": "p. 39",
      "note": "Mild: Table 2–4"
    },
    "pvd": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 4; guide: table-rated (approved)",
          "conditional": true
        },
        {
          "outcome": "decline",
          "note": "smoker; or diabetes over 50 / Table 2+ build (p. 30)",
          "conditional": true
        }
      ],
      "source": "p. 30; p. 39",
      "note": "Nonsmoker: Standard–Table 4"
    },
    "blood_clots": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "pulmonary embolism: over 6 months first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 4; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "rheumatoid_arthritis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 40",
      "note": "Not disabled, over age 18: Standard–Table 6"
    },
    "ra_mild": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 40",
      "note": "Not disabled, over age 18: Standard–Table 6"
    },
    "psoriatic_arthritis": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 40",
      "note": "Not disabled, over age 18: Standard–Table 6"
    },
    "ra_severe": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "treated with Humira, Enbrel, methotrexate or Xeljanz (p. 30 automatic decline)",
          "conditional": true
        }
      ],
      "source": "p. 30; p. 40"
    },
    "sarcoidosis": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "in remission 6 months first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless confined to lungs or skin",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "sarcoid_pulm": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "in remission 6 months first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless confined to lungs or skin",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "sarcoid_nonpulm": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "in remission 6 months first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless confined to lungs or skin",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "sarcoid_pulm_early": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "in remission 6 months first"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless confined to lungs or skin",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "sarcoid_pulm_advanced": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "unless confined to lungs",
          "conditional": true
        }
      ],
      "source": "p. 40"
    },
    "scleroderma": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "refer",
          "note": "only localized scleroderma is listed",
          "conditional": true
        }
      ],
      "source": "p. 40",
      "note": "Localized: Standard–Table 2"
    },
    "sleep_apnea": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 3; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 41",
      "note": "Successfully treated"
    },
    "sleep_apnea_controlled": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 3; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 41",
      "note": "Successfully treated"
    },
    "spina_bifida": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "standard",
          "note": "Standard–Table 4; guide: table-rated (approved)",
          "conditional": true
        }
      ],
      "source": "p. 41",
      "note": "Minimal deformity"
    },
    "suicide_attempt": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "single attempt: over 1 year first"
        },
        {
          "withinYears": 5,
          "outcome": "standard",
          "note": "$5 per thousand flat extra; guide: table-rated (approved)"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "multiple attempts",
          "conditional": true
        }
      ],
      "source": "p. 41"
    },
    "tia": {
      "rules": [
        {
          "withinYears": 0.5,
          "outcome": "decline",
          "note": "single event: over 6 months first"
        },
        {
          "outcome": "standard",
          "note": "guide: table-rated (approved)"
        },
        {
          "outcome": "decline",
          "note": "multiple events (Table 4–8)",
          "conditional": true
        }
      ],
      "source": "p. 41",
      "note": "Single event: Table 2–4"
    },
    "ptsd": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if not a single mild episode (Table 2–6)",
          "conditional": true
        }
      ],
      "source": "p. 39"
    },
    "marijuana": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 38",
      "note": "Over age 18: Preferred–Decline"
    },
    "heart_murmur": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 38",
      "note": "Functional"
    },
    "heart_murmur_symptomatic": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32; p. 38",
      "note": "Standard–Table 8"
    },
    "heart_valve": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32; p. 38",
      "note": "Standard–Table 8"
    },
    "mitral_insufficiency": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "if rated above Table 4 (Express maximum)",
          "conditional": true
        }
      ],
      "source": "p. 32; p. 38",
      "note": "Standard–Table 8"
    },
    "thyroid": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 37",
      "note": "Hypothyroidism controlled"
    },
    "prior_decline": {
      "rules": [
        {
          "outcome": "decline",
          "note": "declined, or prior United of Omaha offer worse than Table 4"
        }
      ],
      "source": "p. 26"
    }
  },
  "medications": {},
  "notes": "Agent decision: your grid wins over this 2021 guide wherever it has an answer. Same underwriting as Term Life Express: Express max rating is Table 4; worse or multiple impairments past Table 4 are declined (p. 30). Signed illustration required. Guide is dated May 2021; confirm against the current guide."
});
