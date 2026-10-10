// Ethos — transcribed from Ethos Underwriting and Product Guidelines (2026), IUL pages. Regenerate, don't hand-edit.
UW.addProduct({
 "id": "ethos-accumulation-iul",
 "carrier": "Ethos (North American)",
 "product": "Accumulation IUL",
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
  "min": 18,
  "max": 65,
  "note": "Age last birthday",
  "source": "p. 3"
 },
 "faceAmount": {
  "min": 25000,
  "max": 2000000,
  "bands": [
   {
    "min": 18,
    "max": 50,
    "face": 2000000
   },
   {
    "min": 51,
    "max": 60,
    "face": 1000000
   },
   {
    "min": 61,
    "max": 65,
    "face": 250000
   }
  ],
  "source": "p. 3"
 },
 "statesNotAvailable": [
  "CA",
  "OR",
  "NY"
 ],
 "tobacco": {
  "outcome": "standard",
  "note": "Tobacco: Preferred or Standard",
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
 "notes": "80% instant decision. Select agents only. Approve/decline shown (guide classes: Preferred Plus to Standard with table ratings). BMI under 18 or over 48.9 = knockout (half of any weight lost in 12 months is added back). Average BP and total cholesterol over 350 knockouts not on the form. Face limited to a multiple of household income. Ineligible applicants route to manual underwriting or TruStage Advantage WL. Hematuria or protein in urine within 6 months: knockout.",
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
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Alcohol abuse within 5 years"
  },
  "drug_abuse": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Illegal drug use or drug abuse within 10 years"
  },
  "illegal_drugs": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Illegal drug use or drug abuse within 10 years"
  },
  "diabetes_insulin": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "decline",
     "note": "diagnosed in the past 6 months"
    },
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
     "note": "A1C over 9.5 (under age 41), no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: diagnosed in 6 months, under 30, complications, A1C over 9.5 and under 41, no checkup in 12 months, or BMI over 41.49"
  },
  "disability_benefits": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "unable to work 10+ consecutive days in 12 months",
     "withinYears": 1
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4"
  },
  "hiv_aids": {
   "rules": [
    {
     "outcome": "refer",
     "note": "listed as \"not applicable\" in the knockout table: confirm with North American"
    }
   ],
   "source": "p. 4"
  },
  "suicide_attempt": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "multiple attempts within 5 years, or suicidal thoughts in 6 months",
     "withinYears": 5
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4"
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
     "outcome": "standard",
     "note": "benign/simple fatty liver excepted"
    }
   ],
   "source": "p. 4"
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
  "dui": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Major violations within 5 years"
  },
  "dui_multiple": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Major violations within 5 years"
  },
  "license_suspended_dui": {
   "rules": [
    {
     "withinYears": 5,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Major violations within 5 years"
  },
  "license_suspended": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "License suspended or revoked within the past year"
  },
  "license_suspended_other": {
   "rules": [
    {
     "withinYears": 1,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "License suspended or revoked within the past year"
  },
  "diabetes_oral": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "decline",
     "note": "diagnosed in the past 6 months"
    },
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
     "note": "A1C over 9.5 (under age 41), no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: diagnosed in 6 months, under 30, complications, A1C over 9.5 and under 41, no checkup in 12 months, or BMI over 41.49"
  },
  "diabetes_uncomplicated": {
   "rules": [
    {
     "withinYears": 0.5,
     "outcome": "decline",
     "note": "diagnosed in the past 6 months"
    },
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
     "note": "A1C over 9.5 (under age 41), no checkup in 12 months, or BMI over 41.49"
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4",
   "note": "Knockout: diagnosed in 6 months, under 30, complications, A1C over 9.5 and under 41, no checkup in 12 months, or BMI over 41.49"
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
  "cancer_thyroid": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excluded from the cancer knockout"
    }
   ],
   "source": "p. 4",
   "note": "Thyroid and testicular cancer are excepted"
  },
  "cancer_testicular": {
   "rules": [
    {
     "outcome": "standard",
     "note": "excluded from the cancer knockout"
    }
   ],
   "source": "p. 4",
   "note": "Thyroid and testicular cancer are excepted"
  },
  "aneurysm": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "aneurysm_aaa_uncorrected": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "aneurysm_aaa_corrected": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "aneurysm_cerebral_uncorrected": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "aneurysm_cerebral_corrected": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "aneurysm_thoracic_corrected": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Cardiovascular knockout includes aneurysm"
  },
  "sarcoidosis": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Respiratory knockout includes sarcoidosis"
  },
  "sarcoid_pulm": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Respiratory knockout includes sarcoidosis"
  },
  "sarcoid_pulm_early": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Respiratory knockout includes sarcoidosis"
  },
  "sarcoid_pulm_advanced": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Respiratory knockout includes sarcoidosis"
  },
  "mctd": {
   "rules": [
    {
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "Mixed connective tissue syndrome"
  },
  "felony": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 4",
   "note": "A felony, 3+ misdemeanors, or probation/parole within 10 years"
  },
  "misdemeanor": {
   "rules": [
    {
     "outcome": "decline",
     "conditional": true,
     "note": "3 or more misdemeanors within 10 years",
     "withinYears": 10
    },
    {
     "outcome": "standard"
    }
   ],
   "source": "p. 4"
  },
  "probation_parole": {
   "rules": [
    {
     "withinYears": 10,
     "outcome": "decline"
    }
   ],
   "source": "p. 4"
  }
 },
 "medications": {}
});
