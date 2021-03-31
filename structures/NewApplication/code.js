const dashboardID = aptugo.generateID()

Application.pages = [{
	"name": "Application Root",
	"type": "page",
	"subtype": "cascade",
	"prevent_delete": true,
	"children": [
		{
			"name": "Before Page Render",
			"type": "element",
			"value": "bpr",
			"prevent_delete": true,
			"cascades": false,
			"children": [],
			"collapseStatus": "expand"
		},{
			"name": "Page Header",
			"type": "element",
			"value": "ph",
			"prevent_delete": true,
			"children": [{
				"name": "themeSelection",
				"prevent_delete": false,
				"cascades": true,
				"children": [],
				"type": "element",
				"value": "themeSelection",
				"collapseStatus": "expand",
				"values": {
					"theme": "minimum"
				}
			}],
			"cascades": false,
			"collapseStatus": "expand"
		},{
			"name": "Body",
			"type": "element",
			"value": "b",
			"prevent_delete": true,
			"children": [],
			"cascades": false,
			"collapseStatus": "expand"
		},{
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false,
			"children": [],
			"collapseStatus": "expand"
		},{
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true,
			"cascades": false,
			"children": [],
			"collapseStatus": "collapse"
		},{
			"name": "Dashboard",
			"unique_id": dashboardID,
			"type": "page",
			"path": "/",
			"filename": "dashboard.tsx",
			"prevent_delete": false,
			"children": [{
				"name": "Before Page Render",
				"type": "element",
				"value": "bpr",
				"prevent_delete": true,
				"cascades": false,
				"children": [],
				"collapseStatus": "collapse",
			}, {
				"name": "Page Header",
				"type": "element",
				"value": "ph",
				"prevent_delete": true,
				"cascades": false,
				"children": [],
				"collapseStatus": "expand",
			}, {
				"name": "Body",
				"type": "element",
				"value": "b",
				"prevent_delete": true,
				"children": [{
					"name": "sidebar",
					"prevent_delete": false,
					"cascades": true,
					"children": [{
						"name": "navLink",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "navLink",
						"collapseStatus": "expand",
						"values": {
							"Destination": "/",
							"destination": "/",
							"linkText": "Home"
						},
					}, {
						"name": "autolinking",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "autolinking",
						"collapseStatus": "expand",
						"values": {
							"fromLink": dashboardID
						},
					}],
					"type": "element",
					"value": "sidebar",
					"collapseStatus": "collapse",
					"values": {
						"colorSchema": "Greens",
						"open": "true"
					},
				}, {
					"name": "Main Area",
					"prevent_delete": false,
					"children": [{
						"name": "div - Hello Text",
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
									"Content": "Hello!"
								},
							}],
							"type": "element",
							"value": "typography",
							"collapseStatus": "collapse",
							"values": {
								"tag": "h1"
							},
						}, {
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
									"Content": "I'm your Aptugo application"
								},
							}],
							"type": "element",
							"value": "typography",
							"collapseStatus": "collapse",
							"values": {
								"tag": "body1"
							},
						}, {
							"name": "text",
							"prevent_delete": false,
							"cascades": false,
							"children": [],
							"type": "element",
							"value": "text",
							"collapseStatus": "expand",
							"values": {
								"Content": "<span>(you can edit me at the Page Manager)</span>"
							},
						}],
						"type": "element",
						"value": "div",
						"collapseStatus": "expand",
						"values": {
							"class": "classes.bigHello"
						},
					}],
					"type": "element",
					"value": "div",
					"values": {
						"class": "theme.mainarea"
					},
					"cascades": false,
					"collapseStatus": "expand",
				}],
				"cascades": true,
				"collapseStatus": "expand",
				"values": {
					"className": ["theme.pages"]
				},
			}, {
				"name": "Page Footer",
				"type": "element",
				"value": "pf",
				"prevent_delete": true,
				"cascades": false,
				"children": [],
				"collapseStatus": "collapse",
			}, {
				"name": "After Page Render",
				"type": "element",
				"value": "apr",
				"prevent_delete": true,
				"cascades": false,
				"children": [],
				"collapseStatus": "collapse",
			}],
			"collapseStatus": "expand"
		}
	],
	"path": "",
	"parent": false,
	"collapseStatus": "expand"
}]

Application.tables = []
Application.assets = []

return Application