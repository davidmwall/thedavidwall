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
  { id: 'hospitalized_now', category: 'Current status', name: 'Currently hospitalized / psychiatric facility patient', aliases: ['inpatient', 'in the hospital', 'current hospital patient'] },
  { id: 'nursing_home', category: 'Current status', name: 'Nursing home / skilled nursing resident', aliases: ['skilled nursing', 'snf', 'nursing facility'] },
  { id: 'terminal_illness', category: 'Current status', name: 'Terminal illness', aliases: ['terminal', 'less than 12 months to live'] },
  { id: 'adl_assistance', category: 'Current status', name: 'Needs help with ADLs', aliases: ['activities of daily living', 'adl', 'needs help bathing', 'needs help dressing'] },
  { id: 'wheelchair', category: 'Current status', name: 'Wheelchair / motorized scooter', aliases: ['scooter', 'mobility device', 'wheel chair'] },
  { id: 'oxygen', category: 'Current status', name: 'Uses oxygen (not for sleep apnea)', aliases: ['home oxygen', 'o2', 'oxygen tank'] },
  { id: 'organ_transplant_pending', category: 'Current status', name: 'Awaiting organ transplant', aliases: ['transplant list'] },
  { id: 'surgery_pending', category: 'Current status', name: 'Surgery pending / scheduled', aliases: ['scheduled surgery', 'pending surgery'] },
  { id: 'dialysis', category: 'Kidney', name: 'Kidney dialysis', aliases: ['dialysis', 'hemodialysis', 'esrd', 'end stage renal disease'] },

  // --- Heart & circulatory --------------------------------------------------
  { id: 'heart_attack', category: 'Heart', name: 'Heart attack', aliases: ['mi', 'myocardial infarction', 'cardiac arrest'] },
  { id: 'angina', category: 'Heart', name: 'Angina', aliases: ['chest pain'] },
  { id: 'cad', category: 'Heart', name: 'Coronary artery disease', aliases: ['cad', 'heart disease', 'blocked arteries', 'atherosclerosis'] },
  { id: 'heart_stent', category: 'Heart', name: 'Angioplasty / heart stent', aliases: ['stent', 'angioplasty', 'pci'] },
  { id: 'heart_bypass', category: 'Heart', name: 'Heart bypass surgery', aliases: ['cabg', 'bypass', 'open heart surgery'] },
  { id: 'chf', category: 'Heart', name: 'Congestive heart failure', aliases: ['chf', 'heart failure'] },
  { id: 'afib', category: 'Heart', name: 'Atrial fibrillation', aliases: ['afib', 'a-fib', 'a fib'] },
  { id: 'pacemaker', category: 'Heart', name: 'Pacemaker', aliases: [] },
  { id: 'heart_valve', category: 'Heart', name: 'Heart valve disease / disorder', aliases: ['mitral valve', 'aortic stenosis', 'valve disorder'] },
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
  { id: 'diabetes_complications', category: 'Diabetes', name: 'Diabetes with complications', aliases: ['diabetic neuropathy', 'diabetic retinopathy', 'diabetic nephropathy', 'diabetic amputation'] },
  { id: 'thyroid', category: 'Endocrine', name: 'Thyroid disorder', aliases: ['hypothyroid', 'hyperthyroid', 'hashimotos', 'graves'] },

  // --- Lung -----------------------------------------------------------------
  { id: 'copd', category: 'Lung', name: 'COPD', aliases: ['copd', 'chronic obstructive pulmonary disease'] },
  { id: 'asthma', category: 'Lung', name: 'Asthma', aliases: ['inhaler'] },
  { id: 'sleep_apnea', category: 'Lung', name: 'Sleep apnea', aliases: ['cpap', 'osa', 'obstructive sleep apnea'] },
  { id: 'pulmonary_fibrosis', category: 'Lung', name: 'Pulmonary fibrosis', aliases: ['ipf', 'lung fibrosis'] },
  { id: 'cystic_fibrosis', category: 'Lung', name: 'Cystic fibrosis', aliases: ['cf'] },

  // --- Cancer ---------------------------------------------------------------
  { id: 'cancer', category: 'Cancer', name: 'Cancer — one type, non-recurring, history (not basal skin)', aliases: ['cancer', 'tumor history', 'malignancy', 'carcinoma', 'leukemia', 'lymphoma', 'cancer history'] },
  { id: 'cancer_metastatic', category: 'Cancer', name: 'Cancer — recurring, more than one type, or metastatic', aliases: ['metastasized', 'stage 4', 'recurrence', 'recurring cancer', 'spread'] },
  { id: 'skin_cancer_basal', category: 'Cancer', name: 'Basal / squamous cell skin cancer', aliases: ['basal cell', 'squamous cell', 'skin cancer'] },

  // --- Kidney & liver -------------------------------------------------------
  { id: 'kidney_disease', category: 'Kidney', name: 'Kidney disease — chronic (no dialysis)', aliases: ['ckd', 'renal insufficiency', 'renal disease'] },
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
  { id: 'depression_anxiety', category: 'Mental health', name: 'Depression / anxiety — mild', aliases: ['mild depression', 'mild anxiety', 'panic attacks'] },
  { id: 'bipolar', category: 'Mental health', name: 'Bipolar disorder', aliases: ['manic depression', 'bipolar'] },
  { id: 'schizophrenia', category: 'Mental health', name: 'Schizophrenia', aliases: ['psychosis', 'schizoaffective'] },
  { id: 'psych_hospitalization', category: 'Mental health', name: 'Hospitalized for mental / nervous disorder', aliases: ['inpatient psych', 'mental hospital'] },
  { id: 'alcohol_abuse', category: 'Substance', name: 'Alcohol abuse / treatment', aliases: ['alcoholism', 'aa', 'rehab', 'alcohol treatment'] },
  { id: 'drug_abuse', category: 'Substance', name: 'Drug abuse / treatment', aliases: ['substance abuse', 'drug rehab', 'opioid use disorder', 'suboxone'] },
  { id: 'marijuana', category: 'Substance', name: 'Marijuana use', aliases: ['cannabis', 'thc', 'weed'] },

  // --- Immune / other -------------------------------------------------------
  { id: 'hiv_aids', category: 'Immune', name: 'HIV / AIDS', aliases: ['hiv', 'aids', 'arc'] },
  { id: 'lupus', category: 'Immune', name: 'Lupus (SLE)', aliases: ['sle', 'systemic lupus'] },
  { id: 'rheumatoid_arthritis', category: 'Immune', name: 'Rheumatoid arthritis', aliases: ['ra'] },
  { id: 'crohns_colitis', category: 'Digestive', name: "Crohn's disease / other digestive disorder", aliases: ['crohns', 'ibd', 'inflammatory bowel disease', 'digestive disorder'] },
  { id: 'pancreatitis', category: 'Digestive', name: 'Pancreatitis', aliases: [] },
  { id: 'amputation_disease', category: 'Other', name: 'Amputation caused by disease', aliases: ['amputee', 'amputation'] },
  { id: 'sickle_cell', category: 'Blood', name: 'Sickle cell anemia', aliases: ['sickle cell'] },
  { id: 'osteoarthritis', category: 'Other', name: 'Osteoarthritis', aliases: ['arthritis', 'degenerative joint disease'] },
  { id: 'downs_syndrome', category: 'Other', name: "Down's syndrome", aliases: ['down syndrome', 'trisomy 21'] },

  // --- Non-medical ----------------------------------------------------------
  { id: 'dui', category: 'Non-medical', name: 'DUI / DWI — one', aliases: ['dwi', 'drunk driving', 'dui'] },
  { id: 'felony', category: 'Non-medical', name: 'Felony', aliases: ['felony conviction', 'criminal'] },
  { id: 'bankruptcy', category: 'Non-medical', name: 'Bankruptcy', aliases: ['chapter 7', 'chapter 13'] },
  { id: 'hazardous_avocation', category: 'Non-medical', name: 'Hazardous activity (skydiving, racing, etc.)', aliases: ['skydiving', 'scuba', 'racing', 'rock climbing'] },
  { id: 'foreign_travel', category: 'Non-medical', name: 'Foreign travel / residence', aliases: ['travel', 'living abroad'] },
  { id: 'disability_benefits', category: 'Non-medical', name: 'Disabled / unemployed due to medical reasons', aliases: ['ssdi', 'disability', 'on disability', 'unemployed medical'] },

  // --- Added to match the agency condition grid's finer distinctions ----------
  { id: 'assisted_living', category: 'Current status', name: 'Assisted living / long-term care facility', aliases: ['assisted living', 'ltc facility', 'long term care facility'] },
  { id: 'skilled_care_advised', category: 'Current status', name: 'Receiving or advised to receive skilled nursing, hospice or home care', aliases: ['advised nursing care'] },
  { id: 'hospice', category: 'Current status', name: 'Hospice', aliases: ['hospice care'] },
  { id: 'home_health_care', category: 'Current status', name: 'Home health care', aliases: ['home care', 'hhc'] },
  { id: 'bedridden', category: 'Current status', name: 'Bedridden', aliases: ['bed bound', 'bedbound'] },
  { id: 'tests_pending', category: 'Current status', name: 'Advised surgery / tests with results not known', aliases: ['pending tests', 'awaiting results', 'diagnostic testing pending'] },
  { id: 'recent_surgery_hospitalization', category: 'Current status', name: 'Surgery, hospitalization or major medical procedure', aliases: ['recent surgery', 'recent hospitalization', 'major procedure'] },
  { id: 'multiple_hospital_stays', category: 'Current status', name: 'Hospital stays — 2 or more', aliases: ['multiple hospitalizations'] },
  { id: 'wheelchair_confined', category: 'Mobility', name: 'Wheelchair — confined', aliases: ['wheelchair bound', 'confined to wheelchair'] },
  { id: 'wheelchair_not_confined', category: 'Mobility', name: 'Wheelchair — not confined', aliases: ['part time wheelchair'] },
  { id: 'walker', category: 'Mobility', name: 'Walker', aliases: ['uses walker'] },
  { id: 'walker_permanent', category: 'Mobility', name: 'Walker — permanent use', aliases: [] },
  { id: 'walker_temporary', category: 'Mobility', name: 'Walker — temporary use', aliases: [] },
  { id: 'paralysis', category: 'Mobility', name: 'Paralysis', aliases: ['paralyzed'] },
  { id: 'paraplegia', category: 'Mobility', name: 'Paraplegia', aliases: ['paraplegic'] },
  { id: 'quadriplegia', category: 'Mobility', name: 'Quadriplegia', aliases: ['quadriplegic'] },
  { id: 'nebulizer', category: 'Lung', name: 'Nebulizer use', aliases: ['nebulyzer', 'breathing treatment'] },

  { id: 'arrhythmia', category: 'Heart', name: 'Arrhythmia / irregular heartbeat', aliases: ['irregular heartbeat', 'arrhythmia', 'heartbeat irregular'] },
  { id: 'cardiomyopathy', category: 'Heart', name: 'Cardiomyopathy (heart muscle disease)', aliases: ['cardiomyopathy', 'heart muscle disease'] },
  { id: 'heart_failure_other', category: 'Heart', name: 'Heart failure — left or right, not congestive', aliases: ['left heart failure', 'right heart failure'] },
  { id: 'heart_blockage', category: 'Heart', name: 'Heart blockage', aliases: ['blocked artery', 'heart block'] },
  { id: 'defibrillator', category: 'Heart', name: 'Defibrillator (ICD)', aliases: ['icd', 'aicd', 'defibrilator'] },
  { id: 'heart_murmur', category: 'Heart', name: 'Heart murmur — no symptoms', aliases: ['murmur'] },
  { id: 'heart_murmur_symptomatic', category: 'Heart', name: 'Heart murmur — with symptoms or treatment', aliases: [] },
  { id: 'heart_valve_replacement', category: 'Heart', name: 'Heart valve replacement', aliases: ['valve replacement', 'tavr'] },
  { id: 'mitral_insufficiency', category: 'Heart', name: 'Mitral insufficiency', aliases: ['mitral regurgitation'] },
  { id: 'mitral_stenosis', category: 'Heart', name: 'Mitral stenosis', aliases: [] },
  { id: 'heart_surgery', category: 'Heart', name: 'Heart surgery / procedure', aliases: ['heart procedure', 'cardiac surgery'] },
  { id: 'cardiac_procedure', category: 'Heart', name: 'Stent, cardioversion or other heart / circulatory procedure', aliases: ['cardioversion', 'circulatory procedure'] },
  { id: 'circulatory_surgery', category: 'Circulatory', name: 'Circulatory surgery', aliases: ['vascular surgery'] },
  { id: 'aneurysm_aaa_uncorrected', category: 'Circulatory', name: 'Aneurysm — abdominal aortic, not corrected', aliases: ['aaa uncorrected'] },
  { id: 'aneurysm_aaa_corrected', category: 'Circulatory', name: 'Aneurysm — abdominal aortic, corrected', aliases: ['aaa repaired'] },
  { id: 'aneurysm_cerebral_uncorrected', category: 'Circulatory', name: 'Aneurysm — cerebral, not corrected', aliases: ['brain aneurysm uncorrected'] },
  { id: 'aneurysm_cerebral_corrected', category: 'Circulatory', name: 'Aneurysm — cerebral, corrected', aliases: ['brain aneurysm repaired'] },
  { id: 'aneurysm_thoracic_corrected', category: 'Circulatory', name: 'Aneurysm — thoracic aortic, corrected', aliases: ['thoracic aneurysm'] },
  { id: 'blood_disorder', category: 'Blood', name: 'Blood / clotting disorder (polycythemia, thrombocytopenia, hemophilia)', aliases: ['polycythemia', 'thrombocytopenia', 'hemophilia', 'clotting disorder', 'factor v leiden', 'itp'] },
  { id: 'gastric_bypass', category: 'Digestive', name: 'Gastric bypass surgery', aliases: ['bariatric surgery', 'weight loss surgery'] },

  { id: 'diabetes_uncomplicated', category: 'Diabetes', name: 'Diabetes — no complications (any treatment)', aliases: ['diabetes no complications'] },
  { id: 'diabetic_coma', category: 'Diabetes', name: 'Diabetic coma or insulin shock', aliases: ['diabetic coma', 'insulin shock', 'diabetic shock'] },

  { id: 'asthma_chronic', category: 'Lung', name: 'Asthma — chronic', aliases: ['chronic asthma'] },
  { id: 'asthma_severe', category: 'Lung', name: 'Asthma — severe', aliases: ['severe asthma'] },
  { id: 'chronic_bronchitis', category: 'Lung', name: 'Chronic bronchitis', aliases: ['bronchitis'] },
  { id: 'emphysema', category: 'Lung', name: 'Emphysema', aliases: [] },
  { id: 'chronic_cough', category: 'Lung', name: 'Chronic cough', aliases: ['cough'] },
  { id: 'sleep_apnea_controlled', category: 'Lung', name: 'Sleep apnea — not requiring oxygen', aliases: ['cpap compliant'] },
  { id: 'sleep_apnea_oxygen', category: 'Lung', name: 'Sleep apnea — requiring oxygen', aliases: [] },
  { id: 'sarcoidosis', category: 'Lung', name: 'Sarcoidosis', aliases: ['sarcoid'] },
  { id: 'sarcoid_pulm', category: 'Lung', name: 'Sarcoidosis — pulmonary', aliases: [] },
  { id: 'sarcoid_pulm_early', category: 'Lung', name: 'Sarcoidosis — pulmonary stage 1 or 2', aliases: [] },
  { id: 'sarcoid_pulm_advanced', category: 'Lung', name: 'Sarcoidosis — pulmonary stage 3 or 4', aliases: [] },
  { id: 'sarcoid_nonpulm', category: 'Lung', name: 'Sarcoidosis — non-pulmonary', aliases: [] },
  { id: 'black_lung', category: 'Lung', name: 'Black lung', aliases: ['pneumoconiosis'] },
  { id: 'tuberculosis', category: 'Lung', name: 'Tuberculosis', aliases: ['tb'] },
  { id: 'covid19', category: 'Lung', name: 'COVID-19', aliases: ['covid', 'coronavirus'] },

  { id: 'cancer_active', category: 'Cancer', name: 'Cancer — active (not basal skin)', aliases: ['active cancer', 'current cancer', 'in treatment', 'chemo', 'chemotherapy', 'radiation'] },
  { id: 'melanoma', category: 'Cancer', name: 'Melanoma', aliases: [] },
  { id: 'mds', category: 'Cancer', name: 'Myelodysplastic syndrome (MDS)', aliases: ['bone marrow cancer'] },
  { id: 'hodgkins', category: 'Cancer', name: "Hodgkin's disease", aliases: ['hodgkin lymphoma'] },
  { id: 'tumor', category: 'Cancer', name: 'Tumor (cancerous or not)', aliases: ['tumor', 'growth', 'mass'] },

  { id: 'kidney_disease_early', category: 'Kidney', name: 'Kidney disease — stage 1 or 2', aliases: [] },
  { id: 'kidney_disease_stage3', category: 'Kidney', name: 'Kidney disease — stage 3', aliases: [] },
  { id: 'kidney_disease_advanced', category: 'Kidney', name: 'Kidney disease — stage 4 or 5', aliases: [] },
  { id: 'kidney_failure', category: 'Kidney', name: 'Kidney failure (renal failure)', aliases: ['renal failure', 'kidney failure'] },
  { id: 'kidney_transplant', category: 'Kidney', name: 'Kidney transplant (completed)', aliases: [] },
  { id: 'organ_transplant', category: 'Other', name: 'Organ or bone marrow transplant (not kidney)', aliases: ['transplant', 'liver transplant', 'heart transplant', 'lung transplant'] },
  { id: 'bone_marrow_transplant', category: 'Other', name: 'Bone marrow transplant', aliases: [] },

  { id: 'liver_disease', category: 'Liver', name: 'Liver disease', aliases: [] },
  { id: 'fatty_liver', category: 'Liver', name: 'Fatty liver', aliases: ['nafld'] },
  { id: 'cirrhosis_early', category: 'Liver', name: 'Cirrhosis — stage A or B', aliases: [] },
  { id: 'cirrhosis_advanced', category: 'Liver', name: 'Cirrhosis — stage C', aliases: [] },
  { id: 'hepatitis', category: 'Liver', name: 'Hepatitis (type not specified)', aliases: [] },
  { id: 'hepatitis_a', category: 'Liver', name: 'Hepatitis A', aliases: ['hep a'] },

  { id: 'huntingtons', category: 'Neuro', name: "Huntington's disease", aliases: ['huntingtons'] },
  { id: 'encephalitis', category: 'Neuro', name: 'Encephalitis', aliases: [] },
  { id: 'narcolepsy', category: 'Neuro', name: 'Narcolepsy', aliases: [] },
  { id: 'restless_leg', category: 'Neuro', name: 'Restless leg syndrome', aliases: ['rls'] },
  { id: 'muscle_disorder', category: 'Neuro', name: 'Muscle disease or disorder', aliases: [] },
  { id: 'spina_bifida', category: 'Neuro', name: 'Spina bifida', aliases: [] },
  { id: 'autism', category: 'Neuro', name: 'Autism', aliases: ['asd'] },
  { id: 'autism_high_functioning', category: 'Neuro', name: 'Autism — high functioning', aliases: ['aspergers'] },
  { id: 'autism_severe', category: 'Neuro', name: 'Autism — severe', aliases: [] },
  { id: 'mental_incapacity', category: 'Neuro', name: 'Mental incapacity', aliases: ['intellectual disability'] },

  { id: 'depression', category: 'Mental health', name: 'Depression', aliases: ['depression'] },
  { id: 'anxiety', category: 'Mental health', name: 'Anxiety', aliases: ['anxiety'] },
  { id: 'depression_severe', category: 'Mental health', name: 'Depression / anxiety — moderate or severe', aliases: ['major depression', 'severe depression', 'severe anxiety'] },
  { id: 'ptsd', category: 'Mental health', name: 'PTSD', aliases: ['post traumatic stress'] },
  { id: 'suicide_attempt', category: 'Mental health', name: 'Suicide attempt', aliases: ['suicidal'] },
  { id: 'illegal_drugs', category: 'Substance', name: 'Illegal drug use', aliases: ['illicit drugs'] },
  { id: 'tobacco_use', category: 'Substance', name: 'Smoker / nicotine use', aliases: ['smoker', 'nicotine', 'tobacco', 'vaping'] },
  { id: 'chronic_pain', category: 'Other', name: 'Chronic pain', aliases: ['pain management'] },

  { id: 'lupus_discoid', category: 'Immune', name: 'Lupus — discoid', aliases: ['discoid lupus'] },
  { id: 'autoimmune', category: 'Immune', name: 'Autoimmune disorder', aliases: [] },
  { id: 'scleroderma', category: 'Immune', name: 'Scleroderma', aliases: [] },
  { id: 'fibromyalgia', category: 'Immune', name: 'Fibromyalgia', aliases: [] },
  { id: 'ra_mild', category: 'Immune', name: 'Rheumatoid arthritis — mild', aliases: [] },
  { id: 'ra_severe', category: 'Immune', name: 'Rheumatoid arthritis — moderate or severe', aliases: [] },
  { id: 'psoriatic_arthritis', category: 'Immune', name: 'Psoriatic arthritis', aliases: [] },
  { id: 'ulcerative_colitis', category: 'Digestive', name: 'Ulcerative colitis', aliases: ['colitis', 'uc'] },
  { id: 'gout', category: 'Other', name: 'Gout', aliases: [] },
  { id: 'cellulitis', category: 'Other', name: 'Cellulitis', aliases: [] },
  { id: 'bone_disorder', category: 'Other', name: 'Bone disease or disorder', aliases: ['osteoporosis'] },
  { id: 'unexplained_weight_loss', category: 'Other', name: 'Unexplained weight loss over 10 lb', aliases: ['weight loss'] },
  { id: 'pregnant', category: 'Other', name: 'Pregnant', aliases: ['pregnancy'] },

  { id: 'dui_multiple', category: 'Non-medical', name: 'DUI / DWI — two or more', aliases: ['multiple dui'] },
  { id: 'license_suspended', category: 'Non-medical', name: "Driver's license suspended", aliases: ['suspended license'] },
  { id: 'license_suspended_dui', category: 'Non-medical', name: "Driver's license suspended / revoked — due to DUI", aliases: [] },
  { id: 'license_suspended_other', category: 'Non-medical', name: "Driver's license suspended / revoked — not DUI", aliases: ['revoked license'] },
  { id: 'driving_violations', category: 'Non-medical', name: 'Driving violations (reckless driving etc.)', aliases: ['reckless driving', 'speeding tickets'] },
  { id: 'misdemeanor', category: 'Non-medical', name: 'Misdemeanor', aliases: [] },
  { id: 'incarcerated', category: 'Non-medical', name: 'Jail / incarcerated', aliases: ['jail', 'prison', 'incarcerated'] },
  { id: 'probation_parole', category: 'Non-medical', name: 'Probation or parole', aliases: ['probation', 'parole'] },
  { id: 'foreign_national', category: 'Non-medical', name: 'Foreign national / no Social Security number', aliases: ['non us citizen', 'visa', 'green card', 'no ssn'] },
  { id: 'military', category: 'Non-medical', name: 'Military', aliases: ['active duty', 'deployed'] },
  { id: 'pilot', category: 'Non-medical', name: 'Pilot or student pilot', aliases: ['private pilot', 'aviation', 'student pilot'] }
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
