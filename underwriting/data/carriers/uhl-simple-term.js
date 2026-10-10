// United Home Life — transcribed from Agent Underwriting Guide, form 200-920 9-26.
// Each condition gives the best available plan; see rule notes for the plan name.
UW.addProduct({
  "id": "uhl-simple-term",
  "carrier": "United Home Life",
  "product": "Simple Term (20/30, Term ROP, 20 Deluxe)",
  "type": "term",
  "underwriting": "simplified",
  "bestOutcome": "preferred",
  "guide": {
    "document": "United Home Life Agent Underwriting Guide",
    "revision": "Form 200-920 9-26",
    "effective": "2026-09",
    "lastReviewed": "2026-10-10"
  },
  // No build chart, issue ages, face limits or state list in this guide; the grid fills these as backup.
  "build": null,
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
          "outcome": "decline",
          "note": "No plan available"
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
          "outcome": "decline",
          "note": "No plan available"
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
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_aaa_uncorrected": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_cerebral_uncorrected": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4",
      "note": "Any aneurysm, not ruptured"
    },
    "aneurysm_cerebral_corrected": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4"
    },
    "aneurysm_aaa_corrected": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4",
      "note": "Ruptured/repaired aneurysm"
    },
    "aneurysm_thoracic_corrected": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4",
      "note": "Ruptured/repaired aneurysm"
    },
    "bipolar": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 4; p. 13"
    },
    "high_blood_pressure": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4",
      "note": "Controlled"
    },
    "cancer_untreated": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 4"
    },
    "cancer": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4–5; p. 8 (leukemia/lymphoma: see cancer)",
      "note": "Years = since treatment ended / cancer free. Breast cancer maintenance/preventative meds OK for consideration"
    },
    "hodgkins": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 4–5; p. 8 (leukemia/lymphoma: see cancer)",
      "note": "Years = since treatment ended / cancer free. Breast cancer maintenance/preventative meds OK for consideration"
    },
    "cardiomyopathy": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 5; p. 12"
    },
    "high_cholesterol": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 5"
    },
    "circulatory_disorder": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 5",
      "note": "Excluding varicose veins"
    },
    "blood_clots": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 5",
      "note": "After 12 months: requires no treatment and no further consultation"
    },
    "copd": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 5; p. 8",
      "note": "Never on oxygen: EIWL. On oxygen: CGWL"
    },
    "emphysema": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "chronic_bronchitis": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "pulmonary_fibrosis": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8",
      "note": "Lung / respiratory disease"
    },
    "chf": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 5; p. 12"
    },
    "diabetes_oral": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 6",
      "note": "Oral medication / diet only throughout look-back period"
    },
    "diabetes_insulin": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 6",
      "note": "Guide: \"any insulin treatment <2 years / 2–5 / >5 years\""
    },
    "diabetes_uncomplicated": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 6; p. 13"
    },
    "diabetes_complications": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 6; p. 12",
      "note": "Neuropathy, retinopathy, nephropathy or amputation from diabetes"
    },
    "disability_benefits": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 6",
      "note": "Under age 65, including military disability, even if working"
    },
    "alcohol_abuse": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — IV drug use",
          "conditional": true
        }
      ],
      "source": "p. 6; p. 11",
      "note": "Treatment or advised to reduce/limit; years since"
    },
    "drug_abuse": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — IV drug use",
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
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "cad": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_surgery": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_stent": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_bypass": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "cardiac_procedure": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_valve_replacement": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 6–7; p. 12",
      "note": "CAD / heart history; after 12 months requires no treatment or consultation"
    },
    "heart_valve": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "mitral_insufficiency": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "mitral_stenosis": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7",
      "note": "Heart valve disease, not repaired"
    },
    "pvd": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7; p. 8",
      "note": "Carotid / PAD / PVD; after 2 years requires no treatment or consultation"
    },
    "huntingtons": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7"
    },
    "afib": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7",
      "note": "Irregular heart rhythm incl. AFib; years since last treatment/consultation"
    },
    "arrhythmia": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if treatment ongoing",
          "conditional": true
        }
      ],
      "source": "p. 7",
      "note": "Irregular heart rhythm incl. AFib; years since last treatment/consultation"
    },
    "dialysis": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7; p. 12"
    },
    "kidney_disease": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_early": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_stage3": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "kidney_disease_advanced": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 7; p. 12",
      "note": "Kidney disease, no dialysis (incl. renal insufficiency)"
    },
    "liver_disease": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis_early": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "cirrhosis_advanced": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "hepatitis_b": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "hepatitis_c": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Liver disease incl. cirrhosis, hepatitis B/C, fatty liver"
    },
    "fatty_liver": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
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
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
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
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 8"
    },
    "asthma": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 8; p. 13",
      "note": "Mild, no hospitalization in past 2 years"
    },
    "muscular_dystrophy": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Not requiring ADL help or home health care"
    },
    "ms": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Not requiring ADL help or home health care"
    },
    "organ_transplant": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "organ_transplant_pending": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "kidney_transplant": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12",
      "note": "Received, or told a transplant is needed"
    },
    "oxygen": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "sleep_apnea_oxygen": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "parkinsons": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "sickle_cell": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 8; p. 12"
    },
    "seizures": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "Years since last seizure; controlled"
    },
    "schizophrenia": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 9"
    },
    "sleep_apnea": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "No oxygen use (CPAP OK)"
    },
    "sleep_apnea_controlled": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 9; p. 13",
      "note": "No oxygen use (CPAP OK)"
    },
    "lupus": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — with organ involvement",
          "conditional": true
        }
      ],
      "source": "p. 9",
      "note": "SLE without organ involvement: Deluxe. With organ involvement (kidney, lung…): EIWL"
    },
    "stroke": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        },
        {
          "outcome": "decline",
          "note": "No plan available — if home health care / cognitive impairment",
          "conditional": true
        }
      ],
      "source": "p. 9; p. 11–13"
    },
    "tia": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
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
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
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
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        },
        {
          "withinYears": 5,
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe) — 2–5 years not stated",
          "conditional": true
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 10",
      "note": "Guide gives within 2 years and over 5 years only"
    },
    "felony_charges_pending": {
      "rules": [
        {
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 10"
    },
    "felony": {
      "rules": [
        {
          "withinYears": 7,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 10",
      "note": "Conviction / parole / probation; years since"
    },
    "probation_parole": {
      "rules": [
        {
          "withinYears": 7,
          "outcome": "decline",
          "note": "No plan available"
        },
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 10",
      "note": "Conviction / parole / probation; years since"
    },
    "hazardous_avocation": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 10",
      "note": "Hazardous sports or aviation"
    },
    "pilot": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 10",
      "note": "Hazardous sports or aviation"
    },
    "license_suspended": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 10"
    },
    "license_suspended_dui": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 10"
    },
    "license_suspended_other": {
      "rules": [
        {
          "outcome": "standard",
          "note": "Term Deluxe (Simple Term 20 Deluxe)"
        }
      ],
      "source": "p. 10"
    },
    "multiple_hospital_stays": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "No plan available"
        }
      ],
      "source": "p. 12",
      "note": "Hospitalized 2 or more times within past 12 months"
    },
    "crohns_colitis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ulcerative_colitis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "rheumatoid_arthritis": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ra_mild": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    },
    "ra_severe": {
      "rules": [
        {
          "outcome": "preferred",
          "note": "Term Premier (Simple Term 20/30, Term ROP)"
        }
      ],
      "source": "p. 13",
      "note": "Listed under \"Both Whole Life & Term Plans Available\"; specific plan not stated"
    }
  },
  "medications": {},
  "notes": "From UHL plan-availability guide (Best Whole Life Plan / Best Term Plan per condition). Final decision by UHL underwriting. Availability may vary by state. Questions: UHL Life Contact Center 1-800-428-3001. Term Premier (Simple Term 20/30, Term ROP) = Preferred; Term Deluxe (Simple Term 20 Deluxe) = Standard. UHL is the only term carrier with a preferred tier."
});
