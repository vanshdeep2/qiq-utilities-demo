export const LTV_DEFAULTS = {
  avgOrderValue: 158,
  customerLtv: 22800,
  lifetimeMonths: 144,
  dissatisfiedPct: 18,
  churnBenchmark: 32,
  totalContacts: 2200,
}

const PERIOD_WEEKS = 8
const ANNUALISATION = 52 / PERIOD_WEEKS

// 8-week period values (donut centre + segments)
const PERIOD_RISK = {
  dissatisfiedRisk: 1_803_846,
  repeatRisk: 69_231,
  unresolvedRisk: 111_538,
  totalRisk: 1_985_000,
}

const PERIOD_PROTECTED = {
  coachingProtected: 692_308,
  csatProtected: 365_385,
  totalProtected: 1_058_000,
}

// Annualised line items (legend)
const ANNUAL_RISK = {
  dissatisfiedRiskAnnual: 11_725_000,
  repeatRiskAnnual: 450_000,
  unresolvedRiskAnnual: 725_000,
  totalRiskAnnual: 12_900_000,
}

const ANNUAL_PROTECTED = {
  coachingProtectedAnnual: 4_500_000,
  csatProtectedAnnual: 2_400_000,
  totalProtectedAnnual: 6_900_000,
}

export function computeLtvFinancials(assumptions) {
  const { customerLtv, dissatisfiedPct, churnBenchmark, totalContacts } = assumptions

  const annualContacts = Math.round(totalContacts * ANNUALISATION)
  const dissatisfiedAnnual = Math.round(annualContacts * (dissatisfiedPct / 100))

  return {
    ltvPerCustomer: customerLtv,
    annualContacts,
    dissatisfiedAnnual,
    churnRate: churnBenchmark,
    ...PERIOD_RISK,
    ...PERIOD_PROTECTED,
    ...ANNUAL_RISK,
    ...ANNUAL_PROTECTED,
    totalSurfacedPeriod: PERIOD_RISK.totalRisk + PERIOD_PROTECTED.totalProtected,
    totalSurfacedAnnual: 19_800_000,
  }
}
