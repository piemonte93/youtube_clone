import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } // 만약 패스워드와 패스워드 확인이 다르다면 status code를 400으로 등록해두고 join화면을 render할것이다.
  else {
    // To do: Register User
    // To do: Log user in
    res.redirect(routes.home); // 일치한다면 home으로 redirect
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;

  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To do: Process Log out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
