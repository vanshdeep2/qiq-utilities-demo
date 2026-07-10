export const AGENT_ORDER = [
  'michael-naidoo', 'nomsa-dlamini', 'lerato-nkosi', 'pieter-botha', 'busisiwe-maseko',
  'ayanda-mbeki', 'zanele-ndlovu', 'thabo-van-der-merwe', 'janine-jacobs', 'sipho-khumalo',
]

export const AGENTS = {
  'michael-naidoo': {
    name: 'Michael Naidoo', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 94.2, qa_w1: 93.8, pa: 92.0, rr: 84.0, cf: 0,
    qa_series: [93.8, 94.0, 94.5, 94.2, 94.8, 94.5, 94.0, 94.2], status: 'Benchmark',
    insight: 'Michael is the billing benchmark on the Meridian Energy team - 84% FCR on Billing & Payments with consistent payment arrangement offers and accurate 10-day disconnect notice communication. His calls are used as peer coaching reference material.',
    coaching: [
      { topic: 'Best Practice - Billing Resolution', type: 'strength',
        content: 'Michael, your billing handling is genuinely the standard this team is working toward. You consistently confirm payment arrangement terms and due dates before close, quote the correct 10-day disconnect notice policy, and complete account verification on every billing call without rushing the customer. That combination is why your Billing FCR has held above 80% across the full eight-week period. Kagiso is sharing your approach with the squad this week as peer coaching reference material. Thank you for agreeing to support Sipho on Thursday - your workflow is exactly what new agents need to see in practice.',
        evidence: '"Your payment arrangement of $142.50 over 3 months starts today - I\'ve confirmed that in the system." - benchmark close on every billing call.',
        lms: null },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-28', message: 'Michael - thank you for agreeing to peer coach Sipho on Thursday. Your billing workflow is exactly what we need the team emulating.' },
    ],
  },
  'lerato-nkosi': {
    name: 'Lerato Nkosi', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 88.0, qa_w1: 58.3, pa: 82.0, rr: 82.0, cf: 0,
    qa_series: [58.3, 55.0, 52.8, 54.2, 62.0, 78.5, 85.0, 88.0], status: 'On Track',
    insight: 'Lerato showed dramatic improvement after W5 formal coaching on payment arrangement confirmation. Billing FCR moved from 25% in W1-W4 to 82% by W8. Micro coaching triggers have dropped from daily to twice weekly.',
    coaching: [
      { topic: 'Payment Arrangement Confirmation on Close', type: 'development',
        content: 'Lerato, your communication on billing calls has improved noticeably and customers are responding well to your tone - that is a real strength and you should feel good about the progress since week 1. The one habit that will take your FCR from good to great is confirming arrangement amount and due dates on every close, even when the plan is already processing in the system. Before you end each call, use the confirmation script: state the monthly amount, the start date, and that it is logged in Meridian Energy\'s system. You missed this on 2 contacts today, which is down from last week and shows the W5 formal session is working. Keep applying the script on every close this week - you are very close to locking this in.',
        evidence: '2 contacts closed without payment arrangement confirmation today.',
        lms: 'Billing Close Protocol - Meridian Energy CS' },
      { topic: 'Post-Coaching Improvement', type: 'strength',
        content: 'Your W5 formal session outcomes are showing clearly in the data and that is down to the effort you put in after a difficult start to the period. Billing FCR is up 57 points since week 1 and micro coaching triggers have dropped from daily to twice weekly - that is meaningful behaviour change in a short window. Customers who get a clear arrangement confirmation from you are not calling back, which protects both CSAT and retention. Keep using the confirmation script on every call. The trajectory you are on now is exactly what we were aiming for when we scheduled the formal session.',
        evidence: 'Billing FCR 25% W1-W4 → 82% W7-W8.',
        lms: null },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-06', message: 'Lerato - formal coaching session today at 2pm. Focus: payment arrangement confirmation before close. This follows 9 consecutive days of micro coaching on the same trigger.' },
      { from: 'Lerato Nkosi', role: 'Agent', date: '2026-05-06', message: 'Understood. I\'ve reviewed the billing close module and will apply the confirmation script on every call from today.' },
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-22', message: 'Checked your billing calls this week - strong improvement. FCR at 82%. Keep it going.' },
    ],
  },
  'pieter-botha': {
    name: 'Pieter Botha', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 87.2, qa_w1: 61.5, pa: 85.0, rr: 79.0, cf: 1,
    qa_series: [61.5, 58.0, 55.2, 57.8, 65.0, 80.0, 85.5, 87.2], status: 'On Track',
    insight: 'Pieter had a critical failure in W2 for quoting a 5-day disconnect notice (policy is 10 days). Formal coaching at W5 corrected this - zero policy misquotes since W6.',
    coaching: [
      { topic: 'Disconnect Policy Accuracy', type: 'development',
        content: 'Pieter, the turnaround in your quality scores since week 5 has been one of the strongest on the team - from 61.5 to 87.2 is real improvement and it shows in how confidently you are handling billing calls now. Meridian Energy\'s disconnect notice period is 10 days from the notice date, not 5, and you have held that standard with zero misquotes since week 6. Keep the 10-day disconnect policy card visible at your workstation and reference it before quoting any timeline to a customer. When you state the policy, follow it immediately with the account status check so the customer hears both the rule and how it applies to their account. You have already proven you can do this consistently - the focus now is making it automatic on every billing contact.',
        evidence: 'W2 critical failure: stated 5-day notice. Zero misquotes W6-W8.',
        lms: 'Meridian Energy Billing Policy - Payment Arrangements' },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-07', message: 'Pieter - formal coaching logged. Outcome: policy accuracy protocol committed. Review ME-BP-CF0001 as reference for what not to do.' },
    ],
  },
  'busisiwe-maseko': {
    name: 'Busisiwe Maseko', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 79.8, qa_w1: 64.2, pa: 68.0, rr: 58.0, cf: 1,
    qa_series: [64.2, 62.0, 60.5, 61.0, 63.5, 72.0, 76.5, 79.8], status: 'Watch',
    insight: 'Busisiwe improved after W5 formal coaching but documentation accuracy on repeat contacts still lags. Resolution confirmation is better; case notes remain the gap.',
    coaching: [
      { topic: 'Case Notes Before Close', type: 'development',
        content: 'Busisiwe, your resolution confirmation on billing calls has improved since the W5 formal session and customers are getting clearer answers from you - that progress is real and worth recognising. The area that will lift your documentation pillar and reduce repeat contacts is linking the prior case before you close on any repeat interaction. When a customer calls back on the same high-bill issue, open the previous case first, reference what was agreed, and note what you did differently today. You closed 2 contacts without case documentation today, which triggered your third micro nudge this week on documentation. Try the five-second checklist before every close: issue, action taken, next step, case linked. You are improving week on week - tightening documentation is the next step to move from Watch to On Track.',
        evidence: 'Repeat contact on account ME-ACC-10012 - no link to prior case notes.',
        lms: 'Documentation Accuracy - Case Notes Protocol' },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-08', message: 'Busisiwe - formal session outcome: in progress. FCR improving but documentation pillar still at 62%. Weekly check-in continues.' },
    ],
  },
  'ayanda-mbeki': {
    name: 'Ayanda Mbeki', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 85.5, qa_w1: 55.0, pa: 80.0, rr: 78.0, cf: 0,
    qa_series: [55.0, 52.5, 50.0, 53.0, 60.0, 78.0, 83.0, 85.5], status: 'On Track',
    insight: 'Ayanda skipped account verification on a billing call in W4 (critical failure). W5 formal coaching on verification protocol produced 100% pass rate W7-W8 and Billing FCR of 78%.',
    coaching: [
      { topic: 'Account Verification on Billing', type: 'development',
        content: 'Ayanda, your recovery since the W4 critical failure has been outstanding - verification checklist complete on all 6 billing calls today and Billing FCR at 78% is well above where you started this period. That kind of turnaround does not happen without deliberate practice and you should be proud of it. The standard now is to complete full account verification before discussing billing details, every time, even when the customer is frustrated or in a hurry. Walk through account number, service address, and billing postcode before accessing the account - it takes under a minute and it protects both the customer and your quality score. Share your checklist approach with Sipho when you can; it is working. Keep this discipline on every call through week 8 and beyond.',
        evidence: '100% verification pass rate W7-W8.',
        lms: 'Identity Verification - Billing Processing' },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-09', message: 'Ayanda - formal coaching outcome: passed. Verification compliance excellent this week. Share your checklist approach with Sipho.' },
    ],
  },
  'nomsa-dlamini': {
    name: 'Nomsa Dlamini', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 86.5, qa_w1: 72.1, pa: 78.0, rr: 71.0, cf: 0,
    qa_series: [72.1, 74.0, 76.5, 78.0, 80.0, 83.0, 85.0, 86.5], status: 'On Track',
    insight: 'Nomsa improved steadily on documentation accuracy for repeat contacts. Micro coaching on linking prior cases is producing measurable repeat rate reduction.',
    coaching: [
      { topic: 'Documentation on Repeat Contacts', type: 'development',
        content: 'Nomsa, your steady improvement across the eight-week period is exactly what we want to see - QA score from 72.1 to 86.5 shows consistent effort, not a one-week spike. You linked the prior case correctly on 4 of 5 repeat calls today, which is strong progress on a pillar that was dragging your documentation score earlier in the period. On the one miss - a high-bill callback - the customer had called three days earlier and the prior notes would have shortened the call and improved their experience. Before resolving any repeat contact, pause and search the account number for open cases. Say to the customer: "I can see your previous contact on [date] - let me pick up from there." That small habit reduces repeat rate and builds trust. You are on track; one more week of consistency will show in the team metrics.',
        evidence: '4/5 repeat contacts had prior case linked today.',
        lms: 'Documentation Accuracy - Repeat Contact Protocol' },
    ],
    notes: [],
  },
  'zanele-ndlovu': {
    name: 'Zanele Ndlovu', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 68.5, qa_w1: 71.2, pa: 42.0, rr: 34.0, cf: 3,
    qa_series: [71.2, 68.0, 65.5, 62.0, 60.0, 64.0, 66.5, 68.5], status: 'Action Needed',
    insight: 'Zanele has 3 critical failures including escalation avoidance on disconnect notices that led to a third contact from the same customer. Billing FCR remains at 34% - below team minimum. Second formal session scheduled.',
    coaching: [
      { topic: 'Escalation Criteria', type: 'development',
        content: 'Zanele, I want to be direct with you because this matters for your development and for the customers waiting on resolution. You care about getting answers for people and that comes through on your calls - but when a customer has contacted three times on the same disconnect issue, Meridian Energy policy requires immediate escalation, not another attempt to resolve from the front line. Two contacts today met escalation criteria and were not escalated, which puts you and the customer at risk of a fourth contact and a critical failure flag. Before our second formal session, review ME-BP-CF0004 and the escalation criteria module. When criteria are met, say clearly: "I am escalating this to our specialist billing team now - you will hear back within 24 hours." You can get this right - the session next Tuesday is about making escalation feel as natural as resolution.',
        evidence: 'ME-BP-CF0004: third contact - escalation criteria met but not escalated.',
        lms: 'Escalation Criteria - Billing & Payments' },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-20', message: 'Zanele - second formal session scheduled for next Tuesday. Escalation avoidance is the priority. Review ME-BP-CF0004 before the session.' },
    ],
  },
  'thabo-van-der-merwe': {
    name: 'Thabo van der Merwe', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 82.0, qa_w1: 76.5, pa: 74.0, rr: 68.0, cf: 0,
    qa_series: [76.5, 77.0, 78.5, 79.0, 80.0, 81.0, 81.5, 82.0], status: 'On Track',
    insight: 'Thabo is reducing AHT on outage ETA inquiries through structured workflow coaching. Steady improvement across the 8-week period.',
    coaching: [
      { topic: 'Outage ETA Communication', type: 'development',
        content: 'Thabo, your outage ETA call AHT dropped 45 seconds this week while your accuracy held steady - that is exactly the balance we are coaching toward and it is good work. You are using the outage communication checklist to provide restoration timelines in fewer steps without skipping safety verification, which is why your QA score has climbed steadily from 76.5 to 82.0 across the period. On your next outage calls, keep the checklist visible and work through it in order: confirm outage area, check crew dispatch status, state restoration window, offer outage alerts. If you cannot access ETA in the system, escalate immediately rather than saying you do not have that information. The efficiency gains you are showing this week are sustainable if you keep the structure. Well done on the consistent week-on-week improvement.',
        evidence: 'Outage ETA AHT 420s → 375s over 3 weeks.',
        lms: 'Outage ETA Communication Standards' },
    ],
    notes: [],
  },
  'janine-jacobs': {
    name: 'Janine Jacobs', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 77.5, qa_w1: 70.8, pa: 65.0, rr: 62.0, cf: 0,
    qa_series: [70.8, 71.0, 72.5, 73.0, 74.0, 75.5, 76.5, 77.5], status: 'Watch',
    insight: 'Janine is improving on high bill disputes but remains below team average on billing FCR. Monitoring through W8.',
    coaching: [
      { topic: 'High Bill Dispute Workflow', type: 'development',
        content: 'Janine, you are building momentum on high bill disputes and the data shows it - billing FCR is climbing week on week even though you are still below team average. You used the usage comparison tool on 3 of 4 dispute calls today, which is the right instinct. The one miss led to a customer callback because the manual explanation did not match Meridian Energy\'s seasonal usage patterns. On every high bill dispute, open the usage comparison tool first, review the year-over-year chart with the customer, and offer a payment arrangement if the bill is valid. It takes less time than fixing a callback. You are closer to On Track than the Watch label suggests - locking in the tool on every dispute call this week will get you there.',
        evidence: 'High bill dispute - manual explanation instead of usage comparison tool.',
        lms: 'High Bill Dispute Calculator - Meridian Energy Tools' },
    ],
    notes: [],
  },
  'sipho-khumalo': {
    name: 'Sipho Khumalo', role: 'Support Agent', team: 'Kagiso de Villiers',
    qa_w5: 75.0, qa_w1: 68.2, pa: 60.0, rr: 55.0, cf: 0,
    qa_series: [68.2, 69.0, 70.5, 71.0, 72.0, 73.5, 74.0, 75.0], status: 'On Track',
    insight: 'Sipho is new to the billing queue and improving steadily with daily micro coaching. Below benchmark but trending in the right direction.',
    coaching: [
      { topic: 'Proactive Payment Arrangement Offer', type: 'development',
        content: 'Sipho, settling into the billing queue is not easy and you should recognise the steady improvement in your QA score from 68.2 to 75.0 over eight weeks - that trend matters more than being below benchmark today. The habit that will accelerate your progress is offering a payment arrangement proactively on every high-bill call, not only when the customer asks. You did this on 2 of 5 calls today; the peer session with Michael Naidoo on Thursday will show you how he weaves payment plan offers into the natural flow of the call. Before you close any billing contact, say: "Based on your balance, I can set up a payment arrangement of $X over Y months - would that help?" Small addition, big impact on FCR and customer confidence. You are trending in the right direction - keep going.',
        evidence: '2/5 billing calls included proactive payment arrangement offer.',
        lms: 'Billing Onboarding - Week 1-4 Module' },
    ],
    notes: [
      { from: 'Kagiso de Villiers', role: 'Team Lead', date: '2026-05-21', message: 'Sipho - peer session with Michael confirmed for Thursday 10am. Focus on billing close and payment arrangement offers.' },
    ],
  },
}

export const WK_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
export const COACHING_WEEK_INDEX = 4
export const DEFAULT_SLUG = 'lerato-nkosi'

export const SPARK_PREVIEW_SLUGS = ['lerato-nkosi', 'ayanda-mbeki', 'zanele-ndlovu', 'michael-naidoo']

export const SPARK_DATA = AGENT_ORDER.map((slug) => {
  const series = AGENTS[slug].qa_series
  return {
    slug,
    name: AGENTS[slug].name,
    series,
    w8: series[series.length - 1],
  }
})
