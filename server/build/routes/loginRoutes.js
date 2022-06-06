"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Acces is denied");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Emain</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type"password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "myemail@gmail.com" &&
        password === "password") {
        // Show that user is logged in
        req.session = { loggedIn: true };
        // Redirect to the root route
        res.redirect("/");
    }
    else {
        res.send("invalid email or password");
    }
});
router.get("/", (req, res) => {
    //req.session
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
  `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route, logged in user");
});
