class user {
    var id;
    var username;
    var password;
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