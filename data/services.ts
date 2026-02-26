import type { Service } from "@/lib/types";

const baseFaqs = [
  {
    question: "Will I receive a personalized treatment plan?",
    answer:
      "Yes. Your dentist reviews findings and goals first, then recommends options suited to your needs.",
  },
  {
    question: "How long does recovery usually take?",
    answer:
      "Recovery depends on the procedure and personal healing response. Your dentist shares aftercare guidance and expected timelines.",
  },
  {
    question: "Is pricing fixed before consultation?",
    answer:
      "Final pricing depends on clinical assessment, complexity, and materials. We provide transparent ranges and discuss options before treatment.",
  },
];

export const services: Service[] = [
  {
    id: "svc-consultation",
    slug: "consultation-checkup",
    name: "Consultation & Checkup",
    category: "General Dentistry",
    shortDescription: "Comprehensive oral exam with preventive guidance.",
    overview:
      "A routine checkup helps detect concerns early and supports long-term oral health with clear next steps.",
    duration: "30-45 mins",
    priceRange: "₱50-₱120",
    bestFor: ["toothache", "sensitive-teeth", "bleeding-gums"],
    heroImage:
      "https://images.unsplash.com/photo-1666214277578-b8f3c1fdf2f9?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909615957-be86de32f7ce?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Early detection of cavities and gum issues",
      "Personalized prevention plan",
      "Clear treatment roadmap",
    ],
    whoItsFor: [
      "New patients",
      "Families seeking preventive care",
      "Patients with mild discomfort",
    ],
    steps: [
      "Medical and dental history review",
      "Clinical oral examination",
      "Digital imaging when needed",
      "Discussion of findings and options",
    ],
    aftercare: [
      "Follow home-care instructions",
      "Return for regular maintenance visits",
      "Contact clinic if symptoms worsen",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-cleaning",
    slug: "dental-cleaning",
    name: "Dental Cleaning",
    category: "General Dentistry",
    shortDescription: "Professional plaque and tartar removal for healthy gums.",
    overview:
      "Professional cleaning helps reduce plaque buildup and keeps teeth and gums fresh between home-care routines.",
    duration: "40-60 mins",
    priceRange: "₱90-₱180",
    bestFor: ["bleeding-gums", "sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1606811841473-1c9d6ec4c7d0?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1609840114760-4a2f6b6c6f4f?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Fresher breath",
      "Improved gum health support",
      "Reduced staining from routine buildup",
    ],
    whoItsFor: [
      "Adults and teens",
      "Patients overdue for cleaning",
      "Patients with early gum irritation",
    ],
    steps: [
      "Gum health check",
      "Ultrasonic scaling and manual cleaning",
      "Polishing and flossing",
      "Oral hygiene recommendations",
    ],
    aftercare: [
      "Avoid staining foods for a few hours",
      "Brush gently and floss daily",
      "Book your next preventive visit",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-extraction",
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    category: "Oral Surgery",
    shortDescription: "Safe removal of severely damaged or problematic teeth.",
    overview:
      "When a tooth cannot be restored, extraction can relieve discomfort and protect surrounding oral structures.",
    duration: "30-75 mins",
    priceRange: "₱180-₱450",
    bestFor: ["toothache"],
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-bcf5ff9f2f45?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Relief from persistent pain",
      "Protects nearby teeth from spreading infection",
      "Opens path for restorative options",
    ],
    whoItsFor: [
      "Patients with non-restorable teeth",
      "Patients with severe crowding",
      "Patients with advanced decay",
    ],
    steps: [
      "Clinical and radiographic assessment",
      "Local anesthesia and comfort planning",
      "Tooth removal using surgical protocol",
      "Post-op instructions and follow-up guidance",
    ],
    aftercare: [
      "Bite on gauze as advised",
      "Avoid smoking and straws early after procedure",
      "Follow pain and hygiene instructions",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-filling",
    slug: "tooth-filling",
    name: "Tooth Filling",
    category: "General Dentistry",
    shortDescription: "Restore tooth function after decay or minor damage.",
    overview:
      "Composite fillings help seal cavities and rebuild tooth structure while matching natural tooth color.",
    duration: "30-60 mins",
    priceRange: "₱120-₱260",
    bestFor: ["toothache", "sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1629909615957-be86de32f7ce?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Stops cavity progression",
      "Protects tooth structure",
      "Natural-looking restoration",
    ],
    whoItsFor: [
      "Patients with small to medium cavities",
      "Patients with chipped enamel",
      "Patients with sensitivity from decay",
    ],
    steps: [
      "Assessment and x-ray if needed",
      "Decay removal and cleaning",
      "Layered composite placement",
      "Bite adjustment and polishing",
    ],
    aftercare: [
      "Avoid very hard foods for a day",
      "Maintain regular brushing and flossing",
      "Attend routine checkups",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-root-canal",
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "General Dentistry",
    shortDescription: "Tooth-saving treatment for deep infection.",
    overview:
      "Root canal treatment removes infected tissue inside the tooth and helps preserve your natural tooth.",
    duration: "60-120 mins",
    priceRange: "₱450-₱1,100",
    bestFor: ["toothache", "sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Targets source of deep tooth pain",
      "Preserves natural tooth where possible",
      "Reduces risk of further infection spread",
    ],
    whoItsFor: [
      "Patients with deep decay",
      "Patients with tooth nerve inflammation",
      "Patients with persistent pain to hot/cold",
    ],
    steps: [
      "Diagnosis and imaging",
      "Cleaning and shaping canals",
      "Canal disinfection and sealing",
      "Final restoration planning",
    ],
    aftercare: [
      "Avoid chewing on treated side until restored",
      "Take prescribed medication if needed",
      "Return for crown/final restoration",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-braces",
    slug: "braces-orthodontics",
    name: "Braces / Orthodontics",
    category: "Orthodontics",
    shortDescription: "Align teeth and improve bite with guided correction.",
    overview:
      "Orthodontic treatment gradually improves tooth alignment and bite function using a custom plan.",
    duration: "12-24 months",
    priceRange: "₱2,200-₱5,500",
    bestFor: ["crooked-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1579684453377-48b4b8b87b08?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Straighter smile appearance",
      "Better bite alignment",
      "Easier oral hygiene access",
    ],
    whoItsFor: [
      "Teens and adults with crowding",
      "Patients with bite imbalance",
      "Patients seeking long-term alignment",
    ],
    steps: [
      "Orthodontic records and scans",
      "Custom treatment design",
      "Regular adjustment visits",
      "Retention and maintenance phase",
    ],
    aftercare: [
      "Follow appliance care guidance",
      "Attend scheduled reviews",
      "Use retainers as instructed after treatment",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-whitening",
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    shortDescription: "Brighten smile tone with supervised whitening options.",
    overview:
      "Professional whitening helps improve tooth shade safely with in-clinic or guided take-home options.",
    duration: "45-90 mins",
    priceRange: "₱180-₱550",
    bestFor: ["stains"],
    heroImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Noticeably brighter smile",
      "Dentist-guided safety",
      "Flexible options based on preference",
    ],
    whoItsFor: [
      "Adults with extrinsic staining",
      "Patients preparing for major events",
      "Patients after cleaning and oral exam",
    ],
    steps: [
      "Shade assessment",
      "Whitening protocol selection",
      "Protective application and activation",
      "Post-whitening care instructions",
    ],
    aftercare: [
      "Avoid staining foods temporarily",
      "Use sensitivity-friendly toothpaste",
      "Maintain regular cleaning visits",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-dentures",
    slug: "dentures",
    name: "Dentures",
    category: "General Dentistry",
    shortDescription: "Custom removable tooth replacement options.",
    overview:
      "Dentures restore chewing comfort and smile confidence for partial or full tooth loss.",
    duration: "2-6 visits",
    priceRange: "₱700-₱2,800",
    bestFor: ["missing-tooth"],
    heroImage:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Supports improved chewing",
      "Restores facial smile profile",
      "Custom fit options",
    ],
    whoItsFor: [
      "Patients missing multiple teeth",
      "Patients seeking non-surgical replacement",
      "Patients needing full-arch solutions",
    ],
    steps: [
      "Initial exam and impressions",
      "Try-in and fitting adjustments",
      "Final placement and care briefing",
      "Review and comfort tuning",
    ],
    aftercare: [
      "Clean dentures daily",
      "Attend fit adjustment checks",
      "Remove at night if advised",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-implants",
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Oral Surgery",
    shortDescription: "Long-term replacement for one or more missing teeth.",
    overview:
      "Dental implants provide a stable base for replacement teeth with function-focused planning.",
    duration: "3-6 months",
    priceRange: "₱1,900-₱4,200 per tooth",
    bestFor: ["missing-tooth"],
    heroImage:
      "https://images.unsplash.com/photo-1598257006626-4c56c3cfafeb?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1606811841473-1c9d6ec4c7d0?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Stable tooth replacement",
      "Supports jawbone preservation",
      "Natural bite feel for many patients",
    ],
    whoItsFor: [
      "Adults with missing teeth",
      "Patients with adequate bone support",
      "Patients seeking fixed replacement options",
    ],
    steps: [
      "3D imaging and surgical planning",
      "Implant placement procedure",
      "Healing and integration period",
      "Final crown placement",
    ],
    aftercare: [
      "Follow surgical aftercare instructions",
      "Maintain meticulous oral hygiene",
      "Attend scheduled monitoring visits",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-veneers",
    slug: "veneers",
    name: "Veneers",
    category: "Cosmetic Dentistry",
    shortDescription: "Refine smile shape, color, and proportions.",
    overview:
      "Custom veneers can improve appearance of front teeth with a conservative cosmetic approach.",
    duration: "2-3 visits",
    priceRange: "₱450-₱1,200 per tooth",
    bestFor: ["stains", "crooked-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Improves smile aesthetics",
      "Custom color and shape match",
      "Durable cosmetic option with proper care",
    ],
    whoItsFor: [
      "Adults seeking cosmetic refinement",
      "Patients with chipped or stained front teeth",
      "Patients wanting minimally invasive smile updates",
    ],
    steps: [
      "Smile planning consultation",
      "Tooth preparation and impressions",
      "Temporary phase if needed",
      "Final veneer bonding",
    ],
    aftercare: [
      "Avoid biting very hard objects",
      "Use night guard if advised",
      "Maintain regular review appointments",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-pediatric",
    slug: "pediatric-checkup",
    name: "Pediatric Dental Checkup",
    category: "Pediatric Dentistry",
    shortDescription: "Friendly preventive care tailored for children.",
    overview:
      "Kid-focused checkups encourage positive dental habits and identify growth-related concerns early.",
    duration: "25-40 mins",
    priceRange: "₱60-₱140",
    bestFor: ["toothache", "sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1651008376851-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Gentle child-centered communication",
      "Early cavity prevention support",
      "Guidance for parents and caregivers",
    ],
    whoItsFor: [
      "Children and teens",
      "First-time pediatric visits",
      "Parents seeking preventive guidance",
    ],
    steps: [
      "Warm introduction and comfort check",
      "Child-friendly oral exam",
      "Cleaning/fluoride when appropriate",
      "Parent guidance and follow-up plan",
    ],
    aftercare: [
      "Follow age-appropriate brushing habits",
      "Limit high-sugar snack frequency",
      "Keep routine recall visits",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-gum",
    slug: "gum-treatment",
    name: "Gum Treatment",
    category: "General Dentistry",
    shortDescription: "Targeted care for inflamed or bleeding gums.",
    overview:
      "Periodontal-focused treatment supports gum healing and helps reduce progression of gum disease.",
    duration: "45-75 mins",
    priceRange: "₱180-₱550",
    bestFor: ["bleeding-gums"],
    heroImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1666214277578-b8f3c1fdf2f9?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909615957-be86de32f7ce?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Supports healthier gums",
      "Reduces inflammation and bleeding",
      "Helps protect long-term tooth support",
    ],
    whoItsFor: [
      "Patients with gum bleeding",
      "Patients with persistent gum swelling",
      "Patients with early-to-moderate periodontal concerns",
    ],
    steps: [
      "Periodontal charting and exam",
      "Deep cleaning where indicated",
      "Antibacterial support plan",
      "Maintenance schedule setup",
    ],
    aftercare: [
      "Use dentist-advised oral hygiene routine",
      "Keep maintenance cleaning visits",
      "Report persistent symptoms promptly",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-wisdom",
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "Oral Surgery",
    shortDescription: "Surgical removal for impacted or problematic wisdom teeth.",
    overview:
      "Wisdom tooth removal may be advised to prevent pain, crowding, or recurrent infection.",
    duration: "45-90 mins",
    priceRange: "₱250-₱900",
    bestFor: ["toothache", "crooked-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-bcf5ff9f2f45?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1598257006626-4c56c3cfafeb?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Relieves pressure and discomfort",
      "Helps reduce recurrent infection risk",
      "Can support orthodontic treatment planning",
    ],
    whoItsFor: [
      "Patients with impacted wisdom teeth",
      "Patients with recurring swelling",
      "Patients referred after x-ray assessment",
    ],
    steps: [
      "X-ray and surgical evaluation",
      "Comfort and anesthesia planning",
      "Tooth removal and site management",
      "Recovery guidance and review",
    ],
    aftercare: [
      "Follow swelling and hygiene instructions",
      "Use soft-food diet during early recovery",
      "Attend follow-up if scheduled",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-aligners",
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "Orthodontics",
    shortDescription: "Discreet alignment with removable trays.",
    overview:
      "Clear aligners offer a low-profile option for mild to moderate orthodontic correction.",
    duration: "6-18 months",
    priceRange: "₱2,000-₱4,800",
    bestFor: ["crooked-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-d3ecf2fbe0b3?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Discreet appearance",
      "Removable for meals and cleaning",
      "Digitally planned progress tracking",
    ],
    whoItsFor: [
      "Adults and teens with alignment concerns",
      "Patients preferring removable orthodontics",
      "Patients with suitable case complexity",
    ],
    steps: [
      "Digital scan and treatment simulation",
      "Custom aligner fabrication",
      "Tray change schedule with checkups",
      "Retention after active phase",
    ],
    aftercare: [
      "Wear aligners as prescribed",
      "Clean aligners daily",
      "Use retainers post-treatment",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-crown-bridge",
    slug: "dental-crown-bridge",
    name: "Dental Crown & Bridge",
    category: "General Dentistry",
    shortDescription: "Restore damaged teeth and replace gaps with fixed options.",
    overview:
      "Crowns and bridges restore chewing strength, support function, and improve smile balance.",
    duration: "2-3 visits",
    priceRange: "₱500-₱2,500",
    bestFor: ["missing-tooth", "toothache"],
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Restores bite strength",
      "Protects weakened teeth",
      "Replaces missing tooth spaces",
    ],
    whoItsFor: [
      "Patients with heavily restored teeth",
      "Patients missing one or more teeth",
      "Patients needing fixed restorative options",
    ],
    steps: [
      "Exam and preparation",
      "Impressions or digital scan",
      "Temporary restoration if needed",
      "Final crown/bridge placement",
    ],
    aftercare: [
      "Clean around margins carefully",
      "Avoid excessive biting pressure",
      "Schedule routine maintenance exams",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-emergency",
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: "General Dentistry",
    shortDescription: "Urgent evaluation for dental pain, swelling, or trauma.",
    overview:
      "Emergency consultations prioritize rapid pain assessment and safe short-term stabilization.",
    duration: "20-50 mins",
    priceRange: "₱80-₱220",
    bestFor: ["toothache", "bleeding-gums", "sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909615957-be86de32f7ce?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Fast pain-focused triage",
      "Prioritized treatment recommendations",
      "Follow-up planning for definitive care",
    ],
    whoItsFor: [
      "Patients with severe pain",
      "Patients with sudden swelling",
      "Patients with dental injury concerns",
    ],
    steps: [
      "Urgency screening and exam",
      "Diagnostic imaging when needed",
      "Immediate pain-control options",
      "Definitive treatment plan scheduling",
    ],
    aftercare: [
      "Follow temporary care instructions",
      "Complete recommended follow-up treatment",
      "Contact clinic if symptoms escalate",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-sealants",
    slug: "dental-sealants",
    name: "Dental Sealants",
    category: "Pediatric Dentistry",
    shortDescription: "Protective coating to help prevent cavity formation.",
    overview:
      "Sealants are applied to tooth grooves to reduce food and bacteria buildup risk.",
    duration: "20-30 mins",
    priceRange: "₱40-₱85 per tooth",
    bestFor: ["sensitive-teeth"],
    heroImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1651008376851-b90baee60c1f?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Extra cavity-prevention support",
      "Quick and non-invasive process",
      "Helpful for children and teens",
    ],
    whoItsFor: [
      "Children with deep molar grooves",
      "Teens at cavity risk",
      "Preventive-focused family care patients",
    ],
    steps: [
      "Tooth cleaning and prep",
      "Sealant placement",
      "Curing and bite check",
      "Preventive home-care advice",
    ],
    aftercare: [
      "Continue brushing and flossing",
      "Attend preventive recall visits",
      "Monitor sealant integrity at checkups",
    ],
    faqs: baseFaqs,
  },
  {
    id: "svc-night-guard",
    slug: "night-guard",
    name: "Night Guard Therapy",
    category: "General Dentistry",
    shortDescription: "Custom guard to protect teeth from grinding stress.",
    overview:
      "Night guards help reduce wear from clenching or grinding and may ease jaw strain.",
    duration: "2 visits",
    priceRange: "₱220-₱650",
    bestFor: ["sensitive-teeth", "toothache"],
    heroImage:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=1400&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1000&q=80",
    ],
    benefits: [
      "Protects enamel from wear",
      "Supports jaw comfort",
      "Custom fit for better retention",
    ],
    whoItsFor: [
      "Patients with nighttime grinding signs",
      "Patients with jaw tension",
      "Patients with cracked restorations history",
    ],
    steps: [
      "Bite assessment",
      "Digital or physical impression",
      "Custom guard fabrication",
      "Fit check and adjustment",
    ],
    aftercare: [
      "Clean guard daily",
      "Store in ventilated case",
      "Bring to review visits for adjustment",
    ],
    faqs: baseFaqs,
  },
];

export const featuredServiceSlugs = [
  "consultation-checkup",
  "dental-cleaning",
  "tooth-extraction",
  "tooth-filling",
  "root-canal-treatment",
  "braces-orthodontics",
  "teeth-whitening",
  "dentures",
];

