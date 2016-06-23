namespace cpp user

enum Status {
	unactivated = 0
	activated   = 1
	completed   = 2
}

struct User {
	1:string email
	2:string role
	3:string hashedPassword
	4:string provider
	5:string salt
	6:Status status
	7:bool   policyAgreed
	8:string activationCode
	9:string username
	10:string phone
	11:double location
  12:string password    //plain text
}

struct Response {
  1:i16 status
  2:User msg
}

service UserService {
  Response getUser()
}