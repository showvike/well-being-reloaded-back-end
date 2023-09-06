// require
const doctorModel = require("../../models/doctor/doctor.model");

// doctor login controller
const doctorLoginController = async (req, res) => {
  console.log("hit: /doctor/ POST login");

  const { email, password } = req.body;

  try {
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      throw "no doctor found on this email";
    }

    if (doctor.password !== password) {
      throw "wrong password";
    }

    console.log("doctor login successful");

    return res.status(200).json({
      status: "ok",
      body: {
        message: "doctor login successful",
        data: doctor,
      },
    });
  } catch (err) {
    console.log(`doctor login error: ${err}`);

    return res.status(500).json({
      status: "error",
      body: {
        message: `doctor login error: ${err}`,
      },
    });
  }
};

// export
module.exports = doctorLoginController;
