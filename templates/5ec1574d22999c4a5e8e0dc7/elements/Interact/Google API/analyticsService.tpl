{% set parentElement = element.parent | elementData %}
  module.exports = (app) => {
  app.post('{{ parentElement.values.endpoint }}', (req, response) => {
    const { google } = require('googleapis')
    const path = require('path')

    const analyticsreporting = google.analyticsreporting('v4')
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, 'oauth2.keys.json'),
      scopes: ['https://www.googleapis.com/auth/analytics'],
    })

    google.options({ auth })

    analyticsreporting.reports.batchGet({
      requestBody: {
        reportRequests: [
          {
            viewId: '{{ parentElement.values.viewID }}',
            dateRanges: [
              {
                startDate: req.body.dateFrom || 'Today',
                endDate: req.body.dateTo || '7daysAgo',
              },
            ],

            metrics: [
              {% for metric in parentElement.values.metric|split(';') %}
              {
                expression: '{{ metric }}',
              },
              {% endfor %}
            ],
          },
        ],
      },
    }).catch(e => {
      response.status(501)
      response.send(e.errors[0].message)
    }).then(res => {
      response.send(res.data)
    })
  })
}
