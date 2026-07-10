/** Meridian Energy — UK residential energy contact driver taxonomy */

export const DRIVER_TAXONOMY = {
  'Billing & Payments': [
    'Billing Disputes',
    'Incorrect Charges',
    'Payment Plan Requests',
    'Tariff Corrections',
    'Direct Debit Issues',
    'Final Bill Queries',
    'Back-Billing Disputes',
    'Refund Requests',
  ],
  'Metering': [
    'Meter Reading Submission',
    'Smart Meter Installation',
    'Faulty Meter',
    'Estimated Reading Dispute',
    'Meter Exchange',
  ],
  'Outages & Emergencies': [
    'Power Cut Reporting',
    'Restoration Updates',
    'Planned Outage Query',
    'Emergency Escalation',
  ],
  'Moving & Connections': [
    'Moving Home',
    'New Connection',
    'Change of Tenancy',
    'Disconnection Request',
  ],
  'Tariffs & Contracts': [
    'Tariff Switch',
    'Fixed Deal Renewal',
    'Exit Fee Query',
    'Price Cap Query',
  ],
  'Account & General': [
    'Account & Login Issues',
    'Complaints',
    'Policy Clarification',
    'Follow-up Calls',
  ],
}

export const L1_CATEGORIES = Object.keys(DRIVER_TAXONOMY)

export const L1_WEIGHTS = {
  'Billing & Payments': 0.32,
  'Outages & Emergencies': 0.18,
  'Metering': 0.15,
  'Tariffs & Contracts': 0.15,
  'Moving & Connections': 0.12,
  'Account & General': 0.08,
}

export const L2_WEIGHTS = {
  'Billing & Payments': {
    'Billing Disputes': 0.22,
    'Incorrect Charges': 0.18,
    'Payment Plan Requests': 0.16,
    'Back-Billing Disputes': 0.14,
    'Refund Requests': 0.10,
    'Tariff Corrections': 0.08,
    'Direct Debit Issues': 0.07,
    'Final Bill Queries': 0.05,
  },
  'Metering': {
    'Meter Reading Submission': 0.30,
    'Estimated Reading Dispute': 0.25,
    'Faulty Meter': 0.20,
    'Smart Meter Installation': 0.15,
    'Meter Exchange': 0.10,
  },
  'Outages & Emergencies': {
    'Power Cut Reporting': 0.35,
    'Restoration Updates': 0.30,
    'Planned Outage Query': 0.20,
    'Emergency Escalation': 0.15,
  },
  'Moving & Connections': {
    'Moving Home': 0.40,
    'New Connection': 0.25,
    'Change of Tenancy': 0.20,
    'Disconnection Request': 0.15,
  },
  'Tariffs & Contracts': {
    'Tariff Switch': 0.35,
    'Fixed Deal Renewal': 0.30,
    'Exit Fee Query': 0.20,
    'Price Cap Query': 0.15,
  },
  'Account & General': {
    'Account & Login Issues': 0.35,
    'Complaints': 0.25,
    'Policy Clarification': 0.22,
    'Follow-up Calls': 0.18,
  },
}

export const HIGH_RISK_L2 = new Set([
  'Billing Disputes',
  'Incorrect Charges',
  'Payment Plan Requests',
  'Tariff Corrections',
  'Back-Billing Disputes',
  'Refund Requests',
])

export const HIGH_RISK_L1 = new Set(['Billing & Payments'])

export const ALL_L2_DRIVERS = L1_CATEGORIES.flatMap((l1) =>
  DRIVER_TAXONOMY[l1].map((l2) => ({ l1, l2 })),
)

export function isHighRiskDriver(l1, l2) {
  return HIGH_RISK_L1.has(l1) && HIGH_RISK_L2.has(l2)
}

export function pickWeightedDriver(randFn) {
  const l1Items = L1_CATEGORIES
  const l1Weights = l1Items.map((l1) => L1_WEIGHTS[l1])
  const l1 = pickWeightedItem(l1Items, l1Weights, randFn)
  const l2Items = DRIVER_TAXONOMY[l1]
  const weights = L2_WEIGHTS[l1]
  const l2Weights = l2Items.map((l2) => weights[l2] ?? 1 / l2Items.length)
  const l2 = pickWeightedItem(l2Items, l2Weights, randFn)
  return { l1, l2 }
}

function pickWeightedItem(items, weights, randFn) {
  const r = randFn()
  let acc = 0
  for (let i = 0; i < items.length; i++) {
    acc += weights[i]
    if (r < acc) return items[i]
  }
  return items[items.length - 1]
}
