const dashboardID = aptugo.generateID()

Application.pages = [{
	"name": "Application Root",
	"type": "page",
	"subtype": "cascade",
	"prevent_delete": true,
	"children": [{
		"name": "Before Page Render",
		"type": "element",
		"value": "bpr",
		"prevent_delete": true
	}, {
		"name": "Page Header",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [{
			"name": "State mgmt for sidebar",
			"prevent_delete": false,
			"cascades": true,
			"type": "element",
			"value": "useState",
			"values": {
				"variableName": "sidebarOpen",
				"defaultValue": "true"
			}
		}, {
			"name": "Function for sidebar toggle",
			"prevent_delete": false,
			"cascades": true,
			"type": "element",
			"value": "function",
			"values": {
				"functionName": "handleDrawerToggle",
				"functionBody": "setsidebarOpen( !sidebarOpen )"
			}
		}]
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"children": [{
			"name": "Site Sidebar",
			"prevent_delete": false,
			"cascades": true,
			"children": [{
				"name": "Sidebar Title Area",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "Toggle sidebar button",
					"prevent_delete": false,
					"type": "element",
					"value": "IconButton",
					"values": {
						"Action": "handleDrawerToggle",
						"icon": "Menu"
					}
				}, {
					"name": "text",
					"prevent_delete": false,
					"type": "element",
					"value": "text",
					"collapseStatus": "expand",
					"values": {
						"Content": Application.settings.name
					}
				}],
				"type": "element",
				"value": "div",
				"values": {
					"class": "classes.SidebarTitle"
				}
			}, {
				"name": "Site Links",
				"prevent_delete": false,
				"children": [{
					"name": "navLink",
					"prevent_delete": false,
					"children": [{
						"name": "text",
						"prevent_delete": false,
						"cascades": false,
						"type": "element",
						"value": "text",
						"values": {
							"Content": "Home"
						}
					}],
					"type": "element",
					"value": "navLink",
					"values": {
						"destination": "/"
					}
				}, {
					"name": "autolinking",
					"prevent_delete": false,
					"cascades": false,
					"type": "element",
					"value": "autolinking",
					"values": {
						"fromLink": dashboardID
					}
				}],
				"type": "element",
				"value": "list"
			}],
			"type": "element",
			"value": "sidebar",
			"values": {
				"ColorSchema": "Red",
				"open": "sidebarOpen",
				"handleOpen": "handleDrawerToggle"
			}
		}, {
			"name": "Aptugo Footer",
			"prevent_delete": false,
			"cascades": true,
			"children": [{
				"name": "div",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "text",
					"prevent_delete": false,
					"cascades": false,
					"type": "element",
					"value": "text",
					"collapseStatus": "expand",
					"values": {
						"Content": "© Aptugo 2020, All rights reserved"
					}
				}, {
					"name": "text",
					"prevent_delete": false,
					"cascades": false,
					"type": "element",
					"value": "text",
					"collapseStatus": "expand",
					"values": {
						"Content": "<div className={classes.madewithaptugo}><div><div>Proudly made with<div>Aptugo</div></div></div></div>"
					}
				}],
				"type": "element",
				"value": "div",
				"collapseStatus": "expand",
				"values": {
					"class": "classes.footer"
				}
			}],
			"type": "element",
			"value": "div",
			"collapseStatus": "expand",
			"values": {
				"class": "sidebarOpen ? classes.footerWithSidebarOpen : classes.footerWithSidebarClosed"
			}
		}]
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true
	}, {
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
			"children": []
		}, {
			"name": "Page Header",
			"type": "element",
			"value": "ph",
			"prevent_delete": true
		}, {
			"name": "Body",
			"type": "element",
			"value": "b",
			"prevent_delete": true,
			"children": [{
				"name": "div",
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
							}
						}],
						"type": "element",
						"value": "typography",
						"collapseStatus": "collapse",
						"values": {
							"tag": "h1"
						}
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
							}
						}],
						"type": "element",
						"value": "typography",
						"collapseStatus": "collapse",
						"values": {
							"tag": "body1"
						}
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
						}
					}],
					"type": "element",
					"value": "div",
					"collapseStatus": "expand",
					"values": {
						"class": "classes.bigHello"
					}
				}],
				"type": "element",
				"value": "div",
				"values": {
					"class": "sidebarOpen ? classes.withSidebarOpen : classes.withSidebarClosed"
				}
			}]
		}, {
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false
		}, {
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true
		}]
	}],
	"path": "",
	"parent": false
}]

Application.tables = []

return Application