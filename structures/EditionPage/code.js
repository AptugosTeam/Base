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
		"unique_id": "Aw3113Li",
		"parent": "D6wXZgLw",
		"collapseStatus": "collapse"
	}, {
		"name": "Page Header",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [{
			"unique_id": "MOhS9b61",
			"name": "Load Personas",
			"prevent_delete": false,
			"cascades": false,
			"parent": "ZdEa1Trt",
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
			"unique_id": "0thGeM2y",
			"name": "LoadedPersona",
			"prevent_delete": false,
			"cascades": false,
			"parent": "ZdEa1Trt",
			"children": [{
				"unique_id": "QagObADu",
				"name": "code",
				"prevent_delete": false,
				"cascades": false,
				"parent": "0thGeM2y",
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
			"unique_id": "cpNVzm40",
			"name": "function",
			"prevent_delete": false,
			"cascades": false,
			"parent": "ZdEa1Trt",
			"children": [{
				"unique_id": "q0fTqtbx",
				"name": "saveToRedux",
				"prevent_delete": false,
				"cascades": false,
				"parent": "cpNVzm40",
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
		"unique_id": "ZdEa1Trt",
		"parent": "D6wXZgLw",
		"collapseStatus": "collapse"
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": [{
			"unique_id": "SRCOlwyv",
			"name": "div",
			"prevent_delete": false,
			"cascades": false,
			"parent": "7S4JCHFk",
			"children": [{
				"unique_id": "r81G2922",
				"name": "Paper",
				"prevent_delete": false,
				"cascades": false,
				"parent": "SRCOlwyv",
				"children": [{
					"unique_id": "TvW5piim",
					"name": "typography",
					"prevent_delete": false,
					"cascades": false,
					"parent": "r81G2922",
					"children": [{
						"unique_id": "3B2T8IPE",
						"name": "text",
						"prevent_delete": false,
						"cascades": false,
						"parent": "TvW5piim",
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
					"unique_id": "7v1nSWVZ",
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"parent": "r81G2922",
					"children": [{
						"unique_id": "K0EC8p6p",
						"name": "Tipo",
						"prevent_delete": false,
						"cascades": false,
						"parent": "7v1nSWVZ",
						"children": [{
							"unique_id": "SCPeWW61",
							"name": "field",
							"prevent_delete": false,
							"cascades": false,
							"parent": "K0EC8p6p",
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
						"unique_id": "JafClpCB",
						"name": "Natural",
						"prevent_delete": false,
						"cascades": false,
						"parent": "7v1nSWVZ",
						"children": [{
							"unique_id": "xsd3trEk",
							"name": "Nombre",
							"prevent_delete": false,
							"cascades": false,
							"parent": "JafClpCB",
							"children": [{
								"unique_id": "yD9lCWAQ",
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"parent": "xsd3trEk",
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
							"unique_id": "kOFuBhuC",
							"name": "Apellido",
							"prevent_delete": false,
							"cascades": false,
							"parent": "JafClpCB",
							"children": [{
								"unique_id": "tTLvBg3R",
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"parent": "kOFuBhuC",
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
							"unique_id": "L9D3Nl9h",
							"name": "Apellido Materno",
							"prevent_delete": false,
							"cascades": false,
							"parent": "JafClpCB",
							"children": [{
								"unique_id": "gD5y5pmI",
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"parent": "L9D3Nl9h",
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
						"unique_id": "gK7mb39n",
						"name": "Jurídica",
						"prevent_delete": false,
						"cascades": false,
						"parent": "7v1nSWVZ",
						"children": [{
							"unique_id": "nlPi6HXr",
							"name": "Razon Social",
							"prevent_delete": false,
							"cascades": false,
							"parent": "gK7mb39n",
							"children": [{
								"unique_id": "pTGCNa7l",
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"parent": "nlPi6HXr",
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
							"unique_id": "TahQ4Nzd",
							"name": "div",
							"prevent_delete": false,
							"cascades": false,
							"parent": "gK7mb39n",
							"children": [{
								"unique_id": "aS311kuA",
								"name": "Nombre Fantasia",
								"prevent_delete": false,
								"cascades": false,
								"parent": "TahQ4Nzd",
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "JERxxnAS",
									"Type": "edit"
								}
							}, {
								"unique_id": "KyKvMP5y",
								"name": "RUT",
								"prevent_delete": false,
								"cascades": false,
								"parent": "TahQ4Nzd",
								"children": [],
								"type": "element",
								"value": "field",
								"collapseStatus": "expand",
								"values": {
									"Field": "PmAardC0",
									"Type": "edit"
								}
							}, {
								"unique_id": "h9XJE4C9",
								"name": "Representante Legal",
								"prevent_delete": false,
								"cascades": false,
								"parent": "TahQ4Nzd",
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
							"unique_id": "iaWQLzKX",
							"name": "Personas",
							"prevent_delete": false,
							"cascades": false,
							"parent": "gK7mb39n",
							"children": [{
								"unique_id": "KZW3eD6k",
								"name": "field",
								"prevent_delete": false,
								"cascades": false,
								"parent": "iaWQLzKX",
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
					"unique_id": "3DEBeDWx",
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"parent": "r81G2922",
					"children": [{
						"unique_id": "9kFSIknI",
						"name": "button",
						"prevent_delete": false,
						"cascades": false,
						"parent": "3DEBeDWx",
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
		"unique_id": "7S4JCHFk",
		"parent": "D6wXZgLw",
		"collapseStatus": "collapse"
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"unique_id": "Onr9RvrU",
		"parent": "D6wXZgLw",
		"collapseStatus": "expand"
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"unique_id": "v6OUX0ee",
		"parent": "D6wXZgLw",
		"collapseStatus": "collapse"
	}],
	"unique_id": "D6wXZgLw",
	"path": "/Personas/edit/:id?",
	"parent": "rrTqBh0G",
	"collapseStatus": "collapse",
	"filename": "personas_edit.tsx",
	"priority": 5
}

Application.pages[0].children.push(page)

return Application