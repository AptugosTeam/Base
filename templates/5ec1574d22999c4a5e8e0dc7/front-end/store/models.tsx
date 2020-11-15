{% for table in application.tables %}
export interface I{{ table.name | friendly | capitalize }}Item {
  _id?: String
  {% for field in table.fields %}
    {% set fieldInfo = field | fieldData %}
    {% if fieldInfo.options.frontEndType %}
      {% set datatype = fieldInfo.options.frontEndType %}
    {% else %}
      {% set datatype = fieldInfo.dataType | lower %}
    {% endif %}
    {% if field.reference %}
      {% set fieldInfoRef = field.reference | fieldData %}
      {% if fieldInfoRef.table.subtype == 'Aptugo' %}
        {{ field.column_name | friendly }}: I{{ fieldInfoRef.table.name | friendly | capitalize }}Item
      {% else %}
        {{ field.column_name | friendly }}: {{ fieldInfoRef.dataType }}
      {% endif %}
    {% else %}
      {{ field.column_name | friendly }}: {{ datatype }}
    {% endif %}
  {% endfor %}
}

export interface Ipaginated{{ table.name | friendly | capitalize }} {
  docs: I{{ table.name | friendly | capitalize }}Item[]
  totalDocs: number
  offset: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}
{% endfor %}

export enum ApiStatus {
  NOTLOADED = 'notloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed'
}
