/*
path: onPageLoad.tpl
type: file
unique_id: flR4cNG4
icon: ico-field
helpText: Executes commands when DOM has been loaded and renderized
*/
React.useEffect(() => {
    {{ content | raw }}
},[])
