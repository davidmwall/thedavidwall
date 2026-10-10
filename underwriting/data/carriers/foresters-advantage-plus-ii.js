// Foresters — transcribed from Underwriting Guide form 503325 US (03/20), Non-Medical rules.
// Non-Medical is approve or decline: "If the proposed insured does not qualify for Non-Medical rates, the application will be declined" (p. 6).
UW.addProduct({
  "id": "foresters-advantage-plus-ii",
  "carrier": "Foresters",
  "product": "Advantage Plus II Whole Life (Non-Medical)",
  "type": "whole_life",
  "underwriting": "simplified",
  "bestOutcome": "standard",
  "issueAges": {
    "min": 0,
    "max": 75,
    "source": "p. 6"
  },
  "faceAmount": {
    "min": 25000,
    "max": 400000,
    "note": "Non-Medical limits: ages 0–15 $150,000; 16–55 $400,000; 56–75 $150,000 (incl. term riders). Per the p. 13 chart, some amounts need vitals/blood",
    "source": "p. 6; p. 13"
  },
  "guide": {
    "document": "Foresters Advantage Plus II, Strong Foundation, Your Term & SMART UL Underwriting Guide",
    "revision": "Form 503325 US (03/20)",
    "effective": "2020-03",
    "lastReviewed": "2026-10-10"
  },
  "build": {
    "source": "p. 10 (Non-Medical build chart)",
    "rows": [
      {
        "h": 56,
        "min": 82,
        "max": {
          "standard": 185
        }
      },
      {
        "h": 57,
        "min": 85,
        "max": {
          "standard": 193
        }
      },
      {
        "h": 58,
        "min": 88,
        "max": {
          "standard": 198
        }
      },
      {
        "h": 59,
        "min": 91,
        "max": {
          "standard": 207
        }
      },
      {
        "h": 60,
        "min": 94,
        "max": {
          "standard": 212
        }
      },
      {
        "h": 61,
        "min": 97,
        "max": {
          "standard": 221
        }
      },
      {
        "h": 62,
        "min": 101,
        "max": {
          "standard": 225
        }
      },
      {
        "h": 63,
        "min": 104,
        "max": {
          "standard": 234
        }
      },
      {
        "h": 64,
        "min": 107,
        "max": {
          "standard": 243
        }
      },
      {
        "h": 65,
        "min": 111,
        "max": {
          "standard": 250
        }
      },
      {
        "h": 66,
        "min": 114,
        "max": {
          "standard": 259
        }
      },
      {
        "h": 67,
        "min": 118,
        "max": {
          "standard": 265
        }
      },
      {
        "h": 68,
        "min": 121,
        "max": {
          "standard": 274
        }
      },
      {
        "h": 69,
        "min": 125,
        "max": {
          "standard": 281
        }
      },
      {
        "h": 70,
        "min": 128,
        "max": {
          "standard": 292
        }
      },
      {
        "h": 71,
        "min": 132,
        "max": {
          "standard": 298
        }
      },
      {
        "h": 72,
        "min": 136,
        "max": {
          "standard": 307
        }
      },
      {
        "h": 73,
        "min": 140,
        "max": {
          "standard": 314
        }
      },
      {
        "h": 74,
        "min": 144,
        "max": {
          "standard": 325
        }
      },
      {
        "h": 75,
        "min": 147,
        "max": {
          "standard": 336
        }
      },
      {
        "h": 76,
        "min": 151,
        "max": {
          "standard": 342
        }
      },
      {
        "h": 77,
        "min": 155,
        "max": {
          "standard": 353
        }
      },
      {
        "h": 78,
        "min": 160,
        "max": {
          "standard": 360
        }
      }
    ]
  },
  "conditions": {
    "adl_assistance": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "hiv_aids": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "alzheimers_dementia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "amputation_disease": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cerebral_palsy": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "chf": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cystic_fibrosis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "downs_syndrome": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "drug_abuse": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "illegal_drugs": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "als": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "lupus": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "ms": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "muscular_dystrophy": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "oxygen": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "sleep_apnea_oxygen": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "pacemaker": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "pancreatitis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "paralysis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "paraplegia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "quadriplegia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "parkinsons": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "pvd": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "spina_bifida": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "suicide_attempt": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "unexplained_weight_loss": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "wheelchair": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "wheelchair_confined": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "hodgkins": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "hepatitis_b": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "hepatitis_c": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "liver_disease": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cirrhosis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cirrhosis_early": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cirrhosis_advanced": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "circulatory_surgery": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "stroke": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "tia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "bipolar": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "schizophrenia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "depression_severe": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "diabetes_complications": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "diabetic_coma": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "heart_murmur_symptomatic": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "chronic_bronchitis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "emphysema": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "asthma_severe": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "ra_severe": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "kidney_disease": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "kidney_disease_early": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "kidney_disease_stage3": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "kidney_disease_advanced": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "kidney_failure": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "dialysis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "sarcoid_pulm": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "sarcoid_pulm_early": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "sarcoid_pulm_advanced": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "nursing_home": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "hospitalized_now": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cancer_active": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cancer_untreated": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "cancer_metastatic": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "pp. 17–20",
      "note": "Decline for Non-Medical"
    },
    "aneurysm": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "aneurysm_aaa_uncorrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "aneurysm_aaa_corrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "aneurysm_cerebral_uncorrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "aneurysm_cerebral_corrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "aneurysm_thoracic_corrected": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Aneurysm: decline"
    },
    "angina": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_stent": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_bypass": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_attack": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "cad": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_surgery": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "cardiac_procedure": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_blockage": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_failure_other": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19",
      "note": "Heart disease (heart attack, CAD, angina, angioplasty, bypass, surgery/procedure, blockage): decline"
    },
    "heart_valve": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19; p. 20",
      "note": "Heart valve disease/surgery, aortic or mitral: decline"
    },
    "heart_valve_replacement": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19; p. 20",
      "note": "Heart valve disease/surgery, aortic or mitral: decline"
    },
    "mitral_insufficiency": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19; p. 20",
      "note": "Heart valve disease/surgery, aortic or mitral: decline"
    },
    "mitral_stenosis": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17; p. 19; p. 20",
      "note": "Heart valve disease/surgery, aortic or mitral: decline"
    },
    "afib": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Arrhythmia: decline"
    },
    "arrhythmia": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 17",
      "note": "Arrhythmia: decline"
    },
    "alcohol_abuse": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline"
        },
        {
          "outcome": "standard",
          "note": "after 5 years, without relapse, no current use"
        }
      ],
      "source": "p. 17"
    },
    "osteoarthritis": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 17",
      "note": "Osteoarthritis / mild rheumatoid with no limitations: accept"
    },
    "ra_mild": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 17",
      "note": "Osteoarthritis / mild rheumatoid with no limitations: accept"
    },
    "rheumatoid_arthritis": {
      "rules": [
        {
          "outcome": "standard",
          "note": "mild, no limitations"
        },
        {
          "outcome": "decline",
          "note": "moderate or severe (Humira, Enbrel, prednisone)",
          "conditional": true
        }
      ],
      "source": "p. 17"
    },
    "psoriatic_arthritis": {
      "rules": [
        {
          "outcome": "standard",
          "note": "mild, no limitations"
        },
        {
          "outcome": "decline",
          "note": "moderate or severe (Humira, Enbrel, prednisone)",
          "conditional": true
        }
      ],
      "source": "p. 17"
    },
    "asthma": {
      "rules": [
        {
          "outcome": "standard",
          "note": "mild/moderate, ages 6–75"
        }
      ],
      "source": "p. 17"
    },
    "asthma_chronic": {
      "rules": [
        {
          "outcome": "standard",
          "note": "mild/moderate"
        },
        {
          "outcome": "decline",
          "note": "severe / hospitalization",
          "conditional": true
        }
      ],
      "source": "p. 17–18"
    },
    "high_blood_pressure": {
      "rules": [
        {
          "outcome": "standard",
          "note": "controlled"
        }
      ],
      "source": "p. 18; p. 19"
    },
    "skin_cancer_basal": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 18"
    },
    "cancer": {
      "rules": [
        {
          "withinYears": 10,
          "outcome": "decline",
          "note": "all other cancers"
        },
        {
          "outcome": "standard",
          "note": "treatment completed over 10 years ago, no recurrence"
        }
      ],
      "source": "p. 18",
      "note": "Cancer accepted only if treatment completed 10+ years ago with no recurrence or recommended treatment; Hodgkin's and leukemia: decline"
    },
    "melanoma": {
      "rules": [
        {
          "withinYears": 10,
          "outcome": "decline",
          "note": "all other cancers"
        },
        {
          "outcome": "standard",
          "note": "treatment completed over 10 years ago, no recurrence"
        }
      ],
      "source": "p. 18",
      "note": "Cancer accepted only if treatment completed 10+ years ago with no recurrence or recommended treatment; Hodgkin's and leukemia: decline"
    },
    "copd": {
      "rules": [
        {
          "outcome": "decline"
        }
      ],
      "source": "p. 18",
      "note": "COPD: decline for Advantage Plus II and SMART UL"
    },
    "ulcerative_colitis": {
      "rules": [
        {
          "outcome": "standard",
          "note": "mild to moderate, intermittent"
        },
        {
          "outcome": "decline",
          "note": "if not mild/moderate intermittent",
          "conditional": true
        }
      ],
      "source": "p. 18"
    },
    "crohns_colitis": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "needs over 5 years in remission"
        },
        {
          "outcome": "standard",
          "note": "over 5 years in remission"
        }
      ],
      "source": "p. 18",
      "note": "Years = time in remission"
    },
    "depression_anxiety": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "onset must be 1+ year ago"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "under age 25, hospitalization, or time off work",
          "conditional": true
        }
      ],
      "source": "p. 18",
      "note": "Mild, over age 25, onset 1+ year ago, no hospitalization or time off work: accept"
    },
    "depression": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "onset must be 1+ year ago"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "under age 25, hospitalization, or time off work",
          "conditional": true
        }
      ],
      "source": "p. 18",
      "note": "Mild, over age 25, onset 1+ year ago, no hospitalization or time off work: accept"
    },
    "anxiety": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "onset must be 1+ year ago"
        },
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "under age 25, hospitalization, or time off work",
          "conditional": true
        }
      ],
      "source": "p. 18",
      "note": "Mild, over age 25, onset 1+ year ago, no hospitalization or time off work: accept"
    },
    "diabetes_oral": {
      "rules": [
        {
          "outcome": "standard",
          "note": "oral meds or diet, good control"
        },
        {
          "outcome": "decline",
          "note": "poor control, smoker 1+ pack/day, build over the diabetes ratings, or current age 20–29 with 5+ years since diagnosis",
          "conditional": true
        }
      ],
      "source": "p. 18",
      "note": "Type 2: current age 30+ any duration, or age 20–29 under 5 years since diagnosis"
    },
    "diabetes_uncomplicated": {
      "rules": [
        {
          "outcome": "standard",
          "note": "oral meds or diet, good control"
        },
        {
          "outcome": "decline",
          "note": "poor control, smoker 1+ pack/day, build over the diabetes ratings, or current age 20–29 with 5+ years since diagnosis",
          "conditional": true
        }
      ],
      "source": "p. 18",
      "note": "Type 2: current age 30+ any duration, or age 20–29 under 5 years since diagnosis"
    },
    "diabetes_insulin": {
      "rules": [
        {
          "outcome": "decline",
          "note": "insulin"
        }
      ],
      "source": "p. 18",
      "note": "Insulin: decline for Advantage Plus II, SMART UL and Your Term"
    },
    "seizures": {
      "rules": [
        {
          "withinYears": 2,
          "outcome": "decline",
          "note": "needs 2 years seizure-free"
        },
        {
          "outcome": "standard",
          "note": "controlled on meds, no complications"
        }
      ],
      "source": "p. 19",
      "note": "Years = time since last seizure"
    },
    "fibromyalgia": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "with depression or not working full-time",
          "conditional": true
        }
      ],
      "source": "p. 19"
    },
    "gastric_bypass": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline"
        },
        {
          "outcome": "standard",
          "note": "after 1 year, weight stabilized"
        }
      ],
      "source": "p. 19"
    },
    "gout": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "kidney_stones": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "thyroid": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "tuberculosis": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "lupus_discoid": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "hepatitis_a": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "heart_murmur": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "sleep_apnea": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "sleep_apnea_controlled": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "sarcoid_nonpulm": {
      "rules": [
        {
          "outcome": "standard"
        }
      ],
      "source": "pp. 19–20",
      "note": "Accept (thyroid: treated, no symptoms; TB: treatment completed, inactive; murmur: innocent; sleep apnea: treated and controlled; hep A: recovered; sarcoid: localized non-pulmonary)"
    },
    "sarcoidosis": {
      "rules": [
        {
          "outcome": "standard",
          "note": "localized, non-pulmonary"
        },
        {
          "outcome": "decline",
          "note": "pulmonary",
          "conditional": true
        }
      ],
      "source": "p. 20"
    },
    "narcolepsy": {
      "rules": [
        {
          "outcome": "standard",
          "note": "occasional episodes"
        },
        {
          "outcome": "decline",
          "note": "if not occasional",
          "conditional": true
        }
      ],
      "source": "p. 19"
    },
    "marijuana": {
      "rules": [
        {
          "outcome": "standard",
          "note": "up to 6 days a week"
        },
        {
          "outcome": "refer",
          "note": "daily or medical use: individual consideration",
          "conditional": true
        }
      ],
      "source": "p. 19"
    },
    "wheelchair_not_confined": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "permanent / ongoing use due to illness, disease or injury",
          "conditional": true
        }
      ],
      "source": "p. 20"
    },
    "felony": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "on probation/parole or within 1 year after it ends"
        },
        {
          "outcome": "refer",
          "note": "no jail time: individual consideration 1 year after probation"
        },
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "if jail time served: consider 5 years after parole",
          "conditional": true
        }
      ],
      "source": "p. 17",
      "note": "Years = since end of probation / parole"
    },
    "probation_parole": {
      "rules": [
        {
          "outcome": "decline",
          "note": "on probation/parole, incarcerated, or charges pending"
        }
      ],
      "source": "p. 17"
    },
    "felony_charges_pending": {
      "rules": [
        {
          "outcome": "decline",
          "note": "on probation/parole, incarcerated, or charges pending"
        }
      ],
      "source": "p. 17"
    },
    "incarcerated": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "consider 5 years after parole"
        },
        {
          "outcome": "refer",
          "note": "individual consideration"
        }
      ],
      "source": "p. 17",
      "note": "Years = since parole ended"
    },
    "dui": {
      "rules": [
        {
          "withinYears": 1,
          "outcome": "decline",
          "note": "DUI within 12 months"
        },
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 17"
    },
    "dui_multiple": {
      "rules": [
        {
          "withinYears": 5,
          "outcome": "decline",
          "note": "2 DUIs, last within 5 years"
        },
        {
          "outcome": "refer",
          "note": "more than 2 DUIs: call Risk Assessment Line",
          "conditional": true
        },
        {
          "outcome": "standard"
        }
      ],
      "source": "p. 17"
    },
    "hazardous_avocation": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "may not qualify for Non-Medical (scuba, racing, skydiving, climbing, private aviation); questionnaire required",
          "conditional": true
        }
      ],
      "source": "p. 5"
    },
    "pilot": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "may not qualify for Non-Medical (scuba, racing, skydiving, climbing, private aviation); questionnaire required",
          "conditional": true
        }
      ],
      "source": "p. 5"
    },
    "military": {
      "rules": [
        {
          "outcome": "standard"
        },
        {
          "outcome": "decline",
          "note": "deployed or notice of deployment",
          "conditional": true
        }
      ],
      "source": "p. 4"
    },
    "foreign_national": {
      "rules": [
        {
          "outcome": "refer",
          "note": "ages 18–70 with a valid Green Card or select visas; see Immigration Guidelines"
        }
      ],
      "source": "p. 4"
    },
    "foreign_travel": {
      "rules": [
        {
          "outcome": "standard",
          "note": "up to 12 weeks"
        },
        {
          "outcome": "decline",
          "note": "planning to reside abroad indefinitely",
          "conditional": true
        }
      ],
      "source": "p. 4"
    }
  },
  "medications": {
    "antipsychotic": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: psychotic disorder (Abilify, Geodon, Risperidone, Serzone, Zyprexa)",
      "source": "p. 21"
    },
    "amiodarone": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: arrhythmia",
      "source": "p. 21"
    },
    "chemo": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: cancer (anastrozole, Arimidex, Casodex, Femara, Hydrea, Lupron, tamoxifen)",
      "source": "p. 21"
    },
    "serious_copd_inhalers": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: serious COPD",
      "source": "p. 21"
    },
    "antabuse": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: alcohol/drugs",
      "source": "p. 21"
    },
    "donepezil": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: dementia (Aricept, Exelon, Namenda)",
      "source": "p. 21"
    },
    "chf_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: CHF",
      "source": "p. 21"
    },
    "kidney_failure_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: kidney disease/failure",
      "source": "p. 21"
    },
    "plavix": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: heart disease, stroke/TIA, PVD/PAD",
      "source": "p. 21"
    },
    "digoxin": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: heart failure / arrhythmia",
      "source": "p. 21"
    },
    "severe_htn_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: severe hypertension",
      "source": "p. 21"
    },
    "nitroglycerin": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: angina",
      "source": "p. 21"
    },
    "lithium": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: bipolar disorder",
      "source": "p. 21"
    },
    "carbidopa": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: Parkinson's",
      "source": "p. 21"
    },
    "hepatitis_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: hepatitis",
      "source": "p. 21"
    },
    "lupus_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: systemic lupus",
      "source": "p. 21"
    },
    "als_meds": {
      "outcome": "decline",
      "note": "Not eligible for non-medical: ALS",
      "source": "p. 21"
    },
    "insulin": {
      "outcome": "decline",
      "note": "insulin: decline for Advantage Plus II and SMART UL",
      "source": "p. 18"
    }
  },
  "tobacco": {
    "note": "Non-tobacco = no nicotine products in 12 months",
    "source": "p. 6"
  },
  "notes": "Non-Medical: application, Pharmacy and MIB check; approve or decline (p. 6). Impairments rated over 200% mortality are declined for Non-Medical; multiple impairments may not qualify, e.g. chronic kidney disease with high blood pressure, depression/anxiety with alcohol abuse, diabetes with CAD/CVD or kidney disease (p. 15). Medications on p. 21 are not eligible for non-medical coverage. Juvenile build chart (ages 0–15, p. 11) is not applied here; adult non-medical chart is used. Guide is dated March 2020; confirm against the current guide."
});
