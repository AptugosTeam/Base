const userTable = Application.tables.find(table => table.unique_id === Parameters.table_unique_id)

const LoginPage = {
	"name": "Login Page",
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
				"code": "import { useGoogleLogin } from 'react-google-login'\n"
			}
		}],
		"collapseStatus": "expand"
	}, {
		"name": "Page Header",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [{
			"name": "Login Functionality",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "rememberMe",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "useState",
				"collapseStatus": "expand",
				"values": {
					"variableName": "rememberMe",
					"defaultValue": "true"
				}
			}, {
				"name": "Login Error",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "useState",
				"collapseStatus": "expand",
				"values": {
					"variableName": "loginError",
					"defaultValue": "null"
				}
			}, {
				"name": "onGoogleSuccess",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "function",
				"collapseStatus": "expand",
				"values": {
					"functionName": "onGoogleSuccess",
					"functionParameters": "res",
					"functionBody": "console.log('Login Success: Current User: ', res.profileObj)"
				}
			}, {
				"name": "onGoogleFailure",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "function",
				"collapseStatus": "expand",
				"values": {
					"functionName": "onGoogleFailure",
					"functionParameters": "res",
					"functionBody": "console.log('Login Failed: res: ', res)\n    if (res.error === 'popup_closed_by_user') {\n      setloginError('You must complete the login process in order to login.')\n    }"
				}
			}, {
				"name": "googleSignIn",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "code",
				"collapseStatus": "expand",
				"values": {
					"code": "const { signIn: googleSignIn } = useGoogleLogin({\n    onSuccess: onGoogleSuccess,\n    onFailure: onGoogleFailure,\n    clientId: '185605994716-97itv5an2ligdaq8b4r3l4r8h95rlip6.apps.googleusercontent.com',\n    isSignedIn: false,\n    accessType: 'offline'\n  })"
				}
			}],
			"type": "element",
			"value": "dummyEncloser",
			"collapseStatus": "collapse"
		}],
		"cascades": false,
		"collapseStatus": "expand"
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": [{
			"name": "Container",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "grid",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "Left Welcome",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "Paper",
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
								"Content": "Welcome back"
							}
						}],
						"type": "element",
						"value": "Paper",
						"collapseStatus": "expand",
						"values": {
							"elevation": "5",
							"variant": "elevation",
							"className": "theme.paperLeft"
						}
					}],
					"type": "element",
					"value": "grid",
					"collapseStatus": "collapse",
					"values": {
						"midcolumns": "3",
						"align": "stretch"
					}
				}, {
					"name": "Main Area",
					"prevent_delete": false,
					"cascades": false,
					"children": [{
						"name": "Register Area",
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
								"Content": "Don't have an account? "
							}
						}, {
							"name": "simpleLink",
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
									"Content": " Register!"
								}
							}],
							"type": "element",
							"value": "simpleLink",
							"collapseStatus": "expand",
							"values": {
								"tagToUse": "A",
								"destination": "/Register",
								"className": "theme.greenText"
							}
						}],
						"type": "element",
						"value": "div",
						"collapseStatus": "collapse",
						"values": {
							"class": "theme.right"
						}
					}, {
						"name": "Login Box",
						"prevent_delete": false,
						"cascades": false,
						"children": [{
							"name": "Heading",
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
										"Content": "Sign in to Aptugo"
									}
								}],
								"type": "element",
								"value": "typography",
								"collapseStatus": "expand",
								"values": {
									"tag": "h3"
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
										"Content": "Enter your details below."
									}
								}],
								"type": "element",
								"value": "typography",
								"collapseStatus": "expand",
								"values": {
									"tag": "body1"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "collapse"
						}, {
							"name": "div",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "button",
								"prevent_delete": false,
								"cascades": false,
								"children": [{
									"name": "MaterialIcon",
									"prevent_delete": false,
									"cascades": false,
									"children": [],
									"type": "element",
									"value": "MaterialIcon",
									"collapseStatus": "expand",
									"values": {
										"icon": "Google",
										"color": "default"
									}
								}],
								"type": "element",
								"value": "button",
								"collapseStatus": "expand",
								"values": {
									"ButtonText": "",
									"Variant": "outlined",
									"className": "theme.google",
									"Action": "googleSignIn",
									"fullWidth": true
								}
							}, {
								"name": "button",
								"prevent_delete": false,
								"cascades": false,
								"children": [{
									"name": "MaterialIcon",
									"prevent_delete": false,
									"cascades": false,
									"children": [],
									"type": "element",
									"value": "MaterialIcon",
									"collapseStatus": "expand",
									"values": {
										"icon": "Facebook"
									}
								}],
								"type": "element",
								"value": "button",
								"collapseStatus": "expand",
								"values": {
									"Action": "googleSignIn",
									"className": "theme.facebook",
									"Variant": "outlined",
									"fullWidth": true
								}
							}, {
								"name": "button",
								"prevent_delete": false,
								"cascades": false,
								"children": [{
									"name": "MaterialIcon",
									"prevent_delete": false,
									"cascades": false,
									"children": [],
									"type": "element",
									"value": "MaterialIcon",
									"collapseStatus": "expand",
									"values": {
										"icon": "Twitter"
									}
								}],
								"type": "element",
								"value": "button",
								"collapseStatus": "expand",
								"values": {
									"Action": "googleSignIn",
									"ButtonText": "",
									"className": "theme.twitter",
									"fullWidth": true,
									"Variant": "outlined"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand",
							"values": {
								"class": "theme.externalSignIn"
							}
						}, {
							"name": "Separator Line",
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
									"Content": "or"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand",
							"values": {
								"class": "theme.separatorLine"
							}
						}, {
							"name": "loginError Message",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "alertMessage",
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
										"Content": "{loginError}"
									}
								}],
								"type": "element",
								"value": "alertMessage",
								"collapseStatus": "expand",
								"values": {
									"severity": "error",
									"variant": "standard",
									"title": ""
								}
							}],
							"type": "element",
							"value": "condition",
							"collapseStatus": "expand",
							"values": {
								"condition": "loginError"
							}
						}, {
							"name": "uncontrolledInput",
							"prevent_delete": false,
							"cascades": false,
							"children": [],
							"type": "element",
							"value": "uncontrolledInput",
							"collapseStatus": "expand",
							"values": {
								"variant": "outlined",
								"label": "Email",
								"placeholder": "Email Address",
								"margin": "normal"
							}
						}, {
							"name": "uncontrolledInput",
							"prevent_delete": false,
							"cascades": false,
							"children": [],
							"type": "element",
							"value": "uncontrolledInput",
							"collapseStatus": "expand",
							"values": {
								"variant": "outlined",
								"label": "Password",
								"margin": "normal"
							}
						}, {
							"name": "div",
							"prevent_delete": false,
							"cascades": false,
							"children": [{
								"name": "checkbox",
								"prevent_delete": false,
								"cascades": false,
								"children": [],
								"type": "element",
								"value": "checkbox",
								"collapseStatus": "expand",
								"values": {
									"Checked": "rememberMe",
									"label": "Remember me",
									"OnClick": "{() => {setrememberMe(!rememberMe)}}"
								}
							}, {
								"name": "simpleLink",
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
										"Content": "Forgot password?",
										"ClassName": "theme.greenText"
									}
								}],
								"type": "element",
								"value": "simpleLink",
								"collapseStatus": "expand",
								"values": {
									"tagToUse": "NavLink",
									"destination": "/forgot"
								}
							}],
							"type": "element",
							"value": "div",
							"collapseStatus": "expand",
							"values": {
								"class": "theme.flexLine"
							}
						}, {
							"name": "button",
							"prevent_delete": false,
							"cascades": false,
							"children": [],
							"type": "element",
							"value": "button",
							"collapseStatus": "expand",
							"values": {
								"ButtonText": "Login",
								"Variant": "contained",
								"Color": "primary",
								"fullWidth": true
							}
						}],
						"type": "element",
						"value": "div",
						"collapseStatus": "collapse",
						"values": {
							"class": "theme.loginBox"
						}
					}],
					"type": "element",
					"value": "grid",
					"collapseStatus": "collapse",
					"values": {
						"midcolumns": "9"
					}
				}],
				"type": "element",
				"value": "grid",
				"collapseStatus": "collapse",
				"values": {
					"container": true,
					"align": "stretch"
				}
			}],
			"type": "element",
			"value": "Container",
			"collapseStatus": "expand",
			"values": {
				"maxWidth": "false",
				"className": "theme.loginPage"
			}
		}],
		"collapseStatus": "expand",
		"values": {
			"className": ["theme.pages"],
			"primaryColor": "green"
		}
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
		"collapseStatus": "expand"
	}],
	"path": "/login",
	"collapseStatus": "collapse",
	"filename": "login.tsx",
	"priority": 5
}

const OldLoginPage = {
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
}

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
	}, LoginPage, {
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