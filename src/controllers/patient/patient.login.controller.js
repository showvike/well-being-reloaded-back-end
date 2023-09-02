// require
const patientModel = require("../../models/patient/patient.model");

// patient login controller
const patientLoginController = async (req, res) => {
  console.log("hit: /patient/ POST login");

  const { email, password } = req.body;

  try {
    const patient = await patientModel.findOne({ email });

    if (!patient) {
      throw "no patient found on this email";
    }

    if (patient.password !== password) {
      throw "wrong password";
    }

    console.log("patient login successful");

    return res.status(200).json({
      status: "ok",
      body: {
        message: "patient login successful",
      },
    });
  } catch (err) {
    console.log(`patient login error: ${err}`);

    return res.status(500).json({
      status: "error",
      body: {
        message: `patient login error: ${err}`,
      },
    });
  }
};

// export
module.exports = patientLoginController;
