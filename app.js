function login(user) {
  if (user.type === "student") {
    return "Student Dashboard";
  }
  if (user.type === "admin") {
    return "Admin Dashboard";
  }
  return "Unauthorized";
}
module.exports = login;
