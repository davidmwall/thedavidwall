/*
 * Shared vocabulary of conditions and medications.
 *
 * Carrier files reference these IDs, so every carrier is searched with the same
 * terms. Add aliases freely (abbreviations, slang, brand names) — they only
 * improve search. Add a new ID when a carrier guide treats something as its own
 * line item (e.g. "diabetes with insulin" vs "diabetes, oral meds").
 */
UW.registerConditions([
  // --- Knockout / health-status questions -----------------------------------
  { id: 'hospitalized_now', category: 'Current status', name: 'Currently hospitalized / in hospice', aliases: ['hospice', 'inpatient', 'in the hospital'] },
  { id: 'nursing_home', category: 'Current status', name: 'Nursing home / assisted living', aliases: ['skilled nursing', 'snf', 'assisted living facility', 'long term care facility'] },
  { id: 'terminal_illness', category: 'Current status', name: 'Terminal illness', aliases: ['terminal', 'less than 12 months to live'] },
  { id: 'adl_assistance', category: 'Current status', name: 'Needs help with ADLs', aliases: ['activities of daily living', 'adl', 'needs help bathing', 'needs help dressing'] },
  { id: 'wheelchair', category: 'Current status', name: 'Wheelchair / motorized scooter', aliases: ['scooter', 'mobility device', 'wheel chair'] },
  { id: 'oxygen', category: 'Current status', name: 'Uses oxygen', aliases: ['home oxygen', 'o2', 'oxygen tank', 'nebulizer'] },
  { id: 'organ_transplant_pending', category: 'Current status', name: 'Awaiting organ transplant', aliases: ['transplant list'] },
  { id: 'surgery_pending', category: 'Current status', name: 'Pending surgery / tests not completed', aliases: ['pending tests', 'scheduled surgery', 'awaiting results'] },
  { id: 'dialysis', category: 'Kidney', name: 'Kidney dialysis', aliases: ['dialysis', 'hemodialysis', 'esrd', 'end stage renal disease'] },

  // --- Heart & circulatory --------------------------------------------------
  { id: 'heart_attack', category: 'Heart', name: 'Heart attack', aliases: ['mi', 'myocardial infarction', 'cardiac arrest'] },
  { id: 'angina', category: 'Heart', name: 'Angina', aliases: ['chest pain'] },
  { id: 'cad', category: 'Heart', name: 'Coronary artery disease', aliases: ['cad', 'heart disease', 'blocked arteries', 'atherosclerosis'] },
  { id: 'heart_stent', category: 'Heart', name: 'Heart stent / angioplasty', aliases: ['stent', 'angioplasty', 'pci'] },
  { id: 'heart_bypass', category: 'Heart', name: 'Heart bypass surgery', aliases: ['cabg', 'bypass', 'open heart surgery'] },
  { id: 'chf', category: 'Heart', name: 'Congestive heart failure', aliases: ['chf', 'heart failure', 'cardiomyopathy'] },
  { id: 'afib', category: 'Heart', name: 'Atrial fibrillation', aliases: ['afib', 'a-fib', 'a fib', 'irregular heartbeat', 'arrhythmia'] },
  { id: 'pacemaker', category: 'Heart', name: 'Pacemaker / defibrillator', aliases: ['icd', 'defibrillator', 'aicd'] },
  { id: 'heart_valve', category: 'Heart', name: 'Heart valve disorder / replacement', aliases: ['valve replacement', 'mitral valve', 'aortic stenosis', 'tavr', 'heart murmur'] },
  { id: 'high_blood_pressure', category: 'Heart', name: 'High blood pressure', aliases: ['hypertension', 'htn', 'hbp'] },
  { id: 'high_cholesterol', category: 'Heart', name: 'High cholesterol', aliases: ['hyperlipidemia', 'cholesterol', 'dyslipidemia'] },
  { id: 'stroke', category: 'Circulatory', name: 'Stroke', aliases: ['cva', 'cerebrovascular accident', 'brain bleed'] },
  { id: 'tia', category: 'Circulatory', name: 'TIA (mini-stroke)', aliases: ['tia', 'mini stroke', 'transient ischemic attack'] },
  { id: 'aneurysm', category: 'Circulatory', name: 'Aneurysm', aliases: ['aortic aneurysm', 'aaa', 'brain aneurysm'] },
  { id: 'pvd', category: 'Circulatory', name: 'Peripheral vascular disease', aliases: ['pvd', 'pad', 'peripheral artery disease', 'poor circulation'] },
  { id: 'blood_clots', category: 'Circulatory', name: 'Blood clots (DVT / PE)', aliases: ['dvt', 'pe', 'pulmonary embolism', 'deep vein thrombosis', 'blood clot'] },

  // --- Diabetes & endocrine -------------------------------------------------
  { id: 'diabetes_oral', category: 'Diabetes', name: 'Diabetes — oral meds / diet controlled', aliases: ['type 2 diabetes', 't2d', 'diabetes', 'pre diabetes', 'non insulin diabetes'] },
  { id: 'diabetes_insulin', category: 'Diabetes', name: 'Diabetes — insulin', aliases: ['insulin dependent', 'type 1 diabetes', 't1d', 'iddm', 'insulin diabetes'] },
  { id: 'diabetes_complications', category: 'Diabetes', name: 'Diabetes with complications', aliases: ['diabetic neuropathy', 'diabetic retinopathy', 'diabetic nephropathy', 'diabetic amputation', 'diabetic coma', 'insulin shock'] },
  { id: 'thyroid', category: 'Endocrine', name: 'Thyroid disorder', aliases: ['hypothyroid', 'hyperthyroid', 'hashimotos', 'graves'] },

  // --- Lung -----------------------------------------------------------------
  { id: 'copd', category: 'Lung', name: 'COPD / emphysema / chronic bronchitis', aliases: ['copd', 'emphysema', 'chronic bronchitis'] },
  { id: 'asthma', category: 'Lung', name: 'Asthma', aliases: ['inhaler'] },
  { id: 'sleep_apnea', category: 'Lung', name: 'Sleep apnea', aliases: ['cpap', 'osa', 'obstructive sleep apnea'] },
  { id: 'pulmonary_fibrosis', category: 'Lung', name: 'Pulmonary fibrosis', aliases: ['ipf', 'lung fibrosis'] },
  { id: 'cystic_fibrosis', category: 'Lung', name: 'Cystic fibrosis', aliases: ['cf'] },

  // --- Cancer ---------------------------------------------------------------
  { id: 'cancer', category: 'Cancer', name: 'Cancer (internal / non-skin)', aliases: ['tumor', 'malignancy', 'chemo', 'chemotherapy', 'radiation', 'carcinoma', 'leukemia', 'lymphoma', 'melanoma'] },
  { id: 'cancer_metastatic', category: 'Cancer', name: 'Cancer — metastatic / recurrent / multiple', aliases: ['metastasized', 'stage 4', 'recurrence', 'spread'] },
  { id: 'skin_cancer_basal', category: 'Cancer', name: 'Basal / squamous cell skin cancer', aliases: ['basal cell', 'squamous cell', 'skin cancer'] },

  // --- Kidney & liver -------------------------------------------------------
  { id: 'kidney_disease', category: 'Kidney', name: 'Chronic kidney disease', aliases: ['ckd', 'renal insufficiency', 'kidney failure', 'renal disease'] },
  { id: 'kidney_stones', category: 'Kidney', name: 'Kidney stones', aliases: [] },
  { id: 'cirrhosis', category: 'Liver', name: 'Cirrhosis / liver failure', aliases: ['liver disease', 'liver failure', 'cirrhosis'] },
  { id: 'hepatitis_c', category: 'Liver', name: 'Hepatitis C', aliases: ['hep c', 'hcv'] },
  { id: 'hepatitis_b', category: 'Liver', name: 'Hepatitis B', aliases: ['hep b', 'hbv'] },

  // --- Neuro / cognitive ----------------------------------------------------
  { id: 'alzheimers_dementia', category: 'Neuro', name: "Alzheimer's / dementia", aliases: ['dementia', 'alzheimers', 'memory loss', 'cognitive impairment'] },
  { id: 'parkinsons', category: 'Neuro', name: "Parkinson's disease", aliases: ['parkinsons'] },
  { id: 'ms', category: 'Neuro', name: 'Multiple sclerosis', aliases: ['ms'] },
  { id: 'als', category: 'Neuro', name: 'ALS (Lou Gehrig’s)', aliases: ['als', 'lou gehrigs'] },
  { id: 'seizures', category: 'Neuro', name: 'Seizures / epilepsy', aliases: ['epilepsy', 'convulsions'] },
  { id: 'neuropathy', category: 'Neuro', name: 'Neuropathy (non-diabetic)', aliases: ['peripheral neuropathy', 'nerve damage'] },
  { id: 'muscular_dystrophy', category: 'Neuro', name: 'Muscular dystrophy', aliases: ['md'] },
  { id: 'cerebral_palsy', category: 'Neuro', name: 'Cerebral palsy', aliases: ['cp'] },

  // --- Mental health & substance --------------------------------------------
  { id: 'depression_anxiety', category: 'Mental health', name: 'Depression / anxiety (outpatient)', aliases: ['depression', 'anxiety', 'panic attacks', 'ptsd'] },
  { id: 'bipolar', category: 'Mental health', name: 'Bipolar disorder', aliases: ['manic depression', 'bipolar'] },
  { id: 'schizophrenia', category: 'Mental health', name: 'Schizophrenia', aliases: ['psychosis', 'schizoaffective'] },
  { id: 'psych_hospitalization', category: 'Mental health', name: 'Psychiatric hospitalization', aliases: ['inpatient psych', 'mental hospital', 'suicide attempt'] },
  { id: 'alcohol_abuse', category: 'Substance', name: 'Alcohol abuse / treatment', aliases: ['alcoholism', 'aa', 'rehab', 'alcohol treatment'] },
  { id: 'drug_abuse', category: 'Substance', name: 'Drug abuse / treatment', aliases: ['substance abuse', 'drug rehab', 'opioid use disorder', 'suboxone'] },
  { id: 'marijuana', category: 'Substance', name: 'Marijuana use', aliases: ['cannabis', 'thc', 'weed'] },

  // --- Immune / other -------------------------------------------------------
  { id: 'hiv_aids', category: 'Immune', name: 'HIV / AIDS', aliases: ['hiv', 'aids', 'arc'] },
  { id: 'lupus', category: 'Immune', name: 'Lupus (SLE)', aliases: ['sle', 'systemic lupus'] },
  { id: 'rheumatoid_arthritis', category: 'Immune', name: 'Rheumatoid arthritis', aliases: ['ra'] },
  { id: 'crohns_colitis', category: 'Digestive', name: "Crohn's / ulcerative colitis", aliases: ['crohns', 'ulcerative colitis', 'ibd', 'inflammatory bowel disease'] },
  { id: 'pancreatitis', category: 'Digestive', name: 'Pancreatitis', aliases: [] },
  { id: 'amputation_disease', category: 'Other', name: 'Amputation caused by disease', aliases: ['amputee', 'amputation'] },
  { id: 'sickle_cell', category: 'Blood', name: 'Sickle cell anemia', aliases: ['sickle cell'] },
  { id: 'osteoarthritis', category: 'Other', name: 'Osteoarthritis', aliases: ['arthritis', 'degenerative joint disease'] },
  { id: 'downs_syndrome', category: 'Other', name: "Down's syndrome", aliases: ['down syndrome', 'trisomy 21'] },

  // --- Non-medical ----------------------------------------------------------
  { id: 'dui', category: 'Non-medical', name: 'DUI / DWI', aliases: ['dwi', 'drunk driving'] },
  { id: 'felony', category: 'Non-medical', name: 'Felony conviction / incarceration', aliases: ['jail', 'prison', 'probation', 'parole', 'criminal'] },
  { id: 'bankruptcy', category: 'Non-medical', name: 'Bankruptcy', aliases: ['chapter 7', 'chapter 13'] },
  { id: 'hazardous_avocation', category: 'Non-medical', name: 'Hazardous activity (skydiving, racing, etc.)', aliases: ['skydiving', 'scuba', 'racing', 'private pilot', 'aviation', 'rock climbing'] },
  { id: 'foreign_travel', category: 'Non-medical', name: 'Foreign travel / residence', aliases: ['travel', 'non us citizen', 'visa', 'green card'] },
  { id: 'disability_benefits', category: 'Non-medical', name: 'Receiving disability (SSDI)', aliases: ['ssdi', 'disability', 'on disability'] }
]);

UW.registerMedications([
  // Blood thinners / heart
  { id: 'eliquis', name: 'Eliquis (apixaban)', aliases: ['apixaban'], commonlyFor: ['afib', 'blood_clots', 'stroke'] },
  { id: 'xarelto', name: 'Xarelto (rivaroxaban)', aliases: ['rivaroxaban'], commonlyFor: ['afib', 'blood_clots'] },
  { id: 'warfarin', name: 'Warfarin / Coumadin', aliases: ['coumadin', 'jantoven'], commonlyFor: ['afib', 'blood_clots', 'heart_valve'] },
  { id: 'plavix', name: 'Plavix (clopidogrel)', aliases: ['clopidogrel'], commonlyFor: ['heart_stent', 'heart_attack', 'stroke', 'pvd'] },
  { id: 'brilinta', name: 'Brilinta (ticagrelor)', aliases: ['ticagrelor'], commonlyFor: ['heart_attack', 'heart_stent'] },
  { id: 'nitroglycerin', name: 'Nitroglycerin', aliases: ['nitro', 'nitrostat', 'isosorbide', 'imdur'], commonlyFor: ['angina', 'cad'] },
  { id: 'digoxin', name: 'Digoxin', aliases: ['lanoxin'], commonlyFor: ['chf', 'afib'] },
  { id: 'entresto', name: 'Entresto', aliases: ['sacubitril'], commonlyFor: ['chf'] },
  { id: 'furosemide', name: 'Furosemide (Lasix)', aliases: ['lasix', 'bumetanide', 'bumex', 'torsemide'], commonlyFor: ['chf', 'high_blood_pressure', 'kidney_disease'] },
  { id: 'amiodarone', name: 'Amiodarone', aliases: ['pacerone'], commonlyFor: ['afib'] },
  { id: 'lisinopril', name: 'Lisinopril / BP meds', aliases: ['amlodipine', 'losartan', 'metoprolol', 'hydrochlorothiazide', 'hctz', 'carvedilol'], commonlyFor: ['high_blood_pressure'] },
  { id: 'statin', name: 'Statins (Lipitor, Crestor, etc.)', aliases: ['atorvastatin', 'lipitor', 'rosuvastatin', 'crestor', 'simvastatin', 'pravastatin'], commonlyFor: ['high_cholesterol'] },

  // Diabetes
  { id: 'insulin', name: 'Insulin (any)', aliases: ['lantus', 'humalog', 'novolog', 'levemir', 'tresiba', 'basaglar', 'toujeo'], commonlyFor: ['diabetes_insulin'] },
  { id: 'metformin', name: 'Metformin', aliases: ['glucophage'], commonlyFor: ['diabetes_oral'] },
  { id: 'glp1', name: 'GLP-1 (Ozempic, Trulicity, Mounjaro…)', aliases: ['ozempic', 'trulicity', 'mounjaro', 'wegovy', 'zepbound', 'victoza', 'semaglutide', 'tirzepatide', 'rybelsus'], commonlyFor: ['diabetes_oral'] },
  { id: 'jardiance', name: 'Jardiance / Farxiga (SGLT2)', aliases: ['jardiance', 'farxiga', 'invokana', 'empagliflozin', 'dapagliflozin'], commonlyFor: ['diabetes_oral', 'chf', 'kidney_disease'] },
  { id: 'glipizide', name: 'Glipizide / sulfonylureas', aliases: ['glimepiride', 'glyburide', 'amaryl'], commonlyFor: ['diabetes_oral'] },

  // Lung
  { id: 'spiriva', name: 'Spiriva (tiotropium)', aliases: ['tiotropium'], commonlyFor: ['copd'] },
  { id: 'advair_symbicort', name: 'Advair / Symbicort / Breo / Trelegy', aliases: ['advair', 'symbicort', 'breo', 'trelegy', 'anoro', 'wixela'], commonlyFor: ['copd', 'asthma'] },
  { id: 'albuterol', name: 'Albuterol (rescue inhaler)', aliases: ['proair', 'ventolin', 'proventil'], commonlyFor: ['asthma', 'copd'] },

  // Neuro / psych
  { id: 'donepezil', name: 'Aricept (donepezil) / Namenda', aliases: ['aricept', 'donepezil', 'namenda', 'memantine', 'exelon', 'razadyne'], commonlyFor: ['alzheimers_dementia'] },
  { id: 'carbidopa', name: 'Carbidopa-levodopa (Sinemet)', aliases: ['sinemet', 'levodopa', 'rytary'], commonlyFor: ['parkinsons'] },
  { id: 'antipsychotic', name: 'Antipsychotics (Seroquel, Abilify, Risperdal…)', aliases: ['seroquel', 'quetiapine', 'abilify', 'aripiprazole', 'risperdal', 'risperidone', 'zyprexa', 'olanzapine', 'haloperidol', 'clozapine'], commonlyFor: ['schizophrenia', 'bipolar'] },
  { id: 'lithium', name: 'Lithium', aliases: ['lithobid'], commonlyFor: ['bipolar'] },
  { id: 'antidepressant', name: 'Antidepressants (SSRIs etc.)', aliases: ['zoloft', 'sertraline', 'lexapro', 'escitalopram', 'prozac', 'fluoxetine', 'wellbutrin', 'bupropion', 'cymbalta', 'trazodone', 'celexa'], commonlyFor: ['depression_anxiety'] },
  { id: 'anticonvulsant', name: 'Seizure meds (Keppra, Dilantin…)', aliases: ['keppra', 'levetiracetam', 'dilantin', 'phenytoin', 'lamictal', 'lamotrigine', 'depakote', 'tegretol'], commonlyFor: ['seizures', 'bipolar'] },
  { id: 'gabapentin', name: 'Gabapentin / Lyrica', aliases: ['neurontin', 'lyrica', 'pregabalin'], commonlyFor: ['neuropathy', 'diabetes_complications', 'seizures'] },
  { id: 'opioids', name: 'Opioid pain meds (oxycodone, etc.)', aliases: ['oxycodone', 'hydrocodone', 'norco', 'percocet', 'morphine', 'fentanyl', 'tramadol', 'methadone'], commonlyFor: ['drug_abuse'] },
  { id: 'suboxone', name: 'Suboxone / buprenorphine / naltrexone', aliases: ['buprenorphine', 'naltrexone', 'vivitrol', 'sublocade'], commonlyFor: ['drug_abuse', 'alcohol_abuse'] },

  // Immune / infectious / cancer
  { id: 'hiv_meds', name: 'HIV antiretrovirals (Biktarvy, Truvada…)', aliases: ['biktarvy', 'truvada', 'genvoya', 'triumeq', 'descovy'], commonlyFor: ['hiv_aids'] },
  { id: 'chemo', name: 'Chemo / oral cancer meds (tamoxifen, letrozole…)', aliases: ['tamoxifen', 'letrozole', 'anastrozole', 'arimidex', 'chemotherapy', 'keytruda', 'ibrance'], commonlyFor: ['cancer'] },
  { id: 'immunosuppressant', name: 'Immunosuppressants / biologics (Humira, methotrexate…)', aliases: ['humira', 'methotrexate', 'enbrel', 'prednisone', 'plaquenil', 'hydroxychloroquine', 'stelara', 'remicade'], commonlyFor: ['rheumatoid_arthritis', 'lupus', 'crohns_colitis'] },
  { id: 'oxygen_rx', name: 'Oxygen (prescribed)', aliases: ['home oxygen'], commonlyFor: ['copd', 'chf', 'oxygen'] },
  { id: 'kidney_binders', name: 'Phosphate binders (Renvela, PhosLo)', aliases: ['renvela', 'sevelamer', 'phoslo', 'calcium acetate'], commonlyFor: ['kidney_disease', 'dialysis'] }
]);
