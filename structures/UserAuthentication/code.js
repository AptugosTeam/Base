const userTable = Application.tables.find(table => table.unique_id === Parameters.table_unique_id)

const dmz = {
	"name": "Non Restricted Zone",
	"type": "page",
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
		"prevent_delete": true,
		"children": [{
			"name": "loadFromRedux",
			"prevent_delete": false,
			"cascades": true,
			"children": [],
			"type": "element",
			"value": "loadFromRedux",
			"values": {
				"data": userTable.unique_id
			}
		}],
		"cascades": false,
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "Login",
		"type": "page",
		"children": [{
			"name": "Before Page Render",
			"type": "element",
			"value": "bpr",
			"prevent_delete": true,
			"cascades": false,
			"children": [{
				"name": "code",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "code",
				"values": {
					"code": "import AuthService from \"../services/auth.service\""
				}
			}]
		}, {
			"name": "Page Header",
			"type": "element",
			"value": "ph",
			"prevent_delete": true,
			"children": [{
				"name": "function",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "function",
				"values": {
					"functionName": "handleLogin",
					"functionBody": "AuthService.login(Usersdata.Email, Usersdata.Password).then(\n      (res) => {\n        props.history.goBack()\n      },\n      error => {\n        console.log(error)\n      }\n    )"
				}
			}],
			"cascades": true,
			"values": {
				"localStyles": "mainPanel: {     [\"@media (min-width:960px)\"]: {       backgroundColor: \"#56baec\",       width: \"100%\",       flexGrow: 1,     },   },   loginHolder: { margin: \"5rem auto 0\", width: \"30vw\", textAlign: \"center\" },   loginArea: {     position: \"relative\",     background: \"white\",     padding: \"4rem 3rem 2rem\",     borderRadius: \"0.5rem\",     marginBottom: \"1rem\",     boxSizing: \"border-box\",     boxShadow: \"0px 3px 20px 5px #00000030\",   },   loginTitle: {     textTransform: \"uppercase\",     fontSize: \"1.2rem\",     letterSpacing: \"0.1rem\",     color: \"#3084af\",   },   image: {     width: \"5rem\",     position: \"absolute\",     top: \"-2.5rem\",     left: \"calc(15vw - (2.5rem + 2.5px))\",     border: \"5px solid white\",     borderRadius: \"5rem\",   },"
			}
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
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "text - Login",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "text",
						"values": {
							"Content": "<p className={classes.loginTitle}>Login to your account</p><img  className={classes.image} src='/api/images/user.svg' />"
						}
					}, {
						"name": "field - Email",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[0].unique_id,
							"Type": "edit",
							"Autofocus": true
						}
					}, {
						"name": "field - Password",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[1].unique_id,
							"Type": "edit"
						}
					}, {
						"name": "Link",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "Link",
						"values": {
							"destination": "/forgot",
							"innerText": "<p>Forgot your password?</p>"
						}
					}, {
						"name": "button",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "button",
						"values": {
							"ButtonText": "Sign In",
							"Action": "handleLogin"
						}
					}],
					"type": "element",
					"value": "div",
					"values": {
						"class": "classes.loginArea"
					}
				}, {
					"name": "text - Havent",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "text",
					"values": {
						"Content": "Haven't an account?&nbsp;"
					}
				}, {
					"name": "Link",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "Link",
					"values": {
						"destination": "/register",
						"innerText": " Sign Up here"
					}
				}],
				"type": "element",
				"value": "div",
				"values": {
					"class": "classes.loginHolder"
				}
			}]
		}, {
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}, {
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}],
		"path": "/login",
		"filename": "login.tsx"
	}, {
		"name": "Register",
		"type": "page",
		"children": [{
			"name": "Before Page Render",
			"type": "element",
			"value": "bpr",
			"prevent_delete": true,
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
					"code": "import { addUsers } from '../store/actions/usersActions'"
				}
			}],
			"collapseStatus": "expand"
		}, {
			"name": "Page Header",
			"type": "element",
			"value": "ph",
			"prevent_delete": true,
			"children": [{
				"name": "function",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "function",
				"values": {
					"functionName": "handleRegister",
					"functionBody": "dispatch(addUsers(Usersdata))\nsetSnackbarOpen(true)\nsetTimeout(() => {\n  props.history.push('/')\n},2000)"
				}
			}],
			"cascades": false,
			"values": {
				"localStyles": "mainPanel: {     [\"@media (min-width:960px)\"]: {       backgroundColor: \"#56baec\",       width: \"100%\",       flexGrow: 1,     },   },   loginHolder: { margin: \"5rem auto 0\", width: \"30vw\", textAlign: \"center\" },   loginArea: {     position: \"relative\",     background: \"white\",     padding: \"4rem 3rem 2rem\",     borderRadius: \"0.5rem\",     marginBottom: \"1rem\",     boxSizing: \"border-box\",     boxShadow: \"0px 3px 20px 5px #00000030\",   },   loginTitle: {     textTransform: \"uppercase\",     fontSize: \"1.2rem\",     letterSpacing: \"0.1rem\",     color: \"#3084af\",   },   image: {     width: \"5rem\",     position: \"absolute\",     top: \"-2.5rem\",     left: \"calc(15vw - (2.5rem + 2.5px))\",     border: \"5px solid white\",     borderRadius: \"5rem\",   },"
			}
		}, {
			"name": "Body",
			"type": "element",
			"value": "b",
			"prevent_delete": true,
			"cascades": false,
			"children": [{
				"name": "snackbar",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "snackbar",
				"values": {
					"message": "User Registered"
				}
			}, {
				"name": "div",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "text",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "text",
						"values": {
							"Content": "<p className={classes.loginTitle}>Register your account</p><img  className={classes.image} src='/img/user.svg' />"
						}
					}, {
						"name": "field",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[2].unique_id,
							"Autofocus": true,
							"Type": "edit"
						}
					}, {
						"name": "field",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[0].unique_id,
							"Type": "edit"
						}
					}, {
						"name": "field",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[1].unique_id,
							"Type": "edit"
						}
					}, {
						"name": "button",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "button",
						"values": {
							"ButtonText": "Sign Up",
							"Action": "handleRegister"
						}
					}],
					"type": "element",
					"value": "div",
					"values": {
						"class": "classes.loginArea"
					}
				}, {
					"name": "text",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "text",
					"values": {
						"Content": "Have an account?&nbsp;"
					}
				}, {
					"name": "Link",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "Link",
					"values": {
						"innerText": "Login",
						"destination": "/Login"
					}
				}],
				"type": "element",
				"value": "div",
				"values": {
					"class": "classes.loginHolder"
				}
			}]
		}, {
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}, {
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}],
		"path": "/register",
		"filename": "register.tsx"
	}, {
		"name": "Retrieve Password",
		"type": "page",
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
			"prevent_delete": true,
			"children": [],
			"cascades": false,
			"values": {
				"localStyles": "mainPanel: {     [\"@media (min-width:960px)\"]: {       backgroundColor: \"#56baec\",       width: \"100%\",       flexGrow: 1,     },   },   loginHolder: { margin: \"5rem auto 0\", width: \"30vw\", textAlign: \"center\" },   loginArea: {     position: \"relative\",     background: \"white\",     padding: \"4rem 3rem 2rem\",     borderRadius: \"0.5rem\",     marginBottom: \"1rem\",     boxSizing: \"border-box\",     boxShadow: \"0px 3px 20px 5px #00000030\",   },   loginTitle: {     textTransform: \"uppercase\",     fontSize: \"1.2rem\",     letterSpacing: \"0.1rem\",     color: \"#3084af\",   },   image: {     width: \"5rem\",     position: \"absolute\",     top: \"-2.5rem\",     left: \"calc(15vw - (2.5rem + 2.5px))\",     border: \"5px solid white\",     borderRadius: \"5rem\",   },"
			}
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
					"name": "div",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "text",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "text",
						"values": {
							"Content": "<p className={classes.loginTitle}>Reset your password</p><img  className={classes.image} src='/api/images/user.svg' />"
						}
					}, {
						"name": "field",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "field",
						"values": {
							"Field": userTable.fields[0].unique_id,
							"Type": "edit"
						}
					}, {
						"name": "button",
						"prevent_delete": false,
						"cascades": false,
						"children": [],
						"type": "element",
						"value": "button",
						"values": {
							"ButtonText": "Reset!"
						}
					}],
					"type": "element",
					"value": "div",
					"values": {
						"class": "classes.loginArea"
					}
				}, {
					"name": "text",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "text",
					"values": {
						"Content": "Go back to &nbsp;"
					}
				}, {
					"name": "Link",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "Link",
					"values": {
						"innerText": "Login",
						"destination": "/Login"
					}
				}],
				"type": "element",
				"value": "div",
				"values": {
					"class": "classes.loginHolder"
				}
			}]
		}, {
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}, {
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}],
		"path": "/forgot",
		"filename": "forgot.tsx"
	}],
	"path": "",
	"filename": ""
}

const secureZone = {
	"name": "Restricted Zone",
	"type": "page",
	"children": [{
		"name": "Before Page Render",
		"type": "element",
		"value": "bpr",
		"prevent_delete": true,
		"cascades": false,
		"children": [{
			"name": "code",
			"prevent_delete": false,
			"cascades": true,
			"children": [],
			"type": "element",
			"value": "code",
			"values": {
				"code": "import authHeaders from '../services/auth-header'"
			}
		}]
	}, {
		"name": "Page Header",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [{
			"name": "code",
			"prevent_delete": false,
			"cascades": true,
			"children": [],
			"type": "element",
			"value": "code",
			"values": {
				"code": "if (!authHeaders()) { \n    props.history.push(\"/Login\")\n  }"
			}
		}],
		"cascades": false
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true,
		"cascades": false,
		"children": []
	}, {
		"name": "Admin Dashboard",
		"type": "page",
		"path": "/admin",
		"filename": "admindashboard.tsx",
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
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}, {
			"name": "Body",
			"type": "element",
			"value": "b",
			"prevent_delete": true,
			"children": [{
				"name": "HTML Code",
				"type": "element",
				"value": "html",
				"prevent_delete": false,
				"cascades": false,
				"canhavechildren": "true",
				"children": [],
				"values": {
					"html": "<h1>Index page for your application</h1>"
				}
			}, {
				"name": "autolinking",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "autolinking"
			}],
			"cascades": false
		}, {
			"name": "Page Footer",
			"type": "element",
			"value": "pf",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}, {
			"name": "After Page Render",
			"type": "element",
			"value": "apr",
			"prevent_delete": true,
			"cascades": false,
			"children": []
		}]
	}],
	"path": "",
	"filename": ""
}

Application.pages[0].children.push(dmz)
Application.pages[0].children.push(secureZone)

return Application