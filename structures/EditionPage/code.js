const page_unique_id = aptugo.generateID()
const asocTableID = Parameters.unique_id
const tableDetails = aptugo.store.getState().application.tables.find(table => table.unique_id === asocTableID)
const tableName = tableDetails.name
const tablesingleName = tableDetails.singleName
const newPageProperties = {
	unique_id: page_unique_id,
	name: `Add/Edit ${tableDetails.name}`,
	path: `/${aptugo.friendly(tableDetails.name)}/edit/:id?`,
	filename: `${tableDetails.name}_edit.tsx`
}

const childFields = tableDetails.fields.map((field, index) => {
	return {
		"name": field.column_name,
		"value": "div",
		"type": "element",
		"children": [
				{
						"name": "field",
						"value": "field",
						"type": "element",
						"values": {
								"Field": field.unique_id,
								"Type": "edit",
								"Autofocus": index === 0
						},
						"children": []
				}
		]
	}
})

const ph = {
	"name": "Page Header",
	"type": "element",
	"value": "ph",
	"children": [{
		"name": `Load ${tableName}`,
		"value": "loadFromRedux",
		"values": {
			"data": "2OqNUsXv",
			"searchString": "props.match.params.id",
			"variableName": `loaded${aptugo.friendly(tablesingleName)}`,
			"fieldToSearch": "_id"
		}
	}, {
		"children": [{
			"name": `Set ${tableName} data from Database`,
			"value": "code",
			"collapseStatus": "expand",
			"values": {
				"code": `if (props.match.params.id && loaded${aptugo.friendly(tablesingleName)}.length && loaded${aptugo.friendly(tablesingleName)}[0]._id !== ${aptugo.friendly(tablesingleName)}sdata._id) {\n  set${aptugo.friendly(tableName)}Data( { ...loaded${aptugo.friendly(tablesingleName)}[0] } )\n}`
			}
		}],
		"name": `Loaded${aptugo.friendly(tablesingleName)}`,
		"value": "watchVariable",
		"values": {
			"watchVariable": `loaded${aptugo.friendly(tablesingleName)}`
		}
	}, {
		"name": `Save ${aptugo.friendly(tableName)}`,
		"value": "function",
		"values": {
			"functionName": `Save${aptugo.friendly(tablesingleName)}`,
			"functionBody": "const data = { ...Productsdata }\nprops.history.push('/Products')"
		},
		"children": [{
			"name": `Save ${aptugo.friendly(tablesingleName)} to Database`,
			"value": "saveToRedux",
			"values": {
				"data": "2OqNUsXv"
			},
		}],
	}],
}

const b = {
	"name": "Body",
	"value": "b",
	"type": "element",
	"values": {
		"className": [
			"theme.pages"
		],
		"primaryColor": "green"
	},
	"children": [
			{
					"name": "div",
					"value": "div",
					"type": "element",
					"values": {
							"class": "theme.mainarea"
					},
					"children": [
							{
									"name": "Container",
									"value": "Container",
									"type": "element",
									"values": {
											"className": ""
									},
									"children": [
											{
													"name": "div",
													"value": "div",
													"type": "element",
													"values": {
															"class": "theme.tableHeading"
													},
													"children": [
															{
																	"name": "typography",
																	"value": "typography",
																	"type": "element",
																	"values": {
																			"tag": "h4"
																	},
																	"children": [
																			{
																					"name": "text",
																					"value": "text",
																					"values": {
																							"Content": "{`${props.match.params.id ? 'Edit' : 'Add'} " + tablesingleName + "`}"
																					},
																					"children": []
																			}
																	]
															}
													]
											},
											{
													"name": "Paper",
													"value": "Paper",
													"type": "element",
													"values": {
															"className": [
																	"theme.padded"
															]
													},
													"children": [
															{
																	"name": "div",
																	"value": "div",
																	"type": "element",
																	"values": {
																			"class": "classes.tableResponsive"
																	},
																	"children": childFields
															},
															{
																	"name": "Buttons",
																	"value": "div",
																	"type": "element",
																	"values": {
																			"class": "classes.actionArea"
																	},
																	"children": [
																			{
																					"name": "Save Button",
																					"value": "button",
																					"type": "element",
																					"values": {
																							"Action": `Save${aptugo.friendly(tablesingleName)}`,
																							"ButtonText": "Save",
																							"Variant": "contained",
																							"Color": "primary"
																					},
																					"children": []
																			}
																	]
															}
													]
											}
									]
							}
					]
			}
	]
}

aptugo.structures.run('New Page', newPageProperties).then(() => {
	const generatedPage = aptugo.pageUtils.plain[page_unique_id]
	generatedPage.children[1] = ph
	generatedPage.children[2] = b
	aptugo.pageUtils.fix()
})

return Application