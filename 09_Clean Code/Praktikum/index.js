class user {
    var id, username, password;
}

class userservice {
    user[] users = [];

    user[] getallusers() {
        return users;
    }

    user getuserbyid(userid) {
        return users.filter(userid);
    }
}