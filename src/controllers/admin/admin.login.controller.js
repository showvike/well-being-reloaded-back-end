// require
const adminModel = require("../../models/admin/admin.model");

// admin login controller
const adminLoginController = async (req, res) => {
  console.log("hit: /admin/ POST login");

  const { email, password } = req.body;

  try {
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      throw "no admin found on this email";
    }

    if (admin.password !== password) {
      throw "wrong password";
    }

    console.log("admin login successful");

    return res.status(200).json({
      status: "ok",
      body: {
        message: "admin login successful",
      },
    });
  } catch (err) {
    console.log(`admin login error: ${err}`);

    return res.status(500).json({
      status: "error",
      body: {
        message: `admin login error: ${err}`,
      },
    });
  }
};

// export
module.exports = adminLoginController;
