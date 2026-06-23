export const LTV_DEFAULT_ASSUMPTION_TEXT =
  'Meridian Energy customer LTV is $22,800 over 12 years based on ~$1,900 annual residential revenue. Annualised contact volume is 14,300 (2,200 contacts in the 8-week period × 6.5). Dissatisfied contacts (CSAT below 3) are 18% of volume = 2,574 annually. Churn rate for dissatisfied customers is 32%. High-bill complainants with unresolved FCR have 3.2× higher churn probability. Dissatisfied revenue at risk = 2,574 × 32% × $22,800 = $18.7M. Repeat contact waste $450K and unresolved escalation premium $725K bring total annualised revenue at risk to $12.9M. Coaching-protected LTV $4.5M and CSAT recovery value $2.4M total $6.9M protected annually. All figures are estimates.'

export const RISK_LINES = [
  {
    key: 'dissatisfiedRisk',
    annualKey: 'dissatisfiedRiskAnnual',
    title: 'Dissatisfied Contacts (CSAT < 3)',
    label: '2,574 annually · 18% of 14,300 contacts · 32% churn risk',
    description:
      'Customers rating their experience below 3 are significantly more likely to switch providers or file PUC complaints. At Meridian Energy\'s $22,800 12-year LTV, dissatisfied contacts represent the largest retention and regulatory exposure on the queue.',
    legendLabel: 'Dissatisfied contacts',
    dotColor: '#c0392b',
  },
  {
    key: 'repeatRisk',
    annualKey: 'repeatRiskAnnual',
    title: 'Repeat Contacts',
    label: 'Repeat contact waste · $450K annualised',
    description:
      'Customers contacting support multiple times on the same billing or outage issue show 3.2× elevated churn risk. The Billing & Payments queue drives the majority of repeat contacts in this period.',
    legendLabel: 'Repeat contacts',
    dotColor: '#d9534f',
  },
  {
    key: 'unresolvedRisk',
    annualKey: 'unresolvedRiskAnnual',
    title: 'Unresolved Escalations',
    label: 'Unresolved escalation premium · $725K annualised',
    description:
      'Contacts ending without first-contact resolution or with unnecessary escalation carry a retention premium beyond the dissatisfied-contact baseline, including regulatory complaint filing risk.',
    legendLabel: 'Unresolved contacts',
    dotColor: '#e8806f',
  },
]

export const PROTECTED_LINES = [
  {
    key: 'coachingProtected',
    annualKey: 'coachingProtectedAnnual',
    title: 'Coaching-Protected LTV',
    label: 'Billing FCR +22pts W5 to W8 · formal coaching on four agents',
    description:
      'Formal coaching on four flagged billing agents recovered first-contact resolution and reduced repeat contacts - protecting customer relationships and LTV.',
    legendLabel: 'Coaching-protected LTV',
    dotColor: '#1a7a4a',
  },
  {
    key: 'csatProtected',
    annualKey: 'csatProtectedAnnual',
    title: 'CSAT Recovery Value',
    label: 'CSAT partial recovery W6-W8 post-intervention',
    description:
      'Customer satisfaction partially recovered in W6-W8 as billing handling improved. Further coaching can close the gap to the 4.2 target.',
    legendLabel: 'CSAT recovery',
    dotColor: '#228b5a',
  },
]
