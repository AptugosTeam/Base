{ {{ element.values.variable }}.map((item,index) => {
{% if element.values.code %}{{ element.values.code }}{% endif %}
    return <React.Fragment key={index}>{{ content | raw }}</React.Fragment>
})}