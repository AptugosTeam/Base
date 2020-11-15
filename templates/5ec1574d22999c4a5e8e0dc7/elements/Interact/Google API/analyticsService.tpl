{% set parentElement = element.parent | elementData %}
  module.exports = (app) => {
  app.post('{{ parentElement.values.endpoint }}', (req, response) => {
    const { google } = require('googleapis')
    const path = require('path')
    console.log(req.body)

    const analyticsreporting = google.analyticsreporting('v4')

    async function runSample() {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, 'oauth2.keys.json'),
        scopes: ['https://www.googleapis.com/auth/analytics'],
      })

      google.options({ auth })

      const res = await analyticsreporting.reports.batchGet({
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
                {
                  expression: '{{ element.values.metric }}',
                },
              ],
            },
          ],
        },
      })
      response.send(res.data)
    }
    runSample()
  })
}
