// require
const patientModel = require("../../models/patient/patient.model");

// patient registration controller
const patientRegistrationController = async (req, res) => {
  console.log("hit: /patient/registration POST");

  const patientDetails = ({
    firstName,
    lastName,
    email,
    mobileNumber,
    nationalId,
    birthCertificateNo,
    dateOfBir,
    bloodGroup,
    gender,
    profilePictureUrl,
    district,
    thana,
    area,
    buildingNo,
    password,
  } = req.body);

  try {
    await patientModel.create(patientDetails);

    console.log("patient registration successful");

    return res.status(200).json({
      status: "ok",
      body: {
        message: "patient registration successful",
      },
    });
  } catch (err) {
    console.log(`patient registration error: ${err}`);

    return res.status(500).json({
      status: "error",
      body: {
        message: `patient registration error: ${err}`,
      },
    });
  }
};

// export
module.exports = patientRegistrationController;
