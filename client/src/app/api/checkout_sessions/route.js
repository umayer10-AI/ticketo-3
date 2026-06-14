import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getSerSession } from '@/lib/api/session'

export async function POST(req) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const user = await getSerSession()

    const body = await req.json();
    const { type } = body;
    console.log(body)

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: 'price_1Thitd3LdFJq1TM13BPKrFoV',
          quantity: body?.quantity,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // cencel_url: `${origin}/cencel?session_id={CHECKOUT_SESSION_ID}`,
    });
    console.log(session)
    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}