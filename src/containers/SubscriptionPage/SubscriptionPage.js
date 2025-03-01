import React from 'react'
import { LayoutSingleColumn, Page } from '../../components'
import TopbarContainer from '../TopbarContainer/TopbarContainer'
import css from './SubscriptionPage.module.css';

const planList = {
  basic: {
    price: 15,
    features: [
      'Unlimited Access',
      '5 free listings'
    ],
    bestDeal: false,
    ctaLabel: 'Start for Basic',
    paymentLink: 'https://buy.stripe.com/test_dR6g0n9Uu8UDbhSbII',
  },
  advanced: {
    price: 25,
    features: [
      'Unlimited Access',
      '8 free listings',
      'Monthly Analytic Report'
    ],
    bestDeal: true,
    ctaLabel: 'Get Advanced',
    paymentLink: 'https://buy.stripe.com/test_cN2aG3eaK8UDdq06op',
  },
  pro: {
    price: 35,
    features: [
      'Unlimited Access',
      'Unlimited listings',
      'Monthly Analytic Report',
      'Boosted Listings',
    ],
    bestDeal: false,
    ctaLabel: 'Get Pro',
    paymentLink: 'https://buy.stripe.com/test_dR6g0n9Uu8UDbhSbII',
  },
}

export default function SubscriptionPage() {
  return (
    <Page title='Subscription'>
      <LayoutSingleColumn
        topbar={<TopbarContainer />}
      >
        <div className={css.container}>
          <div className={css.planCardsContainer}>
            {Object.entries(planList).map(([key, value]) => (
              <div className={css.planCard}>
                {value.bestDeal && <div className={css.bestDealBadge}>#bestdeal</div>}
                <h4 style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{key}</h4>
                <p style={{ fontSize: 60, fontWeight: 'bold' }}>${value.price}</p>
                <p>billed monthly</p>
                <div className={css.featureListContainer}>
                  {value.features.map(i => (
                    <p>✓ {i}</p>
                  ))}
                </div>
                <div
                  className={css.ctaButtonContainer}
                  onClick={() => { }}
                >
                  <div>{value.ctaLabel}</div>
                  <div
                    className={css.ctaButton}
                  >
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutSingleColumn>
    </Page>
  )
}
