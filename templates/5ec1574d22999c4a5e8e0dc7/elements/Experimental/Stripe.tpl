/*
path: Stripe.tpl
type: file
unique_id: stripe
icon: ico-field
helpText: Use Stripe Payments
children: []
options:
  - name: apikey
    display: Secret Stripe's API key.
    type: text
    options: ''
settings:
  - name: BackendPackages
    value: '"stripe": "^8.201.0",'
  - name: ServerRoute
    value: |
      // This is your test secret API key.
      const stripe = require('stripe')('{{ element.values.apikey }}');

      app.post('/create-checkout-session', async (req, res) => {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: 'price_1KO6F4DbbpFtBwctvqTqkO1s',
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `http://localhost:8080/?success=true`,
          cancel_url: `http://localhost:8080?canceled=true`,
        });
        res.redirect(303, session.url);
      });
*/
{% set bpr %}
const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="http://localhost:4567/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const [message, setMessage] = React.useState("");
React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
{% endset %}
{{ save_delayed('ph',ph) }}
{message ? <Message message={message} /> : <ProductDisplay /> }
{{ dump(element.values) }}