/*
path: show.tpl
type: file
unique_id: NmapgiRh
icon: file.svg
*/
{% set bpr %}
import Rating from '@material-ui/lab/Rating';
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Field value={(fieldData: any) => <Rating value={ fieldData.{{ field.column_name | friendly }} } readOnly /> } />
