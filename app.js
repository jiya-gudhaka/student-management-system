function login(user) {
  if (user.type === "student") {
    return "Student Dashboard";
  }
  if (user.role === "admin") {
    return "Welcome Admin";
  }
  return "Access Denied";
}

};

module.exports = login;