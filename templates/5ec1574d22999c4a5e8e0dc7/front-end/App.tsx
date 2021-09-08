/*
path: App.tsx
completePath: front-end/App.tsx
unique_id: EebCWx4V
children: []
*/
import React from 'react'
import { Route, Switch } from 'react-router-dom'

{% for page in application.pages | plain('type','page')  %}
  {% if page.filename %}
    const {{ page.name | friendly }} = React.lazy(() => import ('./Pages/{{ page.filename | removeExtension }}'))
  {% endif %}
{% endfor %}

const App: React.FunctionComponent = (props: any) => {
  const routes = [
    {% for page in application.pages | plain('type','page') %}
      {% if page.filename %}
        {
          path: "{{ page.path }}",
          name: '{{ page.name }}',
          component: {{ page.name | friendly }}
        },
      {% endif %}
    {% endfor %}
  ]

  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        return (
          <Route
            exact
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      })}
    </Switch>
  )

  return (
    <React.Fragment>
      <React.Suspense fallback={<span>Loading</span>}>
      {switchRoutes}
      </React.Suspense>
    </React.Fragment>
  )
}

export default App

