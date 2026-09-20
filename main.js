export default {
  async fetch(request, env) {
    const response = await env.AI.run(
      'typesafe/jev',
      {
        state: {
          ticket: {
            subject: 'Duplicate charge',
            message: 'I was charged twice for order A-104. Please refund the duplicate.',
          },
          order: {
            id: 'A-104',
            charges: [
              { amount_usd: 49, status: 'captured' },
              { amount_usd: 49, status: 'captured' },
            ],
          },
          refund_policy: 'Duplicate charges are eligible for a refund.',
        },
        questions: {
          refund_requested: {
            type: 'noul',
            instructions: 'Does `ticket.message` request a refund?',
          },
          policy_supports_refund: {
            type: 'noul',
            instructions:
              'Does `refund_policy` support the refund requested in `ticket.message`, given `order.charges`?',
          },
        },
      },
    )

    return Response.json(response)
  },
}
