// Ethos — transcribed from Ethos Underwriting and Product Guidelines (2026), IUL pages. Regenerate, don't hand-edit.
UW.addProduct({
 "id": "ethos-protection-iul",
 "carrier": "Ethos (Ameritas)",
 "product": "Ethos Protection IUL",
 "type": "iul",
 "underwriting": "accelerated",
 "bestOutcome": "standard",
 "guide": {
  "document": "Ethos Underwriting and Product Guidelines (IUL pages)",
  "revision": "2026",
  "effective": "2026",
  "lastReviewed": "2026-10-10"
 },
 "issueAges": {
  "min": 20,
  "max": 65,
  "note": "Age nearest",
  "source": "p. 3"
 },
 "faceAmount": {
  "min": 25000,
  "max": 1000000,
  "bands": [
   {
    "min": 20,
    "max": 50,
    "face": 1000000
   },
   {
    "min": 51,
    "max": 60,
    "face": 500000
   },
   {
    "min": 61,
    "max": 65,
    "face": 350000
   }
  ],
  "source": "p. 3"
 },
 "statesNotAvailable": [
  "NY"
 ],
 "tobacco": {
  "outcome": "standard",
  "note": "Preferred Tobacco or Standard Tobacco",
  "source": "p. 3"
 },
 "build": {
  "rows": [
   {
    "h": 56,
    "min": 81,
    "max": {
     "standard": 218
    }
   },
   {
    "h": 57,
    "min": 84,
    "max": {
     "standard": 225
    }
   },
   {
    "h": 58,
    "min": 87,
    "max": {
     "standard": 233
    }
   },
   {
    "h": 59,
    "min": 90,
    "max": {
     "standard": 242
    }
   },
   {
    "h": 60,
    "min": 93,
    "max": {
     "standard": 250
    }
   },
   {
    "h": 61,
    "min": 96,
    "max": {
     "standard": 258
    }
   },
   {
    "h": 62,
    "min": 99,
    "max": {
     "standard": 267
    }
   },
   {
    "h": 63,
    "min": 102,
    "max": {
     "standard": 276
    }
   },
   {
    "h": 64,
    "min": 105,
    "max": {
     "standard": 284
    }
   },
   {
    "h": 65,
    "min": 109,
    "max": {
     "standard": 293
    }
   },
   {
    "h": 66,
    "min": 112,
    "max": {
     "standard": 302
    }
   },
   {
    "h": 67,
    "min": 115,
    "max": {
     "standard": 312
    }
   },
   {
    "h": 68,
    "min": 119,
    "max": {
     "standard": 321
    }
   },
   {
    "h": 69,
    "min": 122,
    "max": {
     "standard": 331
    }
   },
   {
    "h": 70,
    "min": 126,
    "max": {
     "standard": 340
    }
   },
   {
    "h": 71,
    "min": 130,
    "max": {
     "standard": 350
    }
   },
   {
    "h": 72,
    "min": 133,
    "max": {
     "standard": 360
    }
   },
   {
    "h": 73,
    "min": 137,
    "max": {
     "standard": 370
    }
   },
   {
    "h": 74,
    "min": 141,
    "max": {
     "standard": 380
    }
   },
   {
    "h": 75,
    "min": 145,
    "max": {
     "standard": 391
    }
   },
   {
    "h": 76,
    "min": 148,
    "max": {
     "standard": 401
    }
   },
   {
    "h": 77,
    "min": 152,
    "max": {
     "standard": 412
    }
   },
   {
    "h": 78,
    "min": 156,
    "max": {
     "standard": 423
    }
   },
   {
    "h": 79,
    "min": 160,
    "max": {
     "standard": 434
    }
   },
   {
    "h": 80,
    "min": 164,
    "max": {
     "standard": 445
    }
   },
   {
    "h": 81,
    "min": 168,
    "max": {
     "standard": 456
    }
   },
   {
    "h": 82,
    "min": 173,
    "max": {
     "standard": 467
    }
   },
   {
    "h": 83,
    "min": 177,
    "max": {
     "standard": 479
    }
   },
   {
    "h": 84,
    "min": 181,
    "max": {
     "standard": 490
    }
   }
  ],
  "source": "p. 4",
  "note": "Knockout: BMI under 18 or over 48.9"
 },
 "notes": "90%+ instant decision. Select agents only. Approve/decline shown (guide classes: Preferred Plus to Standard with table ratings). BMI under 18 or over 48.9 = knockout (half of any weight lost in 12 months is added back). Average BP and total cholesterol over 350 knockouts not on the form. Face limited to a multiple of household income. Ineligible applicants route to manual underwriting or TruStage Advantage WL.",
 "conditions": {
  "lupus": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Lupus/SLE, scleroderma"
  },
  "scleroderma": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Lupus/SLE, scleroderma"
  },
  "cancer": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cancers diagnosed within 10 years, excluding skin cancers (basal, squamous, melanoma) and some lymphoma"
  },
  "cancer_active": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cancers diagnosed within 10 years, excluding skin cancers (basal, squamous, melanoma) and some lymphoma"
  },
  "cancer_untreated": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cancers diagnosed within 10 years, excluding skin cancers (basal, squamous, melanoma) and some lymphoma"
  },
  "cancer_metastatic": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cancers diagnosed within 10 years, excluding skin cancers (basal, squamous, melanoma) and some lymphoma"
  },
  "cancer_lymphoma": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "some lymphoma cases are excepted",
     "withinYears": 10
    }
   ],
   "source": "p. 9, 12",
   "note": "Some cases of lymphoma are excepted from the 10-year cancer knockout"
  },
  "hodgkins": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "some lymphoma cases are excepted",
     "withinYears": 10
    }
   ],
   "source": "p. 9, 12",
   "note": "Some cases of lymphoma are excepted from the 10-year cancer knockout"
  },
  "melanoma": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excluded from the cancer knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Skin cancers (basal, squamous, melanoma) are excluded from the cancer knockout"
  },
  "chf": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_failure_other": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_valve": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_valve_replacement": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "mitral_insufficiency": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "mitral_stenosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "cardiomyopathy": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "cad": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_attack": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_attacks_multiple": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_bypass": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_stent": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "cardiac_procedure": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_surgery": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "angina": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "heart_blockage": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "pvd": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "pulmonary_hypertension": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "afib": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "arrhythmia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "defibrillator": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "pacemaker": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "circulatory_disorder": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Cardiovascular disease: heart disease, heart failure, valve disorder, cardiomyopathy, CAD, PVD, pulmonary hypertension, carotid artery disease"
  },
  "alcohol_abuse": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Illegal drug use or drug/alcohol abuse in the past 10 years"
  },
  "drug_abuse": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Illegal drug use or drug/alcohol abuse in the past 10 years"
  },
  "illegal_drugs": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Illegal drug use or drug/alcohol abuse in the past 10 years"
  },
  "diabetes_insulin": {
   "rules": [
    {
     "ageRange": [
      0,
      29
     ],
     "outcome": "decline",
     "note": "diabetic under age 30"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "A1C over 9.5, no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: under age 30, complications (eyes, kidneys, neuropathy, amputation), A1C over 9.5 in 12 months, no testing/checkup in 12 months, or BMI over 41.49"
  },
  "disability_benefits": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "unable to work 30+ consecutive days in the past 12 months",
     "withinYears": 1
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9"
  },
  "hiv_aids": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cases"
  },
  "suicide_attempt": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Suicidal thoughts or attempt within 10 years"
  },
  "psych_hospitalization": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Hospitalization or inpatient treatment for a mental disorder in the last 5 years"
  },
  "bipolar": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "depression_severe": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "depression": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "depression_anxiety": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "anxiety": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "ptsd": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "schizophrenia": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Knockout if: suicidal thoughts/attempt within 10 yrs, hospitalization/inpatient treatment in 5 yrs, or disability/missed work (10+ days) in 12 months"
  },
  "stroke": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "tia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "alzheimers_dementia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "memory_loss": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "als": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "parkinsons": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "huntingtons": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "cerebral_palsy": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "muscular_dystrophy": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "neuropathy": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "encephalitis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "hydrocephalus": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "myasthenia_gravis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "neurofibromatosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "spina_bifida": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "paralysis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "paraplegia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "quadriplegia": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "muscle_disorder": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "wernicke_korsakoff": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "mental_incapacity": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Neurological disease or brain disorder: any other than epilepsy/seizures, MS, Bell's palsy, restless leg, narcolepsy, vertigo, migraine"
  },
  "seizures": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excepted from the neurological knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Excepted from the neurological knockout"
  },
  "ms": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excepted from the neurological knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Excepted from the neurological knockout"
  },
  "bells_palsy": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excepted from the neurological knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Excepted from the neurological knockout"
  },
  "restless_leg": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excepted from the neurological knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Excepted from the neurological knockout"
  },
  "narcolepsy": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excepted from the neurological knockout"
    }
   ],
   "source": "p. 9, 12",
   "note": "Excepted from the neurological knockout"
  },
  "cirrhosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "cirrhosis_early": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "cirrhosis_advanced": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "liver_disease": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "liver_failure": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "fatty_liver": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "esophageal_varices": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Liver disease: any other than recovered hepatitis A or recovered hepatitis B/C (past 5 years)"
  },
  "hepatitis_b": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "unless recovered (past 5 years)"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Recovered hepatitis B/C (past 5 years) is excepted from the liver knockout"
  },
  "hepatitis_c": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "unless recovered (past 5 years)"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Recovered hepatitis B/C (past 5 years) is excepted from the liver knockout"
  },
  "hepatitis": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "unless recovered (past 5 years)"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Recovered hepatitis B/C (past 5 years) is excepted from the liver knockout"
  },
  "kidney_failure": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "polycystic_kidney": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "kidney_disease": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "kidney_disease_early": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "kidney_disease_stage3": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "kidney_disease_advanced": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "dialysis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Kidney disease (other than kidney stones)"
  },
  "copd": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "emphysema": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "chronic_bronchitis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "pulmonary_fibrosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "cystic_fibrosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "asthma_severe": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Respiratory knockout (excludes treated obstructive sleep apnea, mild asthma)"
  },
  "sleep_apnea": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "central sleep apnea"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "Central sleep apnea is a knockout; treated obstructive sleep apnea is not"
  },
  "blood_clots": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "pulmonary embolism within 5 years, or more than one",
     "withinYears": 5
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 9, 12",
   "note": "A single pulmonary embolism more than 5 years ago is excepted"
  },
  "organ_transplant": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cases"
  },
  "kidney_transplant": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "All cases"
  },
  "tests_pending": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Recommended testing or treatment not completed, or awaiting results"
  },
  "surgery_pending": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 9, 12",
   "note": "Recommended testing or treatment not completed, or awaiting results"
  },
  "dui": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 7, 10",
   "note": "Eligibility: no major violations (DUI/DWI, reckless driving, speed >90, injury accident, driving suspended) within 5 years"
  },
  "dui_multiple": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 7, 10",
   "note": "Eligibility: no major violations (DUI/DWI, reckless driving, speed >90, injury accident, driving suspended) within 5 years"
  },
  "license_suspended_dui": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 7, 10",
   "note": "Eligibility: no major violations (DUI/DWI, reckless driving, speed >90, injury accident, driving suspended) within 5 years"
  },
  "license_suspended": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "decline"
    }
   ],
   "source": "p. 7, 10",
   "note": "Valid license not suspended or revoked"
  },
  "license_suspended_other": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "decline"
    }
   ],
   "source": "p. 7, 10",
   "note": "Valid license not suspended or revoked"
  },
  "diabetes_oral": {
   "rules": [
    {
     "ageRange": [
      0,
      29
     ],
     "outcome": "decline",
     "note": "diabetic under age 30"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "A1C over 9.5, no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: under age 30, complications (eyes, kidneys, neuropathy, amputation), A1C over 9.5 in 12 months, no testing/checkup in 12 months, or BMI over 41.49"
  },
  "diabetes_uncomplicated": {
   "rules": [
    {
     "ageRange": [
      0,
      29
     ],
     "outcome": "decline",
     "note": "diabetic under age 30"
    },
    {
     "outcome": "decline",
     "conditional": true,
     "note": "A1C over 9.5, no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: under age 30, complications (eyes, kidneys, neuropathy, amputation), A1C over 9.5 in 12 months, no testing/checkup in 12 months, or BMI over 41.49"
  },
  "diabetes_complications": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: under age 30, complications (eyes, kidneys, neuropathy, amputation), A1C over 9.5 in 12 months, no testing/checkup in 12 months, or BMI over 41.49"
  },
  "felony": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Felonies within 10 years (some older felonies considered individually)"
  },
  "misdemeanor": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "multiple recent misdemeanors"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4"
  }
 },
 "medications": {}
});
