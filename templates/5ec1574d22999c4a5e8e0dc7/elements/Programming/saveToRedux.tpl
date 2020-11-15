{% if data %}{% set table = data | tableData %}{% else %}{% set table = element.values.data | tableData %}{% endif %}
{% set bpr %}
import { useDispatch } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { useSelector } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { IState } from '../store/reducers/index'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { add{{ table.name | friendly | capitalize }}, edit{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const dispatch = useDispatch()
{% endset %}
{{ save_delayed('ph', ph ) }}
if (data._id) {
  dispatch(edit{{ table.name | friendly | capitalize }}(data as any))
} else {
  dispatch(add{{ table.name | friendly | capitalize }}(data as any))
}

