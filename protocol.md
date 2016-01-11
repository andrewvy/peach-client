POST	https://v1.peachapi.com/login

```
{
	"email": "REDACTED",
	"password": "REDACTED"
}
```

RESPONSE:
```
{
	"data": {
		"token": "REDACTED",
		"streams": [{
			"id": "REDACTED",
			"token": "REDACTED"
		}]
	},
	"success": 1
}
```

Use `token` to authenticate further requests.

`Authorization: Bearer REDACTED`

`User-Agent: Peach App/1.0.7 (iPhone; iOS 9.2; Scale/3.00)`

----

GET https://v1.peachapi.com/connections

(gets data to show main dash of your circle of connections)

schema: https://gist.github.com/andrewvy/0fac34802d61769061a4


		"inboundFriendRequests": [{
			"id": "REDACTED",
			"stream": {
				"id": "REDACTED",
				"name": "REDACTED",
				"displayName": "REDACTED",
				"avatarSrc": "REDACTED",
				"isPublic": false,
				"posts": [],
				"unreadPostCount": 0,
				"lastRead": 0
			},
			"createdTime": 1452484304
		}],

----

GET https://v1.peachapi.com/connections/explore

(gets statuses of 'friends of friends', that are not within your circle)

---

GET https://v1.peachapi.com/activity/isUnread

(gets whether there are unread activities or not)

---

PUT https://v1.peachapi.com/stream/id/:post_id/read

(acknowledge and mark this post as read)

---

POST https://v1.peachapi.com/friend-request/:friend_id/accept

(accepts the pending friend request)
