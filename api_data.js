define({ "api": [
  {
    "type": "put",
    "url": "/v1/account/set-info",
    "title": "Update user info",
    "name": "SetInfo",
    "group": "Account",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Update user fields for passed parameters in list below.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>User last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sex",
            "description": "<p>User sex.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"status\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Parameters not pass validation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"message\": \"Some validation errors.\",\n    \"status_code\": 403\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Account.php",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token type and token string (token must be related to client!).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "{\n  \"Authorization\": \"Bearer 34giCfIA2MFWlrcbp7ndZOqplALVy035DhbEgP7v\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/account/set-photo",
    "title": "Update user photo",
    "name": "SetPhoto",
    "group": "Account",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Upload, resize and save user photo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FIle",
            "optional": false,
            "field": "photo",
            "description": "<p>Must be image with <code>jpg</code> or <code>png</code> extension.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"status\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Parameters not pass validation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"message\": \"Photo must be image.\",\n    \"status_code\": 403\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Account.php",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token type and token string (token must be related to client!).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "{\n  \"Authorization\": \"Bearer 34giCfIA2MFWlrcbp7ndZOqplALVy035DhbEgP7v\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/confirm",
    "title": "Confirm registration",
    "name": "PostConfirm",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Verify phone number and finaly authentificate user. If request successful, resource gives information about the user, along with the access token.<br>Format of response you can see on <a href=\"#api-OAuth-Authorize\">OAuth2 – Issue Access Token</a> reference.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>Verification code.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasscodeNotFounded",
            "description": "<p>Passcode not registered in system.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>User that owns passcode already verified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The passcode field is required.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PasscodeNotFounded",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"passcode_not_founded\",\n    \"error_desc\": \"Confirmation code not founded.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserAlreadyVerified",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"user_already_verified\",\n    \"error_desc\": \"User already verified.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Auth.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Create user account",
    "name": "PostSignup",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Create new user account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Local phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number_country",
            "description": "<p>ISO 3166-1 Country Code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Chat id related to user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Modification date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registration date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"phone\": \"+380636144114\",\n    \"chat_id\": 1,\n    \"updated_at\": \"2016-03-15 18:08:00\",\n    \"created_at\": \"2016-03-15 18:08:00\",\n    \"id\": 777\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneAlreadyRegistered",
            "description": "<p>Passed phone number is already registered in app.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The phone number field contains an invalid number.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PhoneAlreadyRegistered",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"phone_already_registered\",\n    \"error_desc\": \"Passed phone number already registered.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Auth.php",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/client/get-info",
    "title": "Get client info",
    "name": "GetInfo",
    "group": "Client",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get client info.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token string.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Client id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Client name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 1,\n    \"name\": \"Official iOS App.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The phone number field contains an invalid number.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Client.php",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/api/client/send-passcode",
    "title": "Send notify with passcode",
    "name": "SendPasscode",
    "group": "Client",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Send sms-notification with one-off passcode for specified action.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Must be <code>sms</code> or <code>call</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Action description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Local phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number_country",
            "description": "<p>ISO 3166-1 Country Code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>Indicates that notification is sended.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"status\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExceededRateLimit",
            "description": "<p>Clients permitted to send one sms in one minute.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The phone number field contains an invalid number.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "ExceededRateLimit",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"message\": \"You have exceeded your rate limit.\",\n    \"status_code\": 403\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/Client.php",
    "groupTitle": "Client",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token type and token string (token must be related to client!).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "{\n  \"Authorization\": \"Bearer 34giCfIA2MFWlrcbp7ndZOqplALVy035DhbEgP7v\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/oauth/authorize",
    "title": "Get access token",
    "name": "Authorize",
    "group": "OAuth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get access token string, TTL, refresh token and token owner info.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>E164 phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>One-off passcode from sms.</p>"
          }
        ]
      }
    },
    "filename": "./endpoints/OAuth.php",
    "groupTitle": "OAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "access_token_expiration",
            "description": "<p>Access Token TTL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Token owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.chat_id",
            "description": "<p>Chat id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.registered_at",
            "description": "<p>Registration timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"access_token\": \"...\",\n    \"access_token_expiration\": 3600,\n    \"refresh_token\": \"...\",\n    \"user\": {\n      \"id\": 1,\n      \"first_name\": \"\",\n      \"last_name\": \"\",\n      \"phone_number\": \"+380636144114\",\n      \"sex\": 0,\n      \"has_photo\": 0,\n      \"photo_50\": \"http://userstaticcontent.chatapp.com/d/placeholders/photo_50.png\",\n      \"photo_100\": \"http://userstaticcontent.chatapp.com/d/placeholders/photo_100.png\",\n      \"photo_200_orig\": \"http://userstaticcontent.chatapp.com/d/placeholders/photo_200_orig.png\",\n      \"chat_id\": 1,\n      \"online\": 0,\n      \"last_seen\": \"0000-00-00 00:00:00\",\n      \"registered_at\": \"2016-03-18 13:28:39\",\n      \"deactivated\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingRequiredParams",
            "description": "<p>One or more required parameter was not provided in the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingRequiredParams",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. Check the \"...\" parameter.\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/oauth/refresh-token",
    "title": "Refresh access token",
    "name": "RefreshToken",
    "group": "OAuth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get new access token using refresh token. If the token is valid, a response is returned in the same format as the resource <a href=\"#api-OAuth-Authorize\">OAuth2 – Issue Access Token</a>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>A valid refresh token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRefreshToken",
            "description": "<p>Refresh token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingRequiredParams",
            "description": "<p>One or more required parameter was not provided in the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidRefreshToken",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The refresh token is invalid.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "MissingRequiredParams",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. Check the \"...\" parameter.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/OAuth.php",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/oauth/validate-token",
    "title": "Get token Info",
    "name": "ValidateToken",
    "group": "OAuth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Check that token is valid. For now this method not provide any response in case if token is valid.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token string.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAccessToken",
            "description": "<p>Access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingRequiredParams",
            "description": "<p>One or more required parameter was not provided in the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidAccessToken",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"access_denied\",\n  \"error_description\": \"The resource owner or authorization server denied the request.\"\n}",
          "type": "json"
        },
        {
          "title": "MissingRequiredParams",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. Check the \"...\" parameter.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/OAuth.php",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/v1/users/self",
    "title": "Get authorized user",
    "name": "GetSelf",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about a owner of access token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token.</p>"
          }
        ]
      }
    },
    "filename": "./endpoints/User.php",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Chat id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registered_at",
            "description": "<p>Registration timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 777,\n    \"first_name\": \"Snoop\",\n    \"last_name\": \"Dogg\",\n    \"phone_number\": \"+12025550177\",\n    \"sex\": 2,\n    \"has_photo\": 1,\n    \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"chat_id\": 777,\n    \"online\": 0,\n    \"last_seen\": \"2016-03-12 20:37:14\",\n    \"registered_at\": \"2016-03-12 00:00:00\",\n    \"deactivated\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/users/self/chat",
    "title": "Get authorized user chat",
    "name": "GetSelfChat",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about chat related to authorized user.<br>If <code>info</code> parameter equal to <em>interlocutor</em>, as a response will be given in format identical to resource <a href=\"#api-Users-GetSelf\">Users - Get User</a>. Other response formats described below.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Must be: <ul><li><code>users</code> — Get chat users;</span></li><li><code>interlocutor</code> — Get chat interlocutor excludes current user;</span></li><li><code>video_subscription</code> — Video subscription info.</span></li></ul></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response - Users": [
          {
            "group": "Response - Users",
            "optional": false,
            "field": "users",
            "description": "<p>Collection of user objects.</p>"
          }
        ],
        "Response - Interlocutor": [
          {
            "group": "Response - Interlocutor",
            "optional": false,
            "field": "user",
            "description": "<p>User object.</p>"
          }
        ],
        "Response - Video subscription response": [
          {
            "group": "Response - Video subscription response",
            "optional": false,
            "field": "purchased",
            "description": "<p>Subscription status.</p>"
          },
          {
            "group": "Response - Video subscription response",
            "optional": false,
            "field": "expires_at",
            "description": "<p>Subscription expiration date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Chat users response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 777,\n      \"first_name\": \"Snoop\",\n      \"last_name\": \"Dogg\",\n      \"phone_number\": \"+12025550177\",\n      \"sex\": 2,\n      \"has_photo\": 1,\n      \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"chat_id\": 777,\n      \"online\": 0,\n      \"last_seen\": \"2016-03-12 20:37:14\",\n      \"registered_at\": \"2016-03-12 00:00:00\",\n      \"deactivated\": 0\n    },\n    {\n      \"id\": 1000,\n      \"first_name\": \"Jennifer\",\n      \"last_name\": \"Aniston\",\n      \"phone_number\": \"+12025550178\",\n      \"sex\": 1,\n      \"has_photo\": 1,\n      \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n      \"chat_id\": 777,\n      \"online\": 0,\n      \"last_seen\": \"2016-03-12 20:37:14\",\n      \"registered_at\": \"2016-03-12 00:00:00\",\n      \"deactivated\": 0\n    },\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Video subscription response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"purchased\": 0,\n    \"expires_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotCorrectInfoDescriptor",
            "description": "<p>Info descriptor passed to <code>info</code> parameter not in list of accepted values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "UnexpectedOnjectType",
            "description": "<p>In case of usage <code>$info=users|interlocutor</code> system gets object with unexpected type and transformation layer can't parse this object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotCorrectInfoDescriptor",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"message\": \"Not correct info descriptor.\",\n    \"status_code\": 403\n  }\n}",
          "type": "json"
        },
        {
          "title": "UnexpectedOnjectType",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n    \"message\": \"Gets unexpected object type: Collection\",\n    \"status_code\": 500\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/User.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/v1/users/{user-id}",
    "title": "Get user by id",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about a user with passed ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "http://api.chatapp.com/v1/users/777",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>user-id</code> of the user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"message\": \"User not found.\",\n    \"status_code\": 404\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/User.php",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Chat id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registered_at",
            "description": "<p>Registration timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 777,\n    \"first_name\": \"Snoop\",\n    \"last_name\": \"Dogg\",\n    \"phone_number\": \"+12025550177\",\n    \"sex\": 2,\n    \"has_photo\": 1,\n    \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"chat_id\": 777,\n    \"online\": 0,\n    \"last_seen\": \"2016-03-12 20:37:14\",\n    \"registered_at\": \"2016-03-12 00:00:00\",\n    \"deactivated\": 0\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/users/{user-id}/chat",
    "title": "Get user chat",
    "name": "GetUserChat",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>This method completely duplicates the behavior of the <a href=\"#api-Users-GetSelfChat\">Users - Get authorized user chat</a> method except that the method obtains information about the user chat whose identifier passed to the <code>{user-id}</code> section. All examples and response codes in the method described <a href=\"#api-Users-GetSelfChat\">Users - Get authorized user chat</a>, with the exception of one additional errors, which is described below.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>user-id</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"message\": \"User not found.\",\n    \"status_code\": 404\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/User.php",
    "groupTitle": "Users"
  }
] });
