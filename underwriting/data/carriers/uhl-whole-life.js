// United Home Life — transcribed from Agent Underwriting Guide, form 200-920 9-26.
// Each condition gives the best available plan; see rule notes for the plan name.
UW.addProduct({
  "id": "uhl-whole-life",
  "carrier": "United Home Life",
  "product": "Whole Life (Express Issue Premier / Deluxe / EIWL / CGWL)",
  "type": "final_expense",
  "underwriting": "simplified",
  "bestOutcome": "preferred",
  "guide": {
    "document": "United Home Life Agent Underwriting Guide",
    "revision": "Form 200-920 9-26",
    "effective": "2026-09",
    "lastReviewed": "2026-10-10"
  },
  "issueAges": { "min": 20, "max": 80, "source": "agent (UHL product limits)", "note": "Premier/Deluxe 20–80; EIWL Graded 25–80; CGWL 40–75" },
  "faceAmount": {
    "min": 2000, "max": 100000, "source": "agent (UHL product limits)",
    "note": "Premier: $100k to 60, $50k 61–80; Deluxe $50k; EIWL Graded and CGWL $25k",
    "bands": [ { "min": 20, "max": 60, "face": 100000 }, { "min": 61, "max": 80, "face": 50000 } ]
  },
  "tierLimits": {
    "source": "agent (UHL product limits)",
    "preferred": { "name": "Express Issue Premier", "faceMin": 5000, "fallback": "standard" },
    "standard": { "name": "Express Issue Deluxe", "faceMin": 5000, "faceMax": 50000, "fallback": "graded" },
    "graded": { "name": "Express Issue Whole Life Graded", "ageMin": 25, "faceMin": 2000, "faceMax": 25000, "fallback": "gi" },
    "gi": { "name": "Conditionally Guaranteed Whole Life", "ageMin": 40, "ageMax": 75, "faceMin": 5000, "faceMax": 25000, "fallback": "decline" }
  },
  "build": {
    "source": "UHL tab of the agency grid (Premier / Deluxe columns); heights between rows use the shorter row; over Deluxe = EIWL (no height/weight limit)",
    "overweight": "graded",
    "rows": [
      {
        "h": 60,
        "max": {
          "preferred": 210,
          "standard": 240
        }
      },
      {
        "h": 61,
        "max": {
          "preferred": 210,
          "standard": 240
        },
        "note": "between chart rows: uses 5 ft 0 in limits"
      },
      {
        "h": 62,
        "max": {
          "preferred": 225,
          "standard": 255
        }
      },
      {
        "h": 63,
        "max": {
          "preferred": 225,
          "standard": 255
        },
        "note": "between chart rows: uses 5 ft 2 in limits"
      },
      {
        "h": 64,
        "max": {
          "preferred": 240,
          "standard": 270
        }
      },
      {
        "h": 65,
        "max": {
          "preferred": 240,
          "standard": 270
        },
        "note": "between chart rows: uses 5 ft 4 in limits"
      },
      {
        "h": 66,
        "max": {
          "preferred": 255,
          "standard": 290
        }
      },
      {
        "h": 67,
        "max": {
          "preferred": 255,
          "standard": 290
        },
        "note": "between chart rows: uses 5 ft 6 in limits"
      },
      {
        "h": 68,
        "max": {
          "preferred": 270,
          "standard": 305
        }
      },
      {
        "h": 69,
        "max": {
          "preferred": 270,
          "standard": 305
        },
        "note": "between chart rows: uses 5 ft 8 in limits"
      },
      {
        "h": 70,
        "max": {
          "preferred": 285,
          "standard": 325
        }
      },
      {
        "h": 71,
        "max": {
          "preferred": 285,
          "standard": 325
        },
        "note": "between chart rows: uses 5 ft 10 in limits"
      },
      {
        "h": 72,
        "max": {
          "preferred": 305,
          "standard": 340
        }
      },
      {
        "h": 73,
        "max": {
          "preferred": 305,
          "standard": 340
        },
        "note": "between chart rows: uses 6 ft 0 in limits"
      },
      {
        "h": 74,
        "max": {
          "preferred": 305,
          "standard": 340
        },
        "note": "between chart rows: uses 6 ft 0 in limits"
      },
      {
        "h": 75,
        "max": {
          "preferred": 305,
          "standard": 340
        },
        "note": "between chart rows: uses 6 ft 0 in limits"
      },
      {
        "h": 76,
        "max": {
          "preferred": 340,
          "standard": 385
        }
      }
    ]
  },
  "conditions": {
    "hiv_aids": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4; p. 11"
    },
    "adl_assistance": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 4; p. 12",
      "note": "If receiving home health care: no plan available"
    },
    "home_health_care": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4; p. 11"
    },
    "als": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 4; p. 12",
      "note": "p. 12 also lists ALS under \"Only Whole Life Plans Available\""
    },
    "alzheimers_dementia": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4; p. 5; p. 11"
    },
    "mental_incapacity": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 5; p. 11"
    },
    "aneurysm": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_aaa_uncorrected": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_cerebral_uncorrected": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_cerebral_corrected": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL) — ruptured brain aneurysm"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4"
    },
    "aneurysm_aaa_corrected": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4",
      "note": "Ruptured/repaired aneurysm"
    },
    "aneurysm_thoracic_corrected": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4",
      "note": "Ruptured/repaired aneurysm"
    },
    "bipolar": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 4; p. 13"
    },
    "high_blood_pressure": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4",
      "note": "Controlled"
    },
    "cancer_untreated": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 4"
    },
    "cancer": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4–5; p. 8 (leukemia/lymphoma: see cancer)",
      "note": "Years = since treatment ended / cancer free. Breast cancer maintenance/preventative meds OK for consideration"
    },
    "hodgkins": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 4–5; p. 8 (leukemia/lymphoma: see cancer)",
      "note": "Years = since treatment ended / cancer free. Breast cancer maintenance/preventative meds OK for consideration"
    },
    "cardiomyopathy": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 5; p. 12"
    },
    "high_cholesterol": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 5"
    },
    "circulatory_disorder": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 5",
      "note": "Excluding varicose veins"
    },
    "blood_clots": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 5",
      "note": "After 12 months: requires no treatment and no further consultation"
    },
    "copd": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL) — if ever on oxygen",
          "conditional": true
        }
      ],
      "source": "p. 5; p. 8",
      "note": "Never on oxygen: EIWL. On oxygen: CGWL"
    },
    "emphysema": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "chronic_bronchitis": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "pulmonary_fibrosis": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "chf": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 5; p. 12"
    },
    "diabetes_oral": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 6",
      "note": "Oral medication / diet only throughout look-back period"
    },
    "diabetes_insulin": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 6",
      "note": "Years = time since last insulin treatment (confirmed by agent)"
    },
    "diabetes_uncomplicated": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — if insulin within 2 years",
          "conditional": true
        }
      ],
      "source": "p. 6; p. 13"
    },
    "diabetes_complications": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 6; p. 12",
      "note": "Neuropathy, retinopathy, nephropathy or amputation from diabetes"
    },
    "disability_benefits": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 6",
      "note": "Under age 65, including military disability, even if working"
    },
    "alcohol_abuse": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "decline",
          "note": "No plan available — IV drug use: no plan",
          "conditional": true
        }
      ],
      "source": "p. 6; p. 11",
      "note": "Treatment or advised to reduce/limit; years since"
    },
    "drug_abuse": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "decline",
          "note": "No plan available — IV drug use: no plan",
          "conditional": true
        }
      ],
      "source": "p. 6; p. 11",
      "note": "Treatment or advised to reduce/limit; years since"
    },
    "downs_syndrome": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 6"
    },
    "heart_attack": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "cad": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_surgery": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_stent": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_bypass": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "cardiac_procedure": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_valve_replacement": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing beyond 12 months",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_valve": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "mitral_insufficiency": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "mitral_stenosis": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "pvd": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7; p. 8",
      "note": "Carotid / PAD / PVD; after 2 years requires no treatment or consultation"
    },
    "huntingtons": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7"
    },
    "afib": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment / consultation ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7",
      "note": "Irregular heart rhythm incl. AFib; years since last treatment/consultation"
    },
    "arrhythmia": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — if treatment / consultation ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7",
      "note": "Irregular heart rhythm incl. AFib; years since last treatment/consultation"
    },
    "dialysis": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 7; p. 12"
    },
    "kidney_disease": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_early": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_stage3": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_advanced": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "liver_disease": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis_early": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis_advanced": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "hepatitis_b": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "hepatitis_c": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "fatty_liver": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "psych_hospitalization": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 8",
      "note": "Major depression with hospitalization within 12 months"
    },
    "suicide_attempt": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 8"
    },
    "asthma": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 8; p. 13",
      "note": "Mild, no hospitalization in past 2 years"
    },
    "muscular_dystrophy": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL) — p. 12 lists under \"Only CGWL\"",
          "conditional": true
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Not requiring ADL help or home health care"
    },
    "ms": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Not requiring ADL help or home health care"
    },
    "organ_transplant": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "organ_transplant_pending": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "kidney_transplant": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "oxygen": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "sleep_apnea_oxygen": {
      "rules": [
        {
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "parkinsons": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "sickle_cell": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "seizures": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "Years since last seizure; controlled"
    },
    "schizophrenia": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 9"
    },
    "sleep_apnea": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "No oxygen use (CPAP OK)"
    },
    "sleep_apnea_controlled": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "No oxygen use (CPAP OK)"
    },
    "lupus": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL) — with organ involvement",
          "conditional": true
        }
      ],
      "source": "p. 9",
      "note": "SLE without organ involvement: Deluxe. With organ involvement (kidney, lung…): EIWL"
    },
    "stroke": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        },
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if it caused home health care or cognitive impairment",
          "conditional": true
        }
      ],
      "source": "p. 9; p. 11–13"
    },
    "tia": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 9; p. 13"
    },
    "terminal_illness": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 9; p. 11",
      "note": "Expected to cause death within 24 months"
    },
    "prior_decline": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        }
      ],
      "source": "p. 10",
      "note": "Declined / postponed within 12 months"
    },
    "dui": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "withinYears": 5,
          "outcome": "standard",
          "note": "Express Issue Deluxe — guide does not state 2–5 years",
          "conditional": true
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10",
      "note": "Guide gives within 2 years and over 5 years only"
    },
    "felony_charges_pending": {
      "rules": [
        {
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        }
      ],
      "source": "p. 10"
    },
    "felony": {
      "rules": [
        {
          "withinYears": 7,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10",
      "note": "Conviction / parole / probation; years since"
    },
    "probation_parole": {
      "rules": [
        {
          "withinYears": 7,
          "outcome": "graded",
          "note": "Express Issue WL (EIWL)"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10",
      "note": "Conviction / parole / probation; years since"
    },
    "hazardous_avocation": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10",
      "note": "Hazardous sports or aviation"
    },
    "pilot": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10",
      "note": "Hazardous sports or aviation"
    },
    "license_suspended": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10"
    },
    "license_suspended_dui": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10"
    },
    "license_suspended_other": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "standard",
          "note": "Express Issue Deluxe"
        },
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        }
      ],
      "source": "p. 10"
    },
    "multiple_hospital_stays": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "gi",
          "note": "Conditionally Guaranteed WL (CGWL)"
        }
      ],
      "source": "p. 12",
      "note": "Hospitalized 2 or more times within past 12 months"
    },
    "crohns_colitis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — plan tier not stated",
          "conditional": true
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ulcerative_colitis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — plan tier not stated",
          "conditional": true
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "rheumatoid_arthritis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — plan tier not stated",
          "conditional": true
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ra_mild": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — plan tier not stated",
          "conditional": true
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ra_severe": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Express Issue Premier"
        },
        {
          "outcome": "standard",
          "note": "Express Issue Deluxe — plan tier not stated",
          "conditional": true
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    }
  },
  "medications": {},
  "notes": "From UHL plan-availability guide (Best Whole Life Plan / Best Term Plan per condition). Final decision by UHL underwriting. Availability may vary by state. Questions: UHL Life Contact Center 1-800-428-3001. Premier = Preferred, Deluxe = Standard, EIWL = Graded, CGWL = Guaranteed issue. Unlike other carriers, some conditions are not accepted even on CGWL. UHL Provider is a separate whole life product with its own rules; it is not covered by this guide or this entry."
});
