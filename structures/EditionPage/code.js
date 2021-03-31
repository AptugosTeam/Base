const page = {
	"name": "Add/Edit Personas",
	"type": "page",
	"children": [{
		"name": "Before Page Render",
		"type": "element",
		"value": "bpr",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "collapse"
	}, {
		"name": "Page Headerz",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [{
			"name": "Load Personas",
			"prevent_delete": false,
			"cascades": false,
			"children": [],
			"type": "element",
			"value": "loadFromRedux",
			"collapseStatus": "expand",
			"values": {
				"data": "4iEQiz3D",
				"searchString": "props.match.params.id",
				"variableName": "loadedPersona",
				"fieldToSearch": "_id"
			}
		}, {
			"name": "LoadedPersona",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "code",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "code",
				"collapseStatus": "expand",
				"values": {
					"code": "if (props.match.params.id && loadedPersona.length && loadedPersona[0]._id !== Personasdata._id) {\n  setPersonasData( { ...loadedPersona[0] } )\n}"
				}
			}],
			"type": "element",
			"value": "watchVariable",
			"collapseStatus": "collapse",
			"values": {
				"watchVariable": "loadedPersona"
			}
		}, {
			"name": "function",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "saveToRedux",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "saveToRedux",
				"collapseStatus": "expand",
				"values": {
					"data": "4iEQiz3D"
				}
			}],
			"type": "element",
			"value": "function",
			"collapseStatus": "collapse",
			"values": {
				"functionName": "SavePerson",
				"functionBody": "const data = {...Personasdata}\nprops.history.push('/Personas')"
			}
		}],
		"cascades": false,
		"collapseStatus": "collapse"
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": [{
			"name": "div",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "Paper",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "typography",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "text",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "text",
						"collapseStatus": "expand",
						"values": {
							"Content": "{`${props.match.params.id ? 'Editar' : 'Agregar'}  Persona`}"
						}
					}],
					"type": "element",
					"value": "typography",
					"collapseStatus": "expand",
					"values": {
						"tag": "h2"
					}
				}, {
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "Tipo",
						"prevent_delete": false,
						"cascades": false,
						"children": [{
							"name": "field",
							"prevent_delete": false,
							"cascades": false,
							"children": [],
							"type": "element",
							"value": "field",
							"collapseStatus": "expand",
							"values": {
								"Field": "nuX2xJQM",
								"Type": "edit",
								"Autofocus": true
							}
						}],
						"type": "element",
						"value": "div",
						"collapseStatus": "expand"
					}, {
						"name": "Natural",
						"prevent_delete": false,
						"cascades": false,
						"children": [{
							"name": "Nombre",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "lB7H7dFe",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand"
						}, {
							"name": "Apellido",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "gwsFRNHV",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand"
						}, {
							"name": "Apellido Materno",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "GXrcgK2O",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "collapse"
						}],
						"type": "element",
						"value": "condition",
						"collapseStatus": "expand",
						"values": {
							"condition": "Personasdata.Tipo === 'Natural'"
						}
					}, {
						"name": "Jurídica",
						"prevent_delete": false,
						"cascades": false,
						"children": [{
							"name": "Razon Social",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "ohMmAqQ9",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand"
						}, {
							"name": "div",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "Nombre Fantasia",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "JERxxnAS",
									"Type": "edit"
								}
							}, {
								"name": "RUT",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "PmAardC0",
									"Type": "edit"
								}
							}, {
								"name": "Representante Legal",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "bEhTg19J",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand"
						}, {
							"name": "Personas",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "0ylFWokE",
									"Type": "edit"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "collapse"
						}],
						"type": "element",
						"value": "condition",
						"collapseStatus": "collapse",
						"values": {
							"condition": "Personasdata.Tipo === 'Juridica'"
						}
					}],
					"type": "element",
					"value": "div",
					"collapseStatus": "collapse",
					"values": {
						"class": "classes.indentedDiv"
					}
				}, {
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "button",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "button",
						"collapseStatus": "expand",
						"values": {
							"Action": "SavePerson",
							"ButtonText": "Save",
							"Variant": "contained",
							"Color": "primary"
						}
					}],
					"type": "element",
					"value": "div",
					"collapseStatus": "expand",
					"values": {
						"class": "classes.actionArea"
					}
				}],
				"type": "element",
				"value": "Paper",
				"collapseStatus": "expand"
			}],
			"type": "element",
			"value": "div",
			"collapseStatus": "expand",
			"values": {
				"class": "sidebarOpen ? classes.withSidebarOpen : classes.withSidebarClosed"
			}
		}],
		"collapseStatus": "collapse"
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "expand"
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "collapse"
	}],
	"path": "/Personas/edit/:id?",
	"collapseStatus": "collapse",
	"filename": "personas_edit.tsx",
	"priority": 5
}

Application.pages[0].children.push(page)

return Application